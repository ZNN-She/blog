# Skills 架构设计文档 V2 — 语义路由与多层级匹配

> V1 架构见 [skills-architecture.md](./skills-architecture.md)
> V2 核心变更：从"平铺式 Function Calling"演进为"语义预筛 → LLM 精选 → 执行"三层路由架构

---

## 1. V1 架构回顾与问题诊断

### V1 架构：平铺式 Function Calling

```
用户消息 → [所有 Skill 的 toolDefinition] + System Prompt → LLM 一次选 tool → 执行
```

当 Skill 数量少（≤ 6）时，这种架构简洁高效——一次 LLM 调用同时完成意图识别和参数提取。

### 随 Skill 增多暴露的问题

| 问题 | 根因 | 典型案例 |
|------|------|---------|
| **用户口语化匹配错** | tool `description` 只能写有限的触发词，无法覆盖所有口语表达 | "今天怎么样" 到底是查订单还是查销售看板？ |
| **相似 Skill 互相干扰** | description 有重叠语义，LLM 在相近选项间犹豫 | `query_orders` vs `query_order_category_statistics`，`search_products` vs `query_store_now_data` |
| **Tool 膨胀后 LLM 精度下降** | 研究（Berkeley 等）表明超过 10-15 个 tool 时选择准确率急剧降低 | 20+ tools 全量发送，噪音过多 |
| **Token 成本线性增长** | 每个 tool 约 150-250 tokens，20 个 ≈ 4000+ tokens 仅 tool 定义 | 单次请求 tool 开销翻倍 |
| **System Prompt 膨胀** | 每加一个 Skill 就多几行规则 | 当前 SYSTEM_PROMPT 已 26 行规则，还在持续增长 |

### 问题量化

```
当前 6 个 Skill:  tool tokens ~1200  →  准确率 ~90%
假设 15 个 Skill: tool tokens ~3000  →  准确率 ~75%（估算）
假设 30 个 Skill: tool tokens ~6000  →  准确率 ~60%（估算）
```

---

## 2. V2 架构：三层路由

### 架构总览

```
用户消息
    │
    ▼
┌─────────────────────────────────────┐
│ Layer 1: 语义路由 (Semantic Router) │  ← 廉价、快速，缩小候选集
│   关键词匹配 / Embedding 向量检索     │
│   N 个 Skill → Top 3~5 候选          │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ Layer 2: LLM Function Calling      │  ← 只发候选 Skill 的 toolDefinition
│   精准匹配 + 参数提取                 │
│   tool_choice: auto (候选集内)       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ Layer 3: Skill 执行 + 结果校验       │  ← 现有逻辑，新增置信度兜底
│   execute() → isFinal 判断           │
│   可选: 置信度低时追问用户             │
└─────────────────────────────────────┘
```

### 核心思路

> **不要让 LLM 在 30 个 tool 里选 1 个；先帮它筛到 3-5 个，再让它精确选择。**

Layer 1 是纯计算（关键词匹配 或 向量余弦相似度），不消耗 LLM tokens，延迟 < 10ms。
Layer 2 在缩小后的候选集上做 Function Calling，LLM 的选择准确率大幅提升。

---

## 3. Layer 1：语义路由（核心改进）

Layer 1 有两种实现方式，可组合使用，分阶段落地。

### 方案 A：关键词预过滤（轻量级，优先落地）

为每个 Skill 维护**关键词列表**，请求时做字符串匹配缩小候选集：

```typescript
// skill.interface.ts — Skill 接口扩展
interface Skill {
  readonly name: string;
  readonly toolDefinition: ToolDefinition;
  readonly keywords: string[];          // ✅ 新增：命中任一即纳入候选
  readonly excludeKeywords?: string[];  // ✅ 新增：命中则一定排除
  execute(params: Record<string, unknown>, context?: SkillContext): Promise<SkillResult>;
}
```

```typescript
// skill-registry.service.ts — 新增过滤方法
filterByKeywords(userMessage: string): Skill[] {
  const msg = userMessage.toLowerCase();

  return [...this.skills.values()].filter(skill => {
    // 排除词优先：命中排除词则跳过
    if (skill.excludeKeywords?.some(kw => msg.includes(kw))) return false;
    // 关键词匹配：命中任一即纳入
    return skill.keywords.some(kw => msg.includes(kw));
  });
}
```

各 Skill 关键词定义示例：

```typescript
// order-query.skill.ts
readonly keywords = ['订单', '订货', '销量', '订单数', '订货额', '订单统计'];
readonly excludeKeywords = ['分类', '类别', '爆品', '一次报量'];

// order-category-statistics.skill.ts
readonly keywords = ['订货情况', '分类订货', '爆品', '一次报量', '类别订货'];
readonly excludeKeywords = [];

// product-query.skill.ts
readonly keywords = ['商品', '查询', '搜索', '库存', 'PLU', '条码', '价格', '保质期', '产地', '有没有'];
readonly excludeKeywords = ['文案', '海报', '推广'];

// store-now-data.skill.ts
readonly keywords = ['销售', '看板', '毛利', '客流', '客单价', '进度', '存货金额', '早市', '晚市'];
readonly excludeKeywords = ['订单', '订货'];

// wechat-copy.skill.ts
readonly keywords = ['文案', '推广', '朋友圈', '宣传语', '促销文案'];
readonly excludeKeywords = ['海报', '图片'];

// poster-generation.skill.ts
readonly keywords = ['海报', '宣传图', '活动图', '海报图'];
readonly excludeKeywords = ['文案'];
```

**优势**：实现简单，半天可落地，立即缩小候选集。

**局限**：纯关键词无法处理语义相似但词汇不同的情况（"今天生意如何" 可能匹配不到任何关键词）。

### 方案 B：Embedding 语义路由（推荐，中期落地）

为每个 Skill 维护一组**代表话术**（不是简单的关键词，而是完整的用户表达），用 Embedding 做向量检索：

```typescript
// skill-examples.ts — 每个 Skill 配一组典型用户话术
const SKILL_EXAMPLES: Record<string, string[]> = {
  query_orders: [
    '今天订了多少货',
    '今天有多少订单',
    '看看订单',
    '订货额多少',
    '订单统计',
    '累计订单',
    '今天接了多少单',
  ],
  search_products: [
    '有没有西红柿',
    '查一下苹果的库存',
    '西红柿多少钱一斤',
    '看看有没有新鲜的鱼',
    'PLU码是多少',
    '这个商品还有货吗',
    '帮我找一下牛肉',
    '苹果到店价多少',
  ],
  query_store_now_data: [
    '今天销售怎么样',
    '今天卖了多少钱',
    '看看实时销售',
    '销售进度怎么样',
    '毛利多少',
    '客单价多少',
    '早市目标完成了没',
    '今天生意如何',
    '当前销售看板',
  ],
  query_order_category_statistics: [
    '分类订货情况',
    '爆品订了多少',
    '蔬菜订了多少',
    '一次报量多少',
    '今天各类别订货统计',
    '水果类订货额',
  ],
  write_wechat_copy: [
    '帮我写个推广文案',
    '写个朋友圈宣传',
    '帮我推一下这个商品',
    '搞个促销文案',
    '写一段推广语',
    '发群里的文案',
  ],
  generate_poster: [
    '帮我做个海报',
    '生成一张宣传图',
    '搞个促销海报',
    '做个活动图片',
    '帮我出张海报',
    '商品宣传图',
  ],
};
```

#### Embedding 路由流程

```
1. 启动时：预计算所有 SKILL_EXAMPLES 的 Embedding 向量，按 Skill 分组缓存
2. 请求时：
   a. 用户输入 → Embedding API → 得到向量 V
   b. V 与每组 example 向量做余弦相似度，取每组最大值作为该 Skill 的得分
   c. 取 Top-K（K=3~5）个得分最高的 Skill 作为候选集
   d. 只把这 K 个 Skill 的 toolDefinition 发给 LLM
```

```typescript
// embedding-router.service.ts
@Injectable()
export class EmbeddingRouterService {
  private skillEmbeddings: Map<string, number[][]> = new Map();

  constructor(private readonly configService: ConfigService) {}

  /** 启动时预计算所有 Skill 的 example 向量 */
  async initialize(examples: Record<string, string[]>): Promise<void> {
    for (const [skillName, phrases] of Object.entries(examples)) {
      const vectors = await this.batchEmbed(phrases);
      this.skillEmbeddings.set(skillName, vectors);
    }
  }

  /** 请求时：用户消息 → Top-K 候选 Skill */
  async findTopK(userMessage: string, k: number = 5): Promise<string[]> {
    const queryVec = await this.embed(userMessage);

    const scores: { name: string; score: number }[] = [];
    for (const [skillName, vectors] of this.skillEmbeddings) {
      // 取该 Skill 所有 example 的最大相似度
      const maxScore = Math.max(...vectors.map(v => cosineSimilarity(queryVec, v)));
      scores.push({ name: skillName, score: maxScore });
    }

    return scores
      .sort((a, b) => b.score - a.score)
      .slice(0, k)
      .map(s => s.name);
  }
}
```

**优势**：
- "今天生意如何" 会同时匹配 `query_orders` 和 `query_store_now_data`，两个都进候选集
- LLM 在更小的候选集中做精准选择，准确率大幅提升
- Embedding API 成本极低（阿里云 text-embedding-v3 约 ¥0.0007/千 token）

**成本对比**：

| 环节 | 方案 A（关键词） | 方案 B（Embedding） |
|------|-----------------|-------------------|
| 请求时额外开销 | 0（纯字符串匹配） | ~1 次 Embedding API 调用，< 10ms |
| 单次额外成本 | ¥0 | < ¥0.0001 |
| 准确率提升 | ~80% 的误匹配可解决 | ~95% 的误匹配可解决 |

---

## 4. Layer 2：LLM 精选（改进现有）

### 核心变更：只发候选 Skill 的 toolDefinition

```typescript
// chat.service.ts — V2 改进
async handleMessage(dto: ChatRequestDto, context?: SkillContext): Promise<ChatResponseDto> {
  // ① Layer 1: 语义路由缩小候选集
  const candidates = this.skillRegistry.filterByKeywords(dto.message);

  // 候选为空 → 走通用对话（不发任何 tool）
  if (candidates.length === 0) {
    return this.handleGeneralChat(dto);
  }

  // ② Layer 2: 只发候选 Skill 的 toolDefinition
  const tools = candidates.map(s => s.toolDefinition);
  const messages = this.buildMessages(dto);
  const response = await this.llmService.chatWithTools(messages, tools);

  // 无 tool call：直接返回文本
  if (!response.toolCalls?.length) {
    return { type: 'general_qa', content: response.content || '抱歉，我没有理解你的问题。' };
  }

  // 有 tool call：执行
  const toolCall = response.toolCalls[0];
  return this.executeToolCall(toolCall, messages, context);
}
```

### 通用对话降级

当 Layer 1 候选集为空时，不发送任何 tool，让 LLM 直接以通用助手身份回复：

```typescript
private async handleGeneralChat(dto: ChatRequestDto): Promise<ChatResponseDto> {
  const messages = this.buildMessages(dto);
  const response = await this.llmService.chatWithTools(messages); // 不传 tools
  return { type: 'general_qa', content: response.content || '抱歉，我没有理解你的问题。' };
}
```

### Token 成本对比

```
V1 (6 Skills 全量):  tools ~1200 tokens + system prompt ~150 tokens
V2 (3 Skills 候选):   tools ~600 tokens  + system prompt ~150 tokens
                     ↑ 节省 50% tool tokens

V1 (假设 15 Skills):  tools ~3000 tokens
V2 (5 Skills 候选):   tools ~1000 tokens
                     ↑ 节省 67% tool tokens
```

---

## 5. Layer 3：置信度兜底（新增）

当用户输入模糊、匹配到多个 Skill 且区分度不够时，增加**确认环节**避免误执行。

### 方案 1：简短输入 + 多候选 → 追问

```typescript
// chat.service.ts — Layer 3 置信度兜底
private shouldClarify(message: string, candidates: Skill[]): boolean {
  // 用户输入过短且候选 Skill 较多 → 需要澄清
  return message.length < 4 && candidates.length >= 3;
}

private buildClarificationResponse(candidates: Skill[]): ChatResponseDto {
  const options = candidates.map(s => ({
    label: s.toolDefinition.function.description.split('。')[0],
    skill: s.name,
  }));

  return {
    type: 'clarification',
    content: '您是想查询以下哪项内容呢？',
    data: { options },
  };
}
```

### 方案 2：LLM 返回非候选 tool → 降级

如果 LLM 在缩小后的候选集中仍选了一个不属于候选集的 tool（理论上不应发生，但防御性编程），降级为通用对话：

```typescript
const toolCall = response.toolCalls[0];
const skill = this.skillRegistry.get(toolCall.function.name);

// 防御：LLM 选的 tool 不在候选集中
if (!candidates.some(c => c.name === toolCall.function.name)) {
  this.logger.warn(`LLM selected tool outside candidates: ${toolCall.function.name}`);
  return this.handleGeneralChat(dto);
}
```

---

## 6. 更激进方案：Multi-Agent 架构

如果 Skill 数量会持续增长到 30+，建议考虑 **Multi-Agent** 模式。

### 架构图

```
用户消息
    │
    ▼
┌──────────────┐
│ Router Agent │  ← 一个轻量 LLM 调用，只做领域分类
│  (分类模型)   │     不发任何 tool，只返回 domain
└──────┬───────┘
       │
       ├─ domain: "order"   ──→ OrderAgent   (只有订单相关 tools)
       ├─ domain: "product" ──→ ProductAgent (只有商品相关 tools)
       ├─ domain: "content" ──→ ContentAgent (只有文案/海报 tools)
       ├─ domain: "sales"   ──→ SalesAgent   (只有销售看板 tools)
       └─ domain: "general" ──→ GeneralAgent (无 tools，直接对话)
```

每个 Agent 是一个独立的"小专家"，只带 3-5 个 tools，匹配精度极高。

### 目录结构

```
src/modules/chat/
├── agents/
│   ├── agent.interface.ts        # Agent { name, systemPrompt, skills[] }
│   ├── router.agent.ts           # RouterAgent — 领域路由
│   ├── order.agent.ts            # 订单域 Agent
│   ├── product.agent.ts          # 商品域 Agent
│   ├── content.agent.ts          # 内容生成域 Agent
│   └── sales.agent.ts            # 销售看板域 Agent
├── skills/                       # Skill 不变，但按 domain 分组
│   ├── order/
│   │   ├── order-query.skill.ts
│   │   └── order-category-statistics.skill.ts
│   ├── product/
│   │   └── product-query.skill.ts
│   ├── content/
│   │   ├── wechat-copy.skill.ts
│   │   └── poster-generation.skill.ts
│   └── sales/
│       └── store-now-data.skill.ts
└── services/
    ├── chat.service.ts           # 编排 Router → DomainAgent
    └── llm.service.ts
```

### Router Agent 实现

```typescript
// router.agent.ts
@Injectable()
export class RouterAgent {
  private readonly ROUTER_PROMPT = `你是一个意图路由器。根据用户消息，判断属于哪个领域。

领域列表：
- order: 订单、订货、订单统计、分类订货、爆品
- product: 商品、库存、价格、PLU、条码、保质期、产地
- content: 文案、推广、海报、宣传图、朋友圈
- sales: 销售、看板、毛利、客流、客单价、进度
- general: 闲聊、其他不属于以上领域的问题

只返回领域名称，不要返回其他内容。`;

  async route(userMessage: string): Promise<string> {
    const response = await this.llmService.chat([
      { role: 'system', content: this.ROUTER_PROMPT },
      { role: 'user', content: userMessage },
    ]);
    return response.trim().toLowerCase();
  }
}
```

### 成本对比

| 方案 | LLM 调用次数 | 延迟 | Token 消耗 | 适用场景 |
|------|-------------|------|-----------|---------|
| V1 平铺式 | 1 次 | 低 | 中 | Skill ≤ 8 |
| V2 语义路由 | 1 次（+1 次 Embedding） | 低 | 低 | Skill 10-20 |
| Multi-Agent | 2 次（Router + Agent） | 中 | 中 | Skill 20+ |

---

## 7. 渐进式演进路线

不建议一步到位，推荐分三步走：

### Phase 1：关键词预过滤（1 天可落地）

| 改动 | 文件 | 说明 |
|------|------|------|
| Skill 接口加 `keywords` / `excludeKeywords` | `skill.interface.ts` | 可选字段，不影响现有 Skill |
| 各 Skill 补充关键词定义 | 每个 `*.skill.ts` | 声明 `keywords` 和 `excludeKeywords` |
| SkillRegistry 加 `filterByKeywords()` | `skill-registry.service.ts` | 新增方法，不改现有方法 |
| ChatService 调 LLM 前先过滤 | `chat.service.ts` | 在 `handleMessage()` 开头加一层过滤 |
| 前端适配 clarification 类型 | `useChat.ts` | 新增追问选项渲染 |

**效果**：立即缩小候选集，解决 ~80% 的误匹配。

### Phase 2：Embedding 语义路由（2-3 天）

| 改动 | 文件 | 说明 |
|------|------|------|
| 新增 EmbeddingRouterService | `embedding-router.service.ts` | 封装 Embedding API 调用和向量检索 |
| 预计算 Skill 向量 | ChatModule `OnModuleInit` | 启动时计算并缓存 |
| 维护 SKILL_EXAMPLES | `skill-examples.ts` | 每个 Skill 配 5-10 条典型话术 |
| ChatService 改用 Embedding 路由 | `chat.service.ts` | 替换关键词过滤为 Embedding Top-K |
| 关键词路由作为 fallback | `chat.service.ts` | Embedding 服务不可用时降级 |

**效果**：覆盖口语/语义近似表达，准确率再提升，解决 ~95% 的误匹配。

### Phase 3：Multi-Agent（3-5 天，Skill 达到 20+ 时启动）

| 改动 | 文件 | 说明 |
|------|------|------|
| 引入 RouterAgent | `agents/router.agent.ts` | 轻量 LLM 调用，只做领域分类 |
| 按领域拆分 DomainAgent | `agents/*.agent.ts` | 每个 Agent 只带 3-5 个 tools |
| Skill 按 domain 分目录 | `skills/{order,product,content,sales}/` | 物理隔离，不影响接口 |
| ChatService 改为 Router → Agent 编排 | `chat.service.ts` | 两阶段调用 |
| System Prompt 拆分到各 Agent | 各 Agent 文件 | 每个 Agent 独立的 system prompt |

**效果**：彻底解决 Skill 膨胀问题，支持 50+ Skill，每个领域独立迭代。

---

## 8. V1 → V2 变更对照

| 维度 | V1 | V2 |
|------|----|----|
| **路由方式** | LLM 从全量 tool 中选择 | 语义预筛 → LLM 从候选中选择 |
| **Tool 发送策略** | 每次请求发所有 tool | 只发 Layer 1 筛选后的候选 tool |
| **Skill 接口** | `name + toolDefinition + execute` | `name + toolDefinition + keywords + excludeKeywords + execute` |
| **SkillRegistry** | `get()` + `getToolDefinitions()` | 新增 `filterByKeywords()` |
| **System Prompt** | 硬编码所有 Skill 规则 | 可精简（LLM 候选集小，冲突减少） |
| **错误兜底** | 无 | 置信度低时追问 / 候选集外 tool 降级 |
| **Token 成本** | O(N) tool tokens/请求 | O(K) tool tokens/请求，K << N |
| **匹配准确率** | 随 Skill 数量下降 | 候选集小，准确率稳定 |

---

## 9. 风险与应对

| 风险 | 概率 | 应对 |
|------|------|------|
| 关键词过滤误排除正确 Skill | 中 | excludeKeywords 精细维护 + 无匹配时 fallback 到全量 |
| Embedding 服务不可用 | 低 | 降级到关键词路由，关键词路由失败降级到全量 |
| 追问打断用户对话节奏 | 低 | 仅在输入 < 4 字且候选 ≥ 3 时触发，其余走 LLM 自动选 |
| Phase 2 向量维度选择不当 | 低 | 阿里云 text-embedding-v3 固定 1024 维，无需选择 |

---

## 10. 附录：V1 架构保留部分

以下 V1 设计在 V2 中**完全保留**，不做变更：

- Skill 策略模式（`Skill` 接口 + `SkillRegistry`）
- `toolDefinition` 自包含设计（描述与实现在同一文件）
- `isFinal` 标记控制 LLM 二次加工
- 三层错误传导（Skill → Service → LLM）
- 三层参数校验（JSON Schema → JSON.parse → typeof + 业务校验）
- ReAct Loop 预留扩展
