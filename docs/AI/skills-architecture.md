# Skills 架构设计文档

## 系统架构总览

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client (web)                            │
│  ChatPage ─→ POST /api/v1/chat/message  { message, history }   │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     ChatModule (NestJS)                         │
│                                                                 │
│  ChatController ─→ ChatService ─→ LLMService ─→ DashScope API  │
│                          │                                      │
│                          ├─ SkillRegistry                       │
│                          │   ├─ OrderQuerySkill                 │
│                          │   ├─ ProductQuerySkill               │
│                          │   ├─ WechatCopySkill                 │
│                          │   ├─ PosterGenerationSkill           │
│                          │   ├─ AddProductSkill                 │
│                          │   ├─ UpdateProductSkill              │
│                          │   ├─ StockAlertSkill                 │
│                          │   ├─ AddProductCategorySkill         │
│                          │   └─ ListCategoriesSkill             │
│                          │                                      │
│                          └─ 业务模块                            │
│                              ├─ ProductService ─→ ProductRepo   │
│                              ├─ OrderService   ─→ OrderRepo     │
│                              └─ ImageGenerationService          │
└─────────────────────────────────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     MySQL (main_db)                             │
│  products │ product_categories │ orders │ users │ ...           │
└─────────────────────────────────────────────────────────────────┘
```

## 分层架构设计

项目采用 **四层架构**，自上而下逐层解耦：

```
┌──────────────┐
│  Controller  │  HTTP 路由、参数校验（ValidationPipe）、文件上传
├──────────────┤
│  ChatService │  Agent Loop：编排 LLM 调用与 Skill 执行
├──────────────┤
│    Skill     │  策略模式：每个 Skill 自描述 + 自实现
│              │  ┌─────────────────────────────────┐
│              │  │ name          唯一标识           │
│              │  │ toolDefinition 给 LLM 看的描述    │
│              │  │ execute()     业务实现           │
│              │  └─────────────────────────────────┘
├──────────────┤
│   Service    │  业务逻辑层：ProductService / OrderService / …
├──────────────┤
│  Repository  │  数据访问层：TypeORM Repository → MySQL
└──────────────┘
```

### 层间依赖规则

| 规则 | 说明 |
|---|---|
| Controller → ChatService | Controller 不直接调 Skill |
| ChatService → Skill | 仅通过 `SkillRegistry` 按名称查找，不 import 具体 Skill |
| Skill → Service | 每个 Skill 通过 NestJS DI 注入所需 Service |
| Service → Repository | 标准 NestJS 分层 |
| **Skill 之间不互相调用** | 每个 Skill 是独立单元 |

### ChatService 作为编排中心

ChatService 是唯一的编排节点，职责最小化：

```typescript
// chat.service.ts — 整个 ChatService 仅 ~100 行
handleMessage(dto):
  1. tools = registry.getToolDefinitions()     // 取工具列表
  2. messages = buildMessages(dto)             // 组装消息
  3. response = llm.chatWithTools(messages, tools)  // 调 LLM
  4. if (无 tool_call) → 直接返回文本
  5. if (有 tool_call) → registry.get(name).execute(params) → 返回
```

**不做的**：不解析业务参数、不知道 Product 表结构、不知道海报怎么生成。

---

## 核心设计决策

### 决策 1：Function Calling 替代两段式意图分类

| 旧方案 | 新方案 |
|---|---|
| IntentService 单独一次 LLM 调用识别意图 | 一次 LLM 调用完成意图 + 参数提取 |
| ChatService switch-case 路由到 Handler | SkillRegistry 按 tool name 匹配 |
| 新增意图需改 IntentService prompt + ChatService 路由 | 新增 Skill 加一个文件 + 注册一行 |
| 参数提取靠 prompt 工程 | 参数提取靠 JSON Schema 约束 |

### 决策 2：策略模式而非 switch-case

```typescript
// ❌ 旧方案：ChatService 膨胀
switch (intent) {
  case 'order_query':     return handleOrderQuery();
  case 'product_query':   return handleProductQuery();
  case 'wechat_copy':     return handleWechatCopy();
  // 每加一个能力，这里多一个 case
}

// ✅ 新方案：ChatService 不收任何 case
const skill = this.skillRegistry.get(toolCall.function.name);
return skill.execute(params);
```

### 决策 3：isFinal 标记控制 LLM 二次加工

| isFinal | 行为 | 适用场景 |
|---|---|---|
| `true` | Skill 返回内容直接给用户，不走第二轮 LLM | 数据查询、入库确认、已有完整文本 |
| `false` | Skill 返回数据 → LLM 润色后返回 | 需要 LLM 理解数据后再组织语言 |

当前所有 Skill 都设为 `isFinal: true`。这是为 **ReAct 多步推理**预留的扩展点：
当 `isFinal: false` 时，Skill 结果会反馈给 LLM，LLM 可以决定继续调更多 tool 或最终回复。

### 决策 4：Skill 携带 toolDefinition

`toolDefinition` 中的 `description` 和 `parameters` JSON Schema 直接放在 Skill 类里，而不是统一在一个单独的 prompt 文件中：

- **自包含**：一个 Skill 文件 = LLM 看的描述 + 代码实现
- **同步维护**：改了执行逻辑不会忘记更新 LLM 提示
- **零耦合**：新增 Skill 不需要修改任何配置文件

---

## 请求完整处理流程

```
用户: "今天订了多少货？"
        │
        ▼
┌─── ChatController ───────────────────────────────────────────┐
│  @Post('message')                                            │
│  @Public()  // 聊天接口不需登录                               │
│  接收 { message: "今天订了多少货？", history: [...] }          │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ▼
┌─── ChatService.handleMessage ───────────────────────────────┐
│                                                              │
│ ① 取 tools                                                   │
│   registry.getToolDefinitions()                              │
│   → [{name:'query_orders',...}, {name:'search_products',...},│
│      {name:'add_product',...}, ...共 9 个]                   │
│                                                              │
│ ② 构建 messages                                              │
│   [system prompt, ...history, {role:'user', content:'...'}]  │
│                                                              │
│ ③ 调用 LLM                                                   │
│   llm.chatWithTools(messages, tools)                         │
│   → POST DashScope /chat/completions                         │
│     body: { messages, tools, tool_choice:'auto' }            │
│                                                              │
│ ④ LLM 返回 tool_call                                         │
│   { function: { name: "query_orders",                        │
│                 arguments: '{"timeRange":"today"}' } }        │
│                                                              │
│ ⑤ 执行 Skill                                                 │
│   skill = registry.get("query_orders")                       │
│   result = await skill.execute(JSON.parse(arguments))        │
│                                                              │
│ ⑥ 返回响应                                                   │
│   { type: "order_query", content: "## 📊 今日订单...",       │
│     data: { stats: { todayOrders: 5, ... } } }               │
└──────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─── 前端 ChatLayout ──────────────────────────────────────────┐
│  MessageBubble → renderAssistantContent(item)                 │
│  responseType === 'order_query' → OrderQueryCard 渲染统计卡片 │
└──────────────────────────────────────────────────────────────┘
```

---

## Agent Loop 设计

当前是**单次执行**模式，但架构预留了多步推理扩展点。

### 当前：Single-Turn

```
用户消息 → LLM (tools) → 0 或 1 个 tool_call → 返回
```

### 预留扩展：ReAct Loop

`isFinal` 字段控制循环是否继续：

```typescript
// chat.service.ts 已预留结构
async handleMessage(dto) {
  let messages = this.buildMessages(dto);
  let maxTurns = 5;

  while (maxTurns-- > 0) {
    const response = await this.llmService.chatWithTools(messages, tools);

    if (!response.toolCalls?.length) {
      return { type: 'general_qa', content: response.content };
    }

    for (const call of response.toolCalls) {
      const skill = this.skillRegistry.get(call.function.name);
      const result = await skill.execute(params);

      if (result.isFinal) return result;        // Skill 说"够了"，结束
      
      messages.push({ role: 'tool', content: JSON.stringify(result) });
      // 继续下一轮，LLM 可能调用更多 tool
    }
  }
}
```

当某个 Skill 的 `isFinal: false` 时，它的输出会成为 LLM 的输入，LLM 可以继续推理并调用更多 tool，实现 "查热销商品 → 生成海报 → 写推广文案" 的链式执行。

---

## 错误处理设计

### 三层错误传导

```
Skill.execute() catch
  → toUserError() 翻译 DB 错误 → 中文提示
  → isFinal: true 直接返回用户

Service 层异常
  → NestJS HttpException
  → HttpExceptionFilter 捕获 → 统一响应格式

LLM 调用异常
  → InternalServerErrorException
  → api.ts 拦截器 → message.error toast
```

### 错误分类与翻译

[error-helper.ts](../src/modules/chat/skills/error-helper.ts) 将 MySQL 原生错误转为中文：

| MySQL 错误 | 用户看到 |
|---|---|
| `Field 'xxx' doesn't have a default value` | 缺少必填字段「xxx」 |
| `Duplicate entry` | 数据已存在，不能重复添加 |
| `Data too long` | 输入的数据长度超出限制 |
| `ECONNREFUSED` | 数据库连接失败 |

### LLM 校验失败不调 LLM 兜底

当 Skill 校验参数不通过时，设置 `isFinal: true` 直接返回提示，**不走第二轮 LLM**。这避免了 "LLM 生成错误 → 再调 LLM 解释错误" 的浪费。

---

## 扩展性设计

### 新增 Skill（当前方式）

```typescript
// 1. 创建文件
@Injectable()
class NewSkill implements Skill {
  name = 'new_skill';
  toolDefinition = { /* ... */ };
  async execute(params) { /* ... */ }
}

// 2. 注册（chat.module.ts）
providers: [..., NewSkill],
onModuleInit() {
  this.skillRegistry.register(this.newSkill);
}
```

### 未来扩展方向

| 方向 | 做法 | 改动范围 |
|---|---|---|
| **分组过滤** | Skill 加 `group` 字段，请求时指定组 | Skill 接口 + ChatService |
| **权限控制** | Skill 加 `requiredRole`，execute 前校验 | Skill 接口 + ChatService |
| **动态加载** | 从配置文件/DB 读取 Skill 元数据，动态实例化 | SkillRegistry |
| **多步推理** | `isFinal: false` 启用 ReAct Loop | ChatService（已预留） |
| **审计日志** | SkillRegistry 统一拦截所有 execute 调用 | SkillRegistry |

### Skill 全景（当前 9 个）

```
查询类  │ query_orders            — 订单统计
        │ search_products          — 商品搜索
        │ list_categories          — 分类列表
        │ stock_alert              — 库存预警
操作类  │ add_product              — 添加商品
        │ update_product           — 更新商品
        │ add_product_category     — 创建分类
生成类  │ write_wechat_copy        — 文案撰写
        │ generate_poster          — 海报生成
```

---

## Skills 何时加载

所有 Skill 在 NestJS 启动时一次性注册，时机是模块初始化。

### 注册入口

[chat.module.ts](../src/modules/chat/chat.module.ts) 中的 `OnModuleInit` 钩子：

```typescript
export class ChatModule implements OnModuleInit {
  constructor(
    private readonly skillRegistry: SkillRegistry,
    private readonly orderQuerySkill: OrderQuerySkill,
    private readonly productQuerySkill: ProductQuerySkill,
    // ... 共 9 个 Skill 通过构造函数注入
  ) {}

  onModuleInit(): void {
    this.skillRegistry.register(this.orderQuerySkill);
    this.skillRegistry.register(this.productQuerySkill);
    // ... 逐一注册到 Map
  }
}
```

### 为什么启动时注册

| 决策 | 理由 |
|---|---|
| NestJS DI 保证依赖就绪 | 所有 Service/Repository 已初始化 |
| Map 查找 O(1) | LLM 返回 tool name 后直接 get |
| 数量少（9 个） | 不需要动态热插拔 |

---

## 2. Skills 何时传给模型

**不是**启动时一次性发给模型，而是**每次请求**时动态获取并发送。

### 请求流程

```
POST /api/v1/chat/message
  │
  ├─ SkillRegistry.getToolDefinitions()
  │     └─ 遍历 9 个 Skill，返回 ToolDefinition[]
  │        示例: [{ type: 'function', function: { name: 'query_orders', ... } }, ...]
  │
  ├─ buildMessages()
  │     └─ [system prompt, ...history, user message]
  │
  ├─ LLM.chatWithTools(messages, tools)
  │     └─ POST DashScope API
  │         body: { model, messages, tools, tool_choice: 'auto' }
  │
  └─ LLM 返回
        ├─ 无 tool_call → 文本直接返回
        └─ 有 tool_call → SkillRegistry.get(name).execute(params)
```

关键代码在 [chat.service.ts](../src/modules/chat/services/chat.service.ts) 的 `handleMessage()`：

```typescript
async handleMessage(dto: ChatRequestDto): Promise<ChatResponseDto> {
  const tools = this.skillRegistry.getToolDefinitions();  // 每次请求取
  const messages = this.buildMessages(dto);
  const response = await this.llmService.chatWithTools(messages, tools);
  // ...
}
```

### 好处

每次请求都重新获取 tool 定义，即使将来动态增删 Skill，下一次请求就能生效，无需重启。

---

## 3. Token 成本分析

### 当前开销

一个 tool 定义约 150-250 tokens（名称 + 描述 + parameters JSON Schema）：

| 组成部分 | Token 数 |
|---|---|
| System prompt | ~150 |
| 对话历史（10 轮） | ~1500 |
| 9 个 tools | ~1800 |
| **单次请求总计** | **~3500** |

Tool 定义约占单次请求的一半，但 qwen-plus 价格极低（输入约 ¥0.004/千 token），单次请求的 tool 开销约 **0.007 元**。

### 比旧方案更省

| 旧方案（两段式） | 新方案（Function Calling） |
|---|---|
| 第 1 次 LLM 调用：IntentService 分类 | 无 |
| 第 2 次 LLM 调用：Handler 执行 | 1 次 LLM 调用 |
| 2 次网络往返 | 1 次网络往返 |
| IntentService 单独的 prompt tokens | tool definitions 复用 |

省去 IntentService 的 90 行 prompt 和一次完整往返。

### 如果未来 Skill 膨胀到 20+

可以加关键词预过滤，不调 LLM：

```typescript
const TOOL_KEYWORDS: Record<string, string[]> = {
  query_orders:     ['订单', '订货', '销量'],
  search_products:  ['商品', '查询', '搜索', '库存'],
  add_product:      ['添加', '上架', '录入'],
  generate_poster:  ['海报', '图片', '宣传图'],
};
```

---

## 4. 是否所有 Skill 结构都一样

所有 Skill 都实现同一个 `Skill` 接口，但内部逻辑按职责分三类。

### 统一接口

```typescript
interface Skill {
  name: string;            // 唯一标识，LLM 返回的 tool_call 按此匹配
  toolDefinition: object;  // 给 LLM 看的描述 + 参数 Schema
  execute(params): Promise<SkillResult>;  // 业务实现
}
```

### 三类差异

| 类型 | 注入依赖 | 逻辑模式 | 代表 |
|---|---|---|---|
| **数据查询型** | ProductService / DataSource | 查 → 格式化 → 返回 | order-query, product-query, stock-alert, list-categories |
| **数据操作型** | ProductService / DataSource | 校验 → 写入 → 返回结果 | add-product, update-product, add-product-category |
| **内容生成型** | LLMService / ImageGenerationService | 取上下文 → 调 LLM → 返回内容 | wechat-copy, poster-generation |

### 为什么用策略模式

1. **ChatService 不需要知道 Skill 的细节** — 只做 `registry.get(name).execute(params)`
2. **新增 Skill 零侵入** — 加一个文件 + 在 ChatModule 注册一行，不改任何现有代码
3. **自描述** — `toolDefinition.description` 和 `execute()` 在同一个文件维护
4. **天然支持扩展** — 可以随时加字段（如 `group`、`requiredRole`）

---

## 5. 如何保证 LLM 返回数据的正确性

三层防护，逐层收敛：

### 第一层：JSON Schema 约束（模型侧）

`toolDefinition.function.parameters` 定义了参数格式，模型训练时已学会按 Schema 输出：

```json
// 模型返回的 tool_calls[0].function.arguments
{"name": "有机西红柿", "price": 8.8, "stock": 100}
```

### 第二层：ChatService 安全解析

```typescript
let params: Record<string, unknown> = {};
try {
  params = JSON.parse(argsJson);
} catch {
  this.logger.warn('Failed to parse tool arguments');
}
// 解析失败 → params 为空对象，交给 Skill 内部校验
```

### 第三层：Skill execute 内类型收敛 + 业务校验

```typescript
async execute(params: Record<string, unknown>): Promise<SkillResult> {
  // ① 显式类型收敛：不信任 LLM
  const input = {
    name:  typeof params.name  === 'string' ? params.name.trim()  : undefined,
    price: typeof params.price === 'number' ? params.price         : undefined,
    stock: typeof params.stock === 'number' ? Math.floor(params.stock) : undefined,
  };

  // ② 业务校验
  const missing = this.validate(input);
  if (missing.length > 0) {
    return { content: `⚠️ 以下必填项缺失：${missing.join('、')}`, isFinal: true };
  }

  // ③ 通过后才执行
  await this.productService.create(input);
}
```

### 完整链路

```
LLM 输出 → JSON Schema 约束（尽力匹配）
  → JSON.parse（解析失败兜底为空对象）
    → typeof 收敛（number/string/undefined）
      → 业务校验（required/range/duplicate）
        → 通过 → execute 业务逻辑
        → 失败 → 中文提示，isFinal: true 直接反馈用户
```

---

## 6. Function Calling 是模型原生能力

是的，JSON Schema 约束是模型训练时就具备的能力。

### 发送

```json
{
  "model": "qwen-plus",
  "messages": [...],
  "tools": [{
    "type": "function",
    "function": {
      "name": "add_product",
      "parameters": {
        "type": "object",
        "properties": {
          "name":  { "type": "string", "description": "商品名称" },
          "price": { "type": "number", "description": "售价" }
        }
      }
    }
  }],
  "tool_choice": "auto"
}
```

### 模型行为

1. **决定是否调** — 用户说"查订单"→ 选 tool；闲聊 → 直接回文本
2. **按 Schema 拼 JSON** — 从用户消息中提取参数并生成合法 JSON

### 但不是 100% 可靠

| 情况 | 概率 | 兜底 |
|---|---|---|
| 少传了必填字段 | 偶尔 | execute 内校验，返回"请补充 XX" |
| price 传了字符串 "8.8" | 偶尔 | typeof 收敛，转成 number |
| JSON 格式错误 | 极少 | JSON.parse try/catch |
| 选错 tool | 极少 | description 足够准 |
| 完全编造参数值 | 极少 | 业务校验（price > 0、DB 查重等） |

Schema 是第一道防线，但不是唯一防线。每一层都不信任上一层。
