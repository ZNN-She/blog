"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[217],{80217:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"V1 \u67B6\u6784\u89C1 ",paraId:0,tocIndex:0},{value:"skills-architecture.md",paraId:1,tocIndex:0},{value:`
V2 \u6838\u5FC3\u53D8\u66F4\uFF1A\u4ECE"\u5E73\u94FA\u5F0F Function Calling"\u6F14\u8FDB\u4E3A"\u8BED\u4E49\u9884\u7B5B \u2192 LLM \u7CBE\u9009 \u2192 \u6267\u884C"\u4E09\u5C42\u8DEF\u7531\u67B6\u6784`,paraId:0,tocIndex:0},{value:`\u7528\u6237\u6D88\u606F \u2192 [\u6240\u6709 Skill \u7684 toolDefinition] + System Prompt \u2192 LLM \u4E00\u6B21\u9009 tool \u2192 \u6267\u884C
`,paraId:2,tocIndex:2},{value:"\u5F53 Skill \u6570\u91CF\u5C11\uFF08\u2264 6\uFF09\u65F6\uFF0C\u8FD9\u79CD\u67B6\u6784\u7B80\u6D01\u9AD8\u6548\u2014\u2014\u4E00\u6B21 LLM \u8C03\u7528\u540C\u65F6\u5B8C\u6210\u610F\u56FE\u8BC6\u522B\u548C\u53C2\u6570\u63D0\u53D6\u3002",paraId:3,tocIndex:2},{value:"\u95EE\u9898",paraId:4,tocIndex:3},{value:"\u6839\u56E0",paraId:4,tocIndex:3},{value:"\u5178\u578B\u6848\u4F8B",paraId:4,tocIndex:3},{value:"\u7528\u6237\u53E3\u8BED\u5316\u5339\u914D\u9519",paraId:4,tocIndex:3},{value:"tool ",paraId:4,tocIndex:3},{value:"description",paraId:4,tocIndex:3},{value:" \u53EA\u80FD\u5199\u6709\u9650\u7684\u89E6\u53D1\u8BCD\uFF0C\u65E0\u6CD5\u8986\u76D6\u6240\u6709\u53E3\u8BED\u8868\u8FBE",paraId:4,tocIndex:3},{value:'"\u4ECA\u5929\u600E\u4E48\u6837" \u5230\u5E95\u662F\u67E5\u8BA2\u5355\u8FD8\u662F\u67E5\u9500\u552E\u770B\u677F\uFF1F',paraId:4,tocIndex:3},{value:"\u76F8\u4F3C Skill \u4E92\u76F8\u5E72\u6270",paraId:4,tocIndex:3},{value:"description \u6709\u91CD\u53E0\u8BED\u4E49\uFF0CLLM \u5728\u76F8\u8FD1\u9009\u9879\u95F4\u72B9\u8C6B",paraId:4,tocIndex:3},{value:"query_orders",paraId:4,tocIndex:3},{value:" vs ",paraId:4,tocIndex:3},{value:"query_order_category_statistics",paraId:4,tocIndex:3},{value:"\uFF0C",paraId:4,tocIndex:3},{value:"search_products",paraId:4,tocIndex:3},{value:" vs ",paraId:4,tocIndex:3},{value:"query_store_now_data",paraId:4,tocIndex:3},{value:"Tool \u81A8\u80C0\u540E LLM \u7CBE\u5EA6\u4E0B\u964D",paraId:4,tocIndex:3},{value:"\u7814\u7A76\uFF08Berkeley \u7B49\uFF09\u8868\u660E\u8D85\u8FC7 10-15 \u4E2A tool \u65F6\u9009\u62E9\u51C6\u786E\u7387\u6025\u5267\u964D\u4F4E",paraId:4,tocIndex:3},{value:"20+ tools \u5168\u91CF\u53D1\u9001\uFF0C\u566A\u97F3\u8FC7\u591A",paraId:4,tocIndex:3},{value:"Token \u6210\u672C\u7EBF\u6027\u589E\u957F",paraId:4,tocIndex:3},{value:"\u6BCF\u4E2A tool \u7EA6 150-250 tokens\uFF0C20 \u4E2A \u2248 4000+ tokens \u4EC5 tool \u5B9A\u4E49",paraId:4,tocIndex:3},{value:"\u5355\u6B21\u8BF7\u6C42 tool \u5F00\u9500\u7FFB\u500D",paraId:4,tocIndex:3},{value:"System Prompt \u81A8\u80C0",paraId:4,tocIndex:3},{value:"\u6BCF\u52A0\u4E00\u4E2A Skill \u5C31\u591A\u51E0\u884C\u89C4\u5219",paraId:4,tocIndex:3},{value:"\u5F53\u524D SYSTEM_PROMPT \u5DF2 26 \u884C\u89C4\u5219\uFF0C\u8FD8\u5728\u6301\u7EED\u589E\u957F",paraId:4,tocIndex:3},{value:`\u5F53\u524D 6 \u4E2A Skill:  tool tokens ~1200  \u2192  \u51C6\u786E\u7387 ~90%
\u5047\u8BBE 15 \u4E2A Skill: tool tokens ~3000  \u2192  \u51C6\u786E\u7387 ~75%\uFF08\u4F30\u7B97\uFF09
\u5047\u8BBE 30 \u4E2A Skill: tool tokens ~6000  \u2192  \u51C6\u786E\u7387 ~60%\uFF08\u4F30\u7B97\uFF09
`,paraId:5,tocIndex:4},{value:`\u7528\u6237\u6D88\u606F
    \u2502
    \u25BC
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Layer 1: \u8BED\u4E49\u8DEF\u7531 (Semantic Router) \u2502  \u2190 \u5EC9\u4EF7\u3001\u5FEB\u901F\uFF0C\u7F29\u5C0F\u5019\u9009\u96C6
\u2502   \u5173\u952E\u8BCD\u5339\u914D / Embedding \u5411\u91CF\u68C0\u7D22     \u2502
\u2502   N \u4E2A Skill \u2192 Top 3~5 \u5019\u9009          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
               \u2502
               \u25BC
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Layer 2: LLM Function Calling      \u2502  \u2190 \u53EA\u53D1\u5019\u9009 Skill \u7684 toolDefinition
\u2502   \u7CBE\u51C6\u5339\u914D + \u53C2\u6570\u63D0\u53D6                 \u2502
\u2502   tool_choice: auto (\u5019\u9009\u96C6\u5185)       \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
               \u2502
               \u25BC
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Layer 3: Skill \u6267\u884C + \u7ED3\u679C\u6821\u9A8C       \u2502  \u2190 \u73B0\u6709\u903B\u8F91\uFF0C\u65B0\u589E\u7F6E\u4FE1\u5EA6\u515C\u5E95
\u2502   execute() \u2192 isFinal \u5224\u65AD           \u2502
\u2502   \u53EF\u9009: \u7F6E\u4FE1\u5EA6\u4F4E\u65F6\u8FFD\u95EE\u7528\u6237             \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,paraId:6,tocIndex:6},{value:"\u4E0D\u8981\u8BA9 LLM \u5728 30 \u4E2A tool \u91CC\u9009 1 \u4E2A\uFF1B\u5148\u5E2E\u5B83\u7B5B\u5230 3-5 \u4E2A\uFF0C\u518D\u8BA9\u5B83\u7CBE\u786E\u9009\u62E9\u3002",paraId:7,tocIndex:7},{value:`Layer 1 \u662F\u7EAF\u8BA1\u7B97\uFF08\u5173\u952E\u8BCD\u5339\u914D \u6216 \u5411\u91CF\u4F59\u5F26\u76F8\u4F3C\u5EA6\uFF09\uFF0C\u4E0D\u6D88\u8017 LLM tokens\uFF0C\u5EF6\u8FDF < 10ms\u3002
Layer 2 \u5728\u7F29\u5C0F\u540E\u7684\u5019\u9009\u96C6\u4E0A\u505A Function Calling\uFF0CLLM \u7684\u9009\u62E9\u51C6\u786E\u7387\u5927\u5E45\u63D0\u5347\u3002`,paraId:8,tocIndex:7},{value:"Layer 1 \u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u53EF\u7EC4\u5408\u4F7F\u7528\uFF0C\u5206\u9636\u6BB5\u843D\u5730\u3002",paraId:9,tocIndex:8},{value:"\u4E3A\u6BCF\u4E2A Skill \u7EF4\u62A4",paraId:10,tocIndex:9},{value:"\u5173\u952E\u8BCD\u5217\u8868",paraId:10,tocIndex:9},{value:"\uFF0C\u8BF7\u6C42\u65F6\u505A\u5B57\u7B26\u4E32\u5339\u914D\u7F29\u5C0F\u5019\u9009\u96C6\uFF1A",paraId:10,tocIndex:9},{value:`// skill.interface.ts \u2014 Skill \u63A5\u53E3\u6269\u5C55
interface Skill {
  readonly name: string;
  readonly toolDefinition: ToolDefinition;
  readonly keywords: string[];          // \u2705 \u65B0\u589E\uFF1A\u547D\u4E2D\u4EFB\u4E00\u5373\u7EB3\u5165\u5019\u9009
  readonly excludeKeywords?: string[];  // \u2705 \u65B0\u589E\uFF1A\u547D\u4E2D\u5219\u4E00\u5B9A\u6392\u9664
  execute(params: Record<string, unknown>, context?: SkillContext): Promise<SkillResult>;
}
`,paraId:11,tocIndex:9},{value:`// skill-registry.service.ts \u2014 \u65B0\u589E\u8FC7\u6EE4\u65B9\u6CD5
filterByKeywords(userMessage: string): Skill[] {
  const msg = userMessage.toLowerCase();

  return [...this.skills.values()].filter(skill => {
    // \u6392\u9664\u8BCD\u4F18\u5148\uFF1A\u547D\u4E2D\u6392\u9664\u8BCD\u5219\u8DF3\u8FC7
    if (skill.excludeKeywords?.some(kw => msg.includes(kw))) return false;
    // \u5173\u952E\u8BCD\u5339\u914D\uFF1A\u547D\u4E2D\u4EFB\u4E00\u5373\u7EB3\u5165
    return skill.keywords.some(kw => msg.includes(kw));
  });
}
`,paraId:12,tocIndex:9},{value:"\u5404 Skill \u5173\u952E\u8BCD\u5B9A\u4E49\u793A\u4F8B\uFF1A",paraId:13,tocIndex:9},{value:`// order-query.skill.ts
readonly keywords = ['\u8BA2\u5355', '\u8BA2\u8D27', '\u9500\u91CF', '\u8BA2\u5355\u6570', '\u8BA2\u8D27\u989D', '\u8BA2\u5355\u7EDF\u8BA1'];
readonly excludeKeywords = ['\u5206\u7C7B', '\u7C7B\u522B', '\u7206\u54C1', '\u4E00\u6B21\u62A5\u91CF'];

// order-category-statistics.skill.ts
readonly keywords = ['\u8BA2\u8D27\u60C5\u51B5', '\u5206\u7C7B\u8BA2\u8D27', '\u7206\u54C1', '\u4E00\u6B21\u62A5\u91CF', '\u7C7B\u522B\u8BA2\u8D27'];
readonly excludeKeywords = [];

// product-query.skill.ts
readonly keywords = ['\u5546\u54C1', '\u67E5\u8BE2', '\u641C\u7D22', '\u5E93\u5B58', 'PLU', '\u6761\u7801', '\u4EF7\u683C', '\u4FDD\u8D28\u671F', '\u4EA7\u5730', '\u6709\u6CA1\u6709'];
readonly excludeKeywords = ['\u6587\u6848', '\u6D77\u62A5', '\u63A8\u5E7F'];

// store-now-data.skill.ts
readonly keywords = ['\u9500\u552E', '\u770B\u677F', '\u6BDB\u5229', '\u5BA2\u6D41', '\u5BA2\u5355\u4EF7', '\u8FDB\u5EA6', '\u5B58\u8D27\u91D1\u989D', '\u65E9\u5E02', '\u665A\u5E02'];
readonly excludeKeywords = ['\u8BA2\u5355', '\u8BA2\u8D27'];

// wechat-copy.skill.ts
readonly keywords = ['\u6587\u6848', '\u63A8\u5E7F', '\u670B\u53CB\u5708', '\u5BA3\u4F20\u8BED', '\u4FC3\u9500\u6587\u6848'];
readonly excludeKeywords = ['\u6D77\u62A5', '\u56FE\u7247'];

// poster-generation.skill.ts
readonly keywords = ['\u6D77\u62A5', '\u5BA3\u4F20\u56FE', '\u6D3B\u52A8\u56FE', '\u6D77\u62A5\u56FE'];
readonly excludeKeywords = ['\u6587\u6848'];
`,paraId:14,tocIndex:9},{value:"\u4F18\u52BF",paraId:15,tocIndex:9},{value:"\uFF1A\u5B9E\u73B0\u7B80\u5355\uFF0C\u534A\u5929\u53EF\u843D\u5730\uFF0C\u7ACB\u5373\u7F29\u5C0F\u5019\u9009\u96C6\u3002",paraId:15,tocIndex:9},{value:"\u5C40\u9650",paraId:16,tocIndex:9},{value:'\uFF1A\u7EAF\u5173\u952E\u8BCD\u65E0\u6CD5\u5904\u7406\u8BED\u4E49\u76F8\u4F3C\u4F46\u8BCD\u6C47\u4E0D\u540C\u7684\u60C5\u51B5\uFF08"\u4ECA\u5929\u751F\u610F\u5982\u4F55" \u53EF\u80FD\u5339\u914D\u4E0D\u5230\u4EFB\u4F55\u5173\u952E\u8BCD\uFF09\u3002',paraId:16,tocIndex:9},{value:"\u4E3A\u6BCF\u4E2A Skill \u7EF4\u62A4\u4E00\u7EC4",paraId:17,tocIndex:10},{value:"\u4EE3\u8868\u8BDD\u672F",paraId:17,tocIndex:10},{value:"\uFF08\u4E0D\u662F\u7B80\u5355\u7684\u5173\u952E\u8BCD\uFF0C\u800C\u662F\u5B8C\u6574\u7684\u7528\u6237\u8868\u8FBE\uFF09\uFF0C\u7528 Embedding \u505A\u5411\u91CF\u68C0\u7D22\uFF1A",paraId:17,tocIndex:10},{value:`// skill-examples.ts \u2014 \u6BCF\u4E2A Skill \u914D\u4E00\u7EC4\u5178\u578B\u7528\u6237\u8BDD\u672F
const SKILL_EXAMPLES: Record<string, string[]> = {
  query_orders: [
    '\u4ECA\u5929\u8BA2\u4E86\u591A\u5C11\u8D27',
    '\u4ECA\u5929\u6709\u591A\u5C11\u8BA2\u5355',
    '\u770B\u770B\u8BA2\u5355',
    '\u8BA2\u8D27\u989D\u591A\u5C11',
    '\u8BA2\u5355\u7EDF\u8BA1',
    '\u7D2F\u8BA1\u8BA2\u5355',
    '\u4ECA\u5929\u63A5\u4E86\u591A\u5C11\u5355',
  ],
  search_products: [
    '\u6709\u6CA1\u6709\u897F\u7EA2\u67FF',
    '\u67E5\u4E00\u4E0B\u82F9\u679C\u7684\u5E93\u5B58',
    '\u897F\u7EA2\u67FF\u591A\u5C11\u94B1\u4E00\u65A4',
    '\u770B\u770B\u6709\u6CA1\u6709\u65B0\u9C9C\u7684\u9C7C',
    'PLU\u7801\u662F\u591A\u5C11',
    '\u8FD9\u4E2A\u5546\u54C1\u8FD8\u6709\u8D27\u5417',
    '\u5E2E\u6211\u627E\u4E00\u4E0B\u725B\u8089',
    '\u82F9\u679C\u5230\u5E97\u4EF7\u591A\u5C11',
  ],
  query_store_now_data: [
    '\u4ECA\u5929\u9500\u552E\u600E\u4E48\u6837',
    '\u4ECA\u5929\u5356\u4E86\u591A\u5C11\u94B1',
    '\u770B\u770B\u5B9E\u65F6\u9500\u552E',
    '\u9500\u552E\u8FDB\u5EA6\u600E\u4E48\u6837',
    '\u6BDB\u5229\u591A\u5C11',
    '\u5BA2\u5355\u4EF7\u591A\u5C11',
    '\u65E9\u5E02\u76EE\u6807\u5B8C\u6210\u4E86\u6CA1',
    '\u4ECA\u5929\u751F\u610F\u5982\u4F55',
    '\u5F53\u524D\u9500\u552E\u770B\u677F',
  ],
  query_order_category_statistics: [
    '\u5206\u7C7B\u8BA2\u8D27\u60C5\u51B5',
    '\u7206\u54C1\u8BA2\u4E86\u591A\u5C11',
    '\u852C\u83DC\u8BA2\u4E86\u591A\u5C11',
    '\u4E00\u6B21\u62A5\u91CF\u591A\u5C11',
    '\u4ECA\u5929\u5404\u7C7B\u522B\u8BA2\u8D27\u7EDF\u8BA1',
    '\u6C34\u679C\u7C7B\u8BA2\u8D27\u989D',
  ],
  write_wechat_copy: [
    '\u5E2E\u6211\u5199\u4E2A\u63A8\u5E7F\u6587\u6848',
    '\u5199\u4E2A\u670B\u53CB\u5708\u5BA3\u4F20',
    '\u5E2E\u6211\u63A8\u4E00\u4E0B\u8FD9\u4E2A\u5546\u54C1',
    '\u641E\u4E2A\u4FC3\u9500\u6587\u6848',
    '\u5199\u4E00\u6BB5\u63A8\u5E7F\u8BED',
    '\u53D1\u7FA4\u91CC\u7684\u6587\u6848',
  ],
  generate_poster: [
    '\u5E2E\u6211\u505A\u4E2A\u6D77\u62A5',
    '\u751F\u6210\u4E00\u5F20\u5BA3\u4F20\u56FE',
    '\u641E\u4E2A\u4FC3\u9500\u6D77\u62A5',
    '\u505A\u4E2A\u6D3B\u52A8\u56FE\u7247',
    '\u5E2E\u6211\u51FA\u5F20\u6D77\u62A5',
    '\u5546\u54C1\u5BA3\u4F20\u56FE',
  ],
};
`,paraId:18,tocIndex:10},{value:`1. \u542F\u52A8\u65F6\uFF1A\u9884\u8BA1\u7B97\u6240\u6709 SKILL_EXAMPLES \u7684 Embedding \u5411\u91CF\uFF0C\u6309 Skill \u5206\u7EC4\u7F13\u5B58
2. \u8BF7\u6C42\u65F6\uFF1A
   a. \u7528\u6237\u8F93\u5165 \u2192 Embedding API \u2192 \u5F97\u5230\u5411\u91CF V
   b. V \u4E0E\u6BCF\u7EC4 example \u5411\u91CF\u505A\u4F59\u5F26\u76F8\u4F3C\u5EA6\uFF0C\u53D6\u6BCF\u7EC4\u6700\u5927\u503C\u4F5C\u4E3A\u8BE5 Skill \u7684\u5F97\u5206
   c. \u53D6 Top-K\uFF08K=3~5\uFF09\u4E2A\u5F97\u5206\u6700\u9AD8\u7684 Skill \u4F5C\u4E3A\u5019\u9009\u96C6
   d. \u53EA\u628A\u8FD9 K \u4E2A Skill \u7684 toolDefinition \u53D1\u7ED9 LLM
`,paraId:19,tocIndex:11},{value:`// embedding-router.service.ts
@Injectable()
export class EmbeddingRouterService {
  private skillEmbeddings: Map<string, number[][]> = new Map();

  constructor(private readonly configService: ConfigService) {}

  /** \u542F\u52A8\u65F6\u9884\u8BA1\u7B97\u6240\u6709 Skill \u7684 example \u5411\u91CF */
  async initialize(examples: Record<string, string[]>): Promise<void> {
    for (const [skillName, phrases] of Object.entries(examples)) {
      const vectors = await this.batchEmbed(phrases);
      this.skillEmbeddings.set(skillName, vectors);
    }
  }

  /** \u8BF7\u6C42\u65F6\uFF1A\u7528\u6237\u6D88\u606F \u2192 Top-K \u5019\u9009 Skill */
  async findTopK(userMessage: string, k: number = 5): Promise<string[]> {
    const queryVec = await this.embed(userMessage);

    const scores: { name: string; score: number }[] = [];
    for (const [skillName, vectors] of this.skillEmbeddings) {
      // \u53D6\u8BE5 Skill \u6240\u6709 example \u7684\u6700\u5927\u76F8\u4F3C\u5EA6
      const maxScore = Math.max(...vectors.map(v => cosineSimilarity(queryVec, v)));
      scores.push({ name: skillName, score: maxScore });
    }

    return scores
      .sort((a, b) => b.score - a.score)
      .slice(0, k)
      .map(s => s.name);
  }
}
`,paraId:20,tocIndex:11},{value:"\u4F18\u52BF",paraId:21,tocIndex:11},{value:"\uFF1A",paraId:21,tocIndex:11},{value:'"\u4ECA\u5929\u751F\u610F\u5982\u4F55" \u4F1A\u540C\u65F6\u5339\u914D ',paraId:22,tocIndex:11},{value:"query_orders",paraId:22,tocIndex:11},{value:" \u548C ",paraId:22,tocIndex:11},{value:"query_store_now_data",paraId:22,tocIndex:11},{value:"\uFF0C\u4E24\u4E2A\u90FD\u8FDB\u5019\u9009\u96C6",paraId:22,tocIndex:11},{value:"LLM \u5728\u66F4\u5C0F\u7684\u5019\u9009\u96C6\u4E2D\u505A\u7CBE\u51C6\u9009\u62E9\uFF0C\u51C6\u786E\u7387\u5927\u5E45\u63D0\u5347",paraId:22,tocIndex:11},{value:"Embedding API \u6210\u672C\u6781\u4F4E\uFF08\u963F\u91CC\u4E91 text-embedding-v3 \u7EA6 \xA50.0007/\u5343 token\uFF09",paraId:22,tocIndex:11},{value:"\u6210\u672C\u5BF9\u6BD4",paraId:23,tocIndex:11},{value:"\uFF1A",paraId:23,tocIndex:11},{value:"\u73AF\u8282",paraId:24,tocIndex:11},{value:"\u65B9\u6848 A\uFF08\u5173\u952E\u8BCD\uFF09",paraId:24,tocIndex:11},{value:"\u65B9\u6848 B\uFF08Embedding\uFF09",paraId:24,tocIndex:11},{value:"\u8BF7\u6C42\u65F6\u989D\u5916\u5F00\u9500",paraId:24,tocIndex:11},{value:"0\uFF08\u7EAF\u5B57\u7B26\u4E32\u5339\u914D\uFF09",paraId:24,tocIndex:11},{value:"~1 \u6B21 Embedding API \u8C03\u7528\uFF0C< 10ms",paraId:24,tocIndex:11},{value:"\u5355\u6B21\u989D\u5916\u6210\u672C",paraId:24,tocIndex:11},{value:"\xA50",paraId:24,tocIndex:11},{value:"< \xA50.0001",paraId:24,tocIndex:11},{value:"\u51C6\u786E\u7387\u63D0\u5347",paraId:24,tocIndex:11},{value:"~80% \u7684\u8BEF\u5339\u914D\u53EF\u89E3\u51B3",paraId:24,tocIndex:11},{value:"~95% \u7684\u8BEF\u5339\u914D\u53EF\u89E3\u51B3",paraId:24,tocIndex:11},{value:`// chat.service.ts \u2014 V2 \u6539\u8FDB
async handleMessage(dto: ChatRequestDto, context?: SkillContext): Promise<ChatResponseDto> {
  // \u2460 Layer 1: \u8BED\u4E49\u8DEF\u7531\u7F29\u5C0F\u5019\u9009\u96C6
  const candidates = this.skillRegistry.filterByKeywords(dto.message);

  // \u5019\u9009\u4E3A\u7A7A \u2192 \u8D70\u901A\u7528\u5BF9\u8BDD\uFF08\u4E0D\u53D1\u4EFB\u4F55 tool\uFF09
  if (candidates.length === 0) {
    return this.handleGeneralChat(dto);
  }

  // \u2461 Layer 2: \u53EA\u53D1\u5019\u9009 Skill \u7684 toolDefinition
  const tools = candidates.map(s => s.toolDefinition);
  const messages = this.buildMessages(dto);
  const response = await this.llmService.chatWithTools(messages, tools);

  // \u65E0 tool call\uFF1A\u76F4\u63A5\u8FD4\u56DE\u6587\u672C
  if (!response.toolCalls?.length) {
    return { type: 'general_qa', content: response.content || '\u62B1\u6B49\uFF0C\u6211\u6CA1\u6709\u7406\u89E3\u4F60\u7684\u95EE\u9898\u3002' };
  }

  // \u6709 tool call\uFF1A\u6267\u884C
  const toolCall = response.toolCalls[0];
  return this.executeToolCall(toolCall, messages, context);
}
`,paraId:25,tocIndex:13},{value:"\u5F53 Layer 1 \u5019\u9009\u96C6\u4E3A\u7A7A\u65F6\uFF0C\u4E0D\u53D1\u9001\u4EFB\u4F55 tool\uFF0C\u8BA9 LLM \u76F4\u63A5\u4EE5\u901A\u7528\u52A9\u624B\u8EAB\u4EFD\u56DE\u590D\uFF1A",paraId:26,tocIndex:14},{value:`private async handleGeneralChat(dto: ChatRequestDto): Promise<ChatResponseDto> {
  const messages = this.buildMessages(dto);
  const response = await this.llmService.chatWithTools(messages); // \u4E0D\u4F20 tools
  return { type: 'general_qa', content: response.content || '\u62B1\u6B49\uFF0C\u6211\u6CA1\u6709\u7406\u89E3\u4F60\u7684\u95EE\u9898\u3002' };
}
`,paraId:27,tocIndex:14},{value:`V1 (6 Skills \u5168\u91CF):  tools ~1200 tokens + system prompt ~150 tokens
V2 (3 Skills \u5019\u9009):   tools ~600 tokens  + system prompt ~150 tokens
                     \u2191 \u8282\u7701 50% tool tokens

V1 (\u5047\u8BBE 15 Skills):  tools ~3000 tokens
V2 (5 Skills \u5019\u9009):   tools ~1000 tokens
                     \u2191 \u8282\u7701 67% tool tokens
`,paraId:28,tocIndex:15},{value:"\u5F53\u7528\u6237\u8F93\u5165\u6A21\u7CCA\u3001\u5339\u914D\u5230\u591A\u4E2A Skill \u4E14\u533A\u5206\u5EA6\u4E0D\u591F\u65F6\uFF0C\u589E\u52A0",paraId:29,tocIndex:16},{value:"\u786E\u8BA4\u73AF\u8282",paraId:29,tocIndex:16},{value:"\u907F\u514D\u8BEF\u6267\u884C\u3002",paraId:29,tocIndex:16},{value:`// chat.service.ts \u2014 Layer 3 \u7F6E\u4FE1\u5EA6\u515C\u5E95
private shouldClarify(message: string, candidates: Skill[]): boolean {
  // \u7528\u6237\u8F93\u5165\u8FC7\u77ED\u4E14\u5019\u9009 Skill \u8F83\u591A \u2192 \u9700\u8981\u6F84\u6E05
  return message.length < 4 && candidates.length >= 3;
}

private buildClarificationResponse(candidates: Skill[]): ChatResponseDto {
  const options = candidates.map(s => ({
    label: s.toolDefinition.function.description.split('\u3002')[0],
    skill: s.name,
  }));

  return {
    type: 'clarification',
    content: '\u60A8\u662F\u60F3\u67E5\u8BE2\u4EE5\u4E0B\u54EA\u9879\u5185\u5BB9\u5462\uFF1F',
    data: { options },
  };
}
`,paraId:30,tocIndex:17},{value:"\u5982\u679C LLM \u5728\u7F29\u5C0F\u540E\u7684\u5019\u9009\u96C6\u4E2D\u4ECD\u9009\u4E86\u4E00\u4E2A\u4E0D\u5C5E\u4E8E\u5019\u9009\u96C6\u7684 tool\uFF08\u7406\u8BBA\u4E0A\u4E0D\u5E94\u53D1\u751F\uFF0C\u4F46\u9632\u5FA1\u6027\u7F16\u7A0B\uFF09\uFF0C\u964D\u7EA7\u4E3A\u901A\u7528\u5BF9\u8BDD\uFF1A",paraId:31,tocIndex:18},{value:`const toolCall = response.toolCalls[0];
const skill = this.skillRegistry.get(toolCall.function.name);

// \u9632\u5FA1\uFF1ALLM \u9009\u7684 tool \u4E0D\u5728\u5019\u9009\u96C6\u4E2D
if (!candidates.some(c => c.name === toolCall.function.name)) {
  this.logger.warn(\`LLM selected tool outside candidates: \${toolCall.function.name}\`);
  return this.handleGeneralChat(dto);
}
`,paraId:32,tocIndex:18},{value:"\u5982\u679C Skill \u6570\u91CF\u4F1A\u6301\u7EED\u589E\u957F\u5230 30+\uFF0C\u5EFA\u8BAE\u8003\u8651 ",paraId:33,tocIndex:19},{value:"Multi-Agent",paraId:33,tocIndex:19},{value:" \u6A21\u5F0F\u3002",paraId:33,tocIndex:19},{value:`\u7528\u6237\u6D88\u606F
    \u2502
    \u25BC
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Router Agent \u2502  \u2190 \u4E00\u4E2A\u8F7B\u91CF LLM \u8C03\u7528\uFF0C\u53EA\u505A\u9886\u57DF\u5206\u7C7B
\u2502  (\u5206\u7C7B\u6A21\u578B)   \u2502     \u4E0D\u53D1\u4EFB\u4F55 tool\uFF0C\u53EA\u8FD4\u56DE domain
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
       \u2502
       \u251C\u2500 domain: "order"   \u2500\u2500\u2192 OrderAgent   (\u53EA\u6709\u8BA2\u5355\u76F8\u5173 tools)
       \u251C\u2500 domain: "product" \u2500\u2500\u2192 ProductAgent (\u53EA\u6709\u5546\u54C1\u76F8\u5173 tools)
       \u251C\u2500 domain: "content" \u2500\u2500\u2192 ContentAgent (\u53EA\u6709\u6587\u6848/\u6D77\u62A5 tools)
       \u251C\u2500 domain: "sales"   \u2500\u2500\u2192 SalesAgent   (\u53EA\u6709\u9500\u552E\u770B\u677F tools)
       \u2514\u2500 domain: "general" \u2500\u2500\u2192 GeneralAgent (\u65E0 tools\uFF0C\u76F4\u63A5\u5BF9\u8BDD)
`,paraId:34,tocIndex:20},{value:'\u6BCF\u4E2A Agent \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684"\u5C0F\u4E13\u5BB6"\uFF0C\u53EA\u5E26 3-5 \u4E2A tools\uFF0C\u5339\u914D\u7CBE\u5EA6\u6781\u9AD8\u3002',paraId:35,tocIndex:20},{value:`src/modules/chat/
\u251C\u2500\u2500 agents/
\u2502   \u251C\u2500\u2500 agent.interface.ts        # Agent { name, systemPrompt, skills[] }
\u2502   \u251C\u2500\u2500 router.agent.ts           # RouterAgent \u2014 \u9886\u57DF\u8DEF\u7531
\u2502   \u251C\u2500\u2500 order.agent.ts            # \u8BA2\u5355\u57DF Agent
\u2502   \u251C\u2500\u2500 product.agent.ts          # \u5546\u54C1\u57DF Agent
\u2502   \u251C\u2500\u2500 content.agent.ts          # \u5185\u5BB9\u751F\u6210\u57DF Agent
\u2502   \u2514\u2500\u2500 sales.agent.ts            # \u9500\u552E\u770B\u677F\u57DF Agent
\u251C\u2500\u2500 skills/                       # Skill \u4E0D\u53D8\uFF0C\u4F46\u6309 domain \u5206\u7EC4
\u2502   \u251C\u2500\u2500 order/
\u2502   \u2502   \u251C\u2500\u2500 order-query.skill.ts
\u2502   \u2502   \u2514\u2500\u2500 order-category-statistics.skill.ts
\u2502   \u251C\u2500\u2500 product/
\u2502   \u2502   \u2514\u2500\u2500 product-query.skill.ts
\u2502   \u251C\u2500\u2500 content/
\u2502   \u2502   \u251C\u2500\u2500 wechat-copy.skill.ts
\u2502   \u2502   \u2514\u2500\u2500 poster-generation.skill.ts
\u2502   \u2514\u2500\u2500 sales/
\u2502       \u2514\u2500\u2500 store-now-data.skill.ts
\u2514\u2500\u2500 services/
    \u251C\u2500\u2500 chat.service.ts           # \u7F16\u6392 Router \u2192 DomainAgent
    \u2514\u2500\u2500 llm.service.ts
`,paraId:36,tocIndex:21},{value:`// router.agent.ts
@Injectable()
export class RouterAgent {
  private readonly ROUTER_PROMPT = \`\u4F60\u662F\u4E00\u4E2A\u610F\u56FE\u8DEF\u7531\u5668\u3002\u6839\u636E\u7528\u6237\u6D88\u606F\uFF0C\u5224\u65AD\u5C5E\u4E8E\u54EA\u4E2A\u9886\u57DF\u3002

\u9886\u57DF\u5217\u8868\uFF1A
- order: \u8BA2\u5355\u3001\u8BA2\u8D27\u3001\u8BA2\u5355\u7EDF\u8BA1\u3001\u5206\u7C7B\u8BA2\u8D27\u3001\u7206\u54C1
- product: \u5546\u54C1\u3001\u5E93\u5B58\u3001\u4EF7\u683C\u3001PLU\u3001\u6761\u7801\u3001\u4FDD\u8D28\u671F\u3001\u4EA7\u5730
- content: \u6587\u6848\u3001\u63A8\u5E7F\u3001\u6D77\u62A5\u3001\u5BA3\u4F20\u56FE\u3001\u670B\u53CB\u5708
- sales: \u9500\u552E\u3001\u770B\u677F\u3001\u6BDB\u5229\u3001\u5BA2\u6D41\u3001\u5BA2\u5355\u4EF7\u3001\u8FDB\u5EA6
- general: \u95F2\u804A\u3001\u5176\u4ED6\u4E0D\u5C5E\u4E8E\u4EE5\u4E0A\u9886\u57DF\u7684\u95EE\u9898

\u53EA\u8FD4\u56DE\u9886\u57DF\u540D\u79F0\uFF0C\u4E0D\u8981\u8FD4\u56DE\u5176\u4ED6\u5185\u5BB9\u3002\`;

  async route(userMessage: string): Promise<string> {
    const response = await this.llmService.chat([
      { role: 'system', content: this.ROUTER_PROMPT },
      { role: 'user', content: userMessage },
    ]);
    return response.trim().toLowerCase();
  }
}
`,paraId:37,tocIndex:22},{value:"\u65B9\u6848",paraId:38,tocIndex:23},{value:"LLM \u8C03\u7528\u6B21\u6570",paraId:38,tocIndex:23},{value:"\u5EF6\u8FDF",paraId:38,tocIndex:23},{value:"Token \u6D88\u8017",paraId:38,tocIndex:23},{value:"\u9002\u7528\u573A\u666F",paraId:38,tocIndex:23},{value:"V1 \u5E73\u94FA\u5F0F",paraId:38,tocIndex:23},{value:"1 \u6B21",paraId:38,tocIndex:23},{value:"\u4F4E",paraId:38,tocIndex:23},{value:"\u4E2D",paraId:38,tocIndex:23},{value:"Skill \u2264 8",paraId:38,tocIndex:23},{value:"V2 \u8BED\u4E49\u8DEF\u7531",paraId:38,tocIndex:23},{value:"1 \u6B21\uFF08+1 \u6B21 Embedding\uFF09",paraId:38,tocIndex:23},{value:"\u4F4E",paraId:38,tocIndex:23},{value:"\u4F4E",paraId:38,tocIndex:23},{value:"Skill 10-20",paraId:38,tocIndex:23},{value:"Multi-Agent",paraId:38,tocIndex:23},{value:"2 \u6B21\uFF08Router + Agent\uFF09",paraId:38,tocIndex:23},{value:"\u4E2D",paraId:38,tocIndex:23},{value:"\u4E2D",paraId:38,tocIndex:23},{value:"Skill 20+",paraId:38,tocIndex:23},{value:"\u4E0D\u5EFA\u8BAE\u4E00\u6B65\u5230\u4F4D\uFF0C\u63A8\u8350\u5206\u4E09\u6B65\u8D70\uFF1A",paraId:39,tocIndex:24},{value:"\u6539\u52A8",paraId:40,tocIndex:25},{value:"\u6587\u4EF6",paraId:40,tocIndex:25},{value:"\u8BF4\u660E",paraId:40,tocIndex:25},{value:"Skill \u63A5\u53E3\u52A0 ",paraId:40,tocIndex:25},{value:"keywords",paraId:40,tocIndex:25},{value:" / ",paraId:40,tocIndex:25},{value:"excludeKeywords",paraId:40,tocIndex:25},{value:"skill.interface.ts",paraId:40,tocIndex:25},{value:"\u53EF\u9009\u5B57\u6BB5\uFF0C\u4E0D\u5F71\u54CD\u73B0\u6709 Skill",paraId:40,tocIndex:25},{value:"\u5404 Skill \u8865\u5145\u5173\u952E\u8BCD\u5B9A\u4E49",paraId:40,tocIndex:25},{value:"\u6BCF\u4E2A ",paraId:40,tocIndex:25},{value:"*.skill.ts",paraId:40,tocIndex:25},{value:"\u58F0\u660E ",paraId:40,tocIndex:25},{value:"keywords",paraId:40,tocIndex:25},{value:" \u548C ",paraId:40,tocIndex:25},{value:"excludeKeywords",paraId:40,tocIndex:25},{value:"SkillRegistry \u52A0 ",paraId:40,tocIndex:25},{value:"filterByKeywords()",paraId:40,tocIndex:25},{value:"skill-registry.service.ts",paraId:40,tocIndex:25},{value:"\u65B0\u589E\u65B9\u6CD5\uFF0C\u4E0D\u6539\u73B0\u6709\u65B9\u6CD5",paraId:40,tocIndex:25},{value:"ChatService \u8C03 LLM \u524D\u5148\u8FC7\u6EE4",paraId:40,tocIndex:25},{value:"chat.service.ts",paraId:40,tocIndex:25},{value:"\u5728 ",paraId:40,tocIndex:25},{value:"handleMessage()",paraId:40,tocIndex:25},{value:" \u5F00\u5934\u52A0\u4E00\u5C42\u8FC7\u6EE4",paraId:40,tocIndex:25},{value:"\u524D\u7AEF\u9002\u914D clarification \u7C7B\u578B",paraId:40,tocIndex:25},{value:"useChat.ts",paraId:40,tocIndex:25},{value:"\u65B0\u589E\u8FFD\u95EE\u9009\u9879\u6E32\u67D3",paraId:40,tocIndex:25},{value:"\u6548\u679C",paraId:41,tocIndex:25},{value:"\uFF1A\u7ACB\u5373\u7F29\u5C0F\u5019\u9009\u96C6\uFF0C\u89E3\u51B3 ~80% \u7684\u8BEF\u5339\u914D\u3002",paraId:41,tocIndex:25},{value:"\u6539\u52A8",paraId:42,tocIndex:26},{value:"\u6587\u4EF6",paraId:42,tocIndex:26},{value:"\u8BF4\u660E",paraId:42,tocIndex:26},{value:"\u65B0\u589E EmbeddingRouterService",paraId:42,tocIndex:26},{value:"embedding-router.service.ts",paraId:42,tocIndex:26},{value:"\u5C01\u88C5 Embedding API \u8C03\u7528\u548C\u5411\u91CF\u68C0\u7D22",paraId:42,tocIndex:26},{value:"\u9884\u8BA1\u7B97 Skill \u5411\u91CF",paraId:42,tocIndex:26},{value:"ChatModule ",paraId:42,tocIndex:26},{value:"OnModuleInit",paraId:42,tocIndex:26},{value:"\u542F\u52A8\u65F6\u8BA1\u7B97\u5E76\u7F13\u5B58",paraId:42,tocIndex:26},{value:"\u7EF4\u62A4 SKILL_EXAMPLES",paraId:42,tocIndex:26},{value:"skill-examples.ts",paraId:42,tocIndex:26},{value:"\u6BCF\u4E2A Skill \u914D 5-10 \u6761\u5178\u578B\u8BDD\u672F",paraId:42,tocIndex:26},{value:"ChatService \u6539\u7528 Embedding \u8DEF\u7531",paraId:42,tocIndex:26},{value:"chat.service.ts",paraId:42,tocIndex:26},{value:"\u66FF\u6362\u5173\u952E\u8BCD\u8FC7\u6EE4\u4E3A Embedding Top-K",paraId:42,tocIndex:26},{value:"\u5173\u952E\u8BCD\u8DEF\u7531\u4F5C\u4E3A fallback",paraId:42,tocIndex:26},{value:"chat.service.ts",paraId:42,tocIndex:26},{value:"Embedding \u670D\u52A1\u4E0D\u53EF\u7528\u65F6\u964D\u7EA7",paraId:42,tocIndex:26},{value:"\u6548\u679C",paraId:43,tocIndex:26},{value:"\uFF1A\u8986\u76D6\u53E3\u8BED/\u8BED\u4E49\u8FD1\u4F3C\u8868\u8FBE\uFF0C\u51C6\u786E\u7387\u518D\u63D0\u5347\uFF0C\u89E3\u51B3 ~95% \u7684\u8BEF\u5339\u914D\u3002",paraId:43,tocIndex:26},{value:"\u6539\u52A8",paraId:44,tocIndex:27},{value:"\u6587\u4EF6",paraId:44,tocIndex:27},{value:"\u8BF4\u660E",paraId:44,tocIndex:27},{value:"\u5F15\u5165 RouterAgent",paraId:44,tocIndex:27},{value:"agents/router.agent.ts",paraId:44,tocIndex:27},{value:"\u8F7B\u91CF LLM \u8C03\u7528\uFF0C\u53EA\u505A\u9886\u57DF\u5206\u7C7B",paraId:44,tocIndex:27},{value:"\u6309\u9886\u57DF\u62C6\u5206 DomainAgent",paraId:44,tocIndex:27},{value:"agents/*.agent.ts",paraId:44,tocIndex:27},{value:"\u6BCF\u4E2A Agent \u53EA\u5E26 3-5 \u4E2A tools",paraId:44,tocIndex:27},{value:"Skill \u6309 domain \u5206\u76EE\u5F55",paraId:44,tocIndex:27},{value:"skills/{order,product,content,sales}/",paraId:44,tocIndex:27},{value:"\u7269\u7406\u9694\u79BB\uFF0C\u4E0D\u5F71\u54CD\u63A5\u53E3",paraId:44,tocIndex:27},{value:"ChatService \u6539\u4E3A Router \u2192 Agent \u7F16\u6392",paraId:44,tocIndex:27},{value:"chat.service.ts",paraId:44,tocIndex:27},{value:"\u4E24\u9636\u6BB5\u8C03\u7528",paraId:44,tocIndex:27},{value:"System Prompt \u62C6\u5206\u5230\u5404 Agent",paraId:44,tocIndex:27},{value:"\u5404 Agent \u6587\u4EF6",paraId:44,tocIndex:27},{value:"\u6BCF\u4E2A Agent \u72EC\u7ACB\u7684 system prompt",paraId:44,tocIndex:27},{value:"\u6548\u679C",paraId:45,tocIndex:27},{value:"\uFF1A\u5F7B\u5E95\u89E3\u51B3 Skill \u81A8\u80C0\u95EE\u9898\uFF0C\u652F\u6301 50+ Skill\uFF0C\u6BCF\u4E2A\u9886\u57DF\u72EC\u7ACB\u8FED\u4EE3\u3002",paraId:45,tocIndex:27},{value:"\u7EF4\u5EA6",paraId:46,tocIndex:28},{value:"V1",paraId:46,tocIndex:28},{value:"V2",paraId:46,tocIndex:28},{value:"\u8DEF\u7531\u65B9\u5F0F",paraId:46,tocIndex:28},{value:"LLM \u4ECE\u5168\u91CF tool \u4E2D\u9009\u62E9",paraId:46,tocIndex:28},{value:"\u8BED\u4E49\u9884\u7B5B \u2192 LLM \u4ECE\u5019\u9009\u4E2D\u9009\u62E9",paraId:46,tocIndex:28},{value:"Tool \u53D1\u9001\u7B56\u7565",paraId:46,tocIndex:28},{value:"\u6BCF\u6B21\u8BF7\u6C42\u53D1\u6240\u6709 tool",paraId:46,tocIndex:28},{value:"\u53EA\u53D1 Layer 1 \u7B5B\u9009\u540E\u7684\u5019\u9009 tool",paraId:46,tocIndex:28},{value:"Skill \u63A5\u53E3",paraId:46,tocIndex:28},{value:"name + toolDefinition + execute",paraId:46,tocIndex:28},{value:"name + toolDefinition + keywords + excludeKeywords + execute",paraId:46,tocIndex:28},{value:"SkillRegistry",paraId:46,tocIndex:28},{value:"get()",paraId:46,tocIndex:28},{value:" + ",paraId:46,tocIndex:28},{value:"getToolDefinitions()",paraId:46,tocIndex:28},{value:"\u65B0\u589E ",paraId:46,tocIndex:28},{value:"filterByKeywords()",paraId:46,tocIndex:28},{value:"System Prompt",paraId:46,tocIndex:28},{value:"\u786C\u7F16\u7801\u6240\u6709 Skill \u89C4\u5219",paraId:46,tocIndex:28},{value:"\u53EF\u7CBE\u7B80\uFF08LLM \u5019\u9009\u96C6\u5C0F\uFF0C\u51B2\u7A81\u51CF\u5C11\uFF09",paraId:46,tocIndex:28},{value:"\u9519\u8BEF\u515C\u5E95",paraId:46,tocIndex:28},{value:"\u65E0",paraId:46,tocIndex:28},{value:"\u7F6E\u4FE1\u5EA6\u4F4E\u65F6\u8FFD\u95EE / \u5019\u9009\u96C6\u5916 tool \u964D\u7EA7",paraId:46,tocIndex:28},{value:"Token \u6210\u672C",paraId:46,tocIndex:28},{value:"O(N) tool tokens/\u8BF7\u6C42",paraId:46,tocIndex:28},{value:"O(K) tool tokens/\u8BF7\u6C42\uFF0CK << N",paraId:46,tocIndex:28},{value:"\u5339\u914D\u51C6\u786E\u7387",paraId:46,tocIndex:28},{value:"\u968F Skill \u6570\u91CF\u4E0B\u964D",paraId:46,tocIndex:28},{value:"\u5019\u9009\u96C6\u5C0F\uFF0C\u51C6\u786E\u7387\u7A33\u5B9A",paraId:46,tocIndex:28},{value:"\u98CE\u9669",paraId:47,tocIndex:29},{value:"\u6982\u7387",paraId:47,tocIndex:29},{value:"\u5E94\u5BF9",paraId:47,tocIndex:29},{value:"\u5173\u952E\u8BCD\u8FC7\u6EE4\u8BEF\u6392\u9664\u6B63\u786E Skill",paraId:47,tocIndex:29},{value:"\u4E2D",paraId:47,tocIndex:29},{value:"excludeKeywords \u7CBE\u7EC6\u7EF4\u62A4 + \u65E0\u5339\u914D\u65F6 fallback \u5230\u5168\u91CF",paraId:47,tocIndex:29},{value:"Embedding \u670D\u52A1\u4E0D\u53EF\u7528",paraId:47,tocIndex:29},{value:"\u4F4E",paraId:47,tocIndex:29},{value:"\u964D\u7EA7\u5230\u5173\u952E\u8BCD\u8DEF\u7531\uFF0C\u5173\u952E\u8BCD\u8DEF\u7531\u5931\u8D25\u964D\u7EA7\u5230\u5168\u91CF",paraId:47,tocIndex:29},{value:"\u8FFD\u95EE\u6253\u65AD\u7528\u6237\u5BF9\u8BDD\u8282\u594F",paraId:47,tocIndex:29},{value:"\u4F4E",paraId:47,tocIndex:29},{value:"\u4EC5\u5728\u8F93\u5165 < 4 \u5B57\u4E14\u5019\u9009 \u2265 3 \u65F6\u89E6\u53D1\uFF0C\u5176\u4F59\u8D70 LLM \u81EA\u52A8\u9009",paraId:47,tocIndex:29},{value:"Phase 2 \u5411\u91CF\u7EF4\u5EA6\u9009\u62E9\u4E0D\u5F53",paraId:47,tocIndex:29},{value:"\u4F4E",paraId:47,tocIndex:29},{value:"\u963F\u91CC\u4E91 text-embedding-v3 \u56FA\u5B9A 1024 \u7EF4\uFF0C\u65E0\u9700\u9009\u62E9",paraId:47,tocIndex:29},{value:"\u4EE5\u4E0B V1 \u8BBE\u8BA1\u5728 V2 \u4E2D",paraId:48,tocIndex:30},{value:"\u5B8C\u5168\u4FDD\u7559",paraId:48,tocIndex:30},{value:"\uFF0C\u4E0D\u505A\u53D8\u66F4\uFF1A",paraId:48,tocIndex:30},{value:"Skill \u7B56\u7565\u6A21\u5F0F\uFF08",paraId:49,tocIndex:30},{value:"Skill",paraId:49,tocIndex:30},{value:" \u63A5\u53E3 + ",paraId:49,tocIndex:30},{value:"SkillRegistry",paraId:49,tocIndex:30},{value:"\uFF09",paraId:49,tocIndex:30},{value:"toolDefinition",paraId:49,tocIndex:30},{value:" \u81EA\u5305\u542B\u8BBE\u8BA1\uFF08\u63CF\u8FF0\u4E0E\u5B9E\u73B0\u5728\u540C\u4E00\u6587\u4EF6\uFF09",paraId:49,tocIndex:30},{value:"isFinal",paraId:49,tocIndex:30},{value:" \u6807\u8BB0\u63A7\u5236 LLM \u4E8C\u6B21\u52A0\u5DE5",paraId:49,tocIndex:30},{value:"\u4E09\u5C42\u9519\u8BEF\u4F20\u5BFC\uFF08Skill \u2192 Service \u2192 LLM\uFF09",paraId:49,tocIndex:30},{value:"\u4E09\u5C42\u53C2\u6570\u6821\u9A8C\uFF08JSON Schema \u2192 JSON.parse \u2192 typeof + \u4E1A\u52A1\u6821\u9A8C\uFF09",paraId:49,tocIndex:30},{value:"ReAct Loop \u9884\u7559\u6269\u5C55",paraId:49,tocIndex:30}]}}]);
