## 8. V4 愿景：从"意图分类"到"动态规划执行"

> 本章描述超越 V3 的终极演进方向，代表系统的长期架构终态。

### 8.1 当前方案的本质局限

V3 的五种方案（包括 Embedding + Router + 反馈闭环）本质上都还是 **"意图分类系统"**：

```
用户说话 → 系统判断要调哪个 Skill → 执行
```

这个架构有一个无法突破的天花板：**Skill 本身是静态的、预定义的**。用户必须问系统"会"的问题，系统才能回答。

---

### 8.2 三种突破方向

#### 突破一：Multi-Step Planning（多步骤动态规划）

当前每次对话只能执行 1 个 Skill。更智能的做法是 LLM 自己规划执行链：

```
用户: "今天苹果卖得怎么样？和上周比怎样？要不要补货？"

当前架构（只能选 1 个）：
  → 只能选 query_store_now_data 或 search_products，无法完整回答

动态规划架构：
  LLM 规划: [search_products("苹果")] → [query_store_now_data] → [综合分析]
  依次执行，结果互相传递
  → 给出完整的"今日销售 + 库存 + 建议补货"综合回答
```

这就是 **ReAct（Reasoning + Acting）** 模式，也是 OpenAI Agents API 的核心。

#### 突破二：原子工具 + 动态组合

当前 Skill 是硬编码的：`query_orders`、`search_products`……用户只能问这些维度。更进一步是把 Skill 拆成**原子能力（Atomic Tools）**，由 LLM 自由组合：

```
原子工具：
  - get_product_info(name)       // 查单个商品
  - get_sales_today()            // 今日销售
  - get_order_list(date)         // 订单列表
  - calculate(expression)        // 计算器
  - compare(a, b)                // 对比两个数据

用户: "今天苹果和西红柿哪个卖得更好？"
→ LLM 自动规划:
   1. get_product_info("苹果")
   2. get_product_info("西红柿")
   3. compare(苹果销量, 西红柿销量)
   → 给出对比回答
```

这就是 **Tool Use Agent** 模式，系统能力边界取决于原子工具数量，而不是预定义 Skill 的组合。

#### 突破三：Text-to-Query（自然语言直接生成查询）

终极形态：不需要 Skill，用户的自然语言直接被 LLM 翻译成数据库查询 / API 调用：

```
用户: "上个月毛利最高的5个品类"

当前：无对应 Skill → 无法回答

Text-to-SQL 架构：
  LLM 根据数据库 Schema 生成:
  SELECT category, SUM(profit) as total_profit
  FROM sales WHERE date >= '2025-04-01'
  GROUP BY category ORDER BY total_profit DESC LIMIT 5
  → 直接查库 → 结构化回答
```

---

### 8.3 四种架构横向对比

| 架构 | 能力边界 | 复杂度 | 适用阶段 |
|------|---------|--------|---------|
| 当前：意图分类 → Skill | 仅能回答预定义问题 | 低 | 现在 |
| ReAct 多步规划 | 能组合回答复杂问题 | 中 | 6 个月后，Skill 稳定后 |
| 原子工具 + 动态组合 | 能回答任意维度组合 | 高 | 1 年后，数据接口完备后 |
| Text-to-SQL | 能回答任意数据问题 | 极高 | 长期，需要数据仓库支撑 |

---

### 8.4 演进路线延伸

在 V3 演进路线基础上，V4 代表的是架构范式的彻底升级：

```
V3 终态: 自适应意图理解系统（意图分类范式）
  用户输入 → Embedding/Router 语义路由
         → 候选集内 LLM 精选
         → 执行单个 Skill → 用户反馈 → 自动更新话术库

V4 方向一: ReAct 多步规划（6 个月后）
  用户输入 → LLM 规划执行链
         → 顺序执行多个 Skill，结果互相传递
         → 综合分析 → 完整回答复杂问题

V4 方向二: 原子工具动态组合（1 年后）
  用户输入 → LLM 自由组合原子工具
         → 并行/串行执行
         → 能力边界 = 原子工具总数

V4 方向三: Text-to-SQL（长期）
  用户输入 → LLM 生成 SQL/API 调用
         → 直接查库
         → 能力边界 = 数据仓库覆盖范围
```

---

### 8.5 设计原则：渐进迁移，不推倒重来

V4 的每个方向都可以在 V3 基础上**渐进式引入**，而非推倒重来：

| 迁移路径 | 说明 |
|---------|------|
| V3 → ReAct | 在现有 Skill 基础上增加 Planner 层，原有 Skill 不变 |
| V3 → 原子工具 | 把现有 Skill 拆分为更细粒度的 Tool，注册到同一 Registry |
| V3 → Text-to-SQL | 新增 SQL 生成能力作为兜底，不替换现有 Skill |

核心原则：**V3 的 Skill 策略模式（`Skill` 接口 + `SkillRegistry`）在 V4 中依然是基础设施，只是在其上叠加更强的规划和执行能力。**