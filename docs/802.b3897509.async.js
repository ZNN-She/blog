"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[802],{68802:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                         Client (web)                            \u2502
\u2502  ChatPage \u2500\u2192 POST /api/v1/chat/message  { message, history }   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                             \u2502
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25BC\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                     ChatModule (NestJS)                         \u2502
\u2502                                                                 \u2502
\u2502  ChatController \u2500\u2192 ChatService \u2500\u2192 LLMService \u2500\u2192 DashScope API  \u2502
\u2502                          \u2502                                      \u2502
\u2502                          \u251C\u2500 SkillRegistry                       \u2502
\u2502                          \u2502   \u251C\u2500 OrderQuerySkill                 \u2502
\u2502                          \u2502   \u251C\u2500 ProductQuerySkill               \u2502
\u2502                          \u2502   \u251C\u2500 WechatCopySkill                 \u2502
\u2502                          \u2502   \u251C\u2500 PosterGenerationSkill           \u2502
\u2502                          \u2502   \u251C\u2500 AddProductSkill                 \u2502
\u2502                          \u2502   \u251C\u2500 UpdateProductSkill              \u2502
\u2502                          \u2502   \u251C\u2500 StockAlertSkill                 \u2502
\u2502                          \u2502   \u251C\u2500 AddProductCategorySkill         \u2502
\u2502                          \u2502   \u2514\u2500 ListCategoriesSkill             \u2502
\u2502                          \u2502                                      \u2502
\u2502                          \u2514\u2500 \u4E1A\u52A1\u6A21\u5757                            \u2502
\u2502                              \u251C\u2500 ProductService \u2500\u2192 ProductRepo   \u2502
\u2502                              \u251C\u2500 OrderService   \u2500\u2192 OrderRepo     \u2502
\u2502                              \u2514\u2500 ImageGenerationService          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                             \u2502
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25BC\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                     MySQL (main_db)                             \u2502
\u2502  products \u2502 product_categories \u2502 orders \u2502 users \u2502 ...           \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,paraId:0,tocIndex:1},{value:"\u9879\u76EE\u91C7\u7528 ",paraId:1,tocIndex:2},{value:"\u56DB\u5C42\u67B6\u6784",paraId:1,tocIndex:2},{value:"\uFF0C\u81EA\u4E0A\u800C\u4E0B\u9010\u5C42\u89E3\u8026\uFF1A",paraId:1,tocIndex:2},{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  Controller  \u2502  HTTP \u8DEF\u7531\u3001\u53C2\u6570\u6821\u9A8C\uFF08ValidationPipe\uFF09\u3001\u6587\u4EF6\u4E0A\u4F20
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ChatService \u2502  Agent Loop\uFF1A\u7F16\u6392 LLM \u8C03\u7528\u4E0E Skill \u6267\u884C
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502    Skill     \u2502  \u7B56\u7565\u6A21\u5F0F\uFF1A\u6BCF\u4E2A Skill \u81EA\u63CF\u8FF0 + \u81EA\u5B9E\u73B0
\u2502              \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502              \u2502  \u2502 name          \u552F\u4E00\u6807\u8BC6           \u2502
\u2502              \u2502  \u2502 toolDefinition \u7ED9 LLM \u770B\u7684\u63CF\u8FF0    \u2502
\u2502              \u2502  \u2502 execute()     \u4E1A\u52A1\u5B9E\u73B0           \u2502
\u2502              \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   Service    \u2502  \u4E1A\u52A1\u903B\u8F91\u5C42\uFF1AProductService / OrderService / \u2026
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Repository  \u2502  \u6570\u636E\u8BBF\u95EE\u5C42\uFF1ATypeORM Repository \u2192 MySQL
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,paraId:2,tocIndex:2},{value:"\u89C4\u5219",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"Controller \u2192 ChatService",paraId:3,tocIndex:3},{value:"Controller \u4E0D\u76F4\u63A5\u8C03 Skill",paraId:3,tocIndex:3},{value:"ChatService \u2192 Skill",paraId:3,tocIndex:3},{value:"\u4EC5\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"SkillRegistry",paraId:3,tocIndex:3},{value:" \u6309\u540D\u79F0\u67E5\u627E\uFF0C\u4E0D import \u5177\u4F53 Skill",paraId:3,tocIndex:3},{value:"Skill \u2192 Service",paraId:3,tocIndex:3},{value:"\u6BCF\u4E2A Skill \u901A\u8FC7 NestJS DI \u6CE8\u5165\u6240\u9700 Service",paraId:3,tocIndex:3},{value:"Service \u2192 Repository",paraId:3,tocIndex:3},{value:"\u6807\u51C6 NestJS \u5206\u5C42",paraId:3,tocIndex:3},{value:"Skill \u4E4B\u95F4\u4E0D\u4E92\u76F8\u8C03\u7528",paraId:3,tocIndex:3},{value:"\u6BCF\u4E2A Skill \u662F\u72EC\u7ACB\u5355\u5143",paraId:3,tocIndex:3},{value:"ChatService \u662F\u552F\u4E00\u7684\u7F16\u6392\u8282\u70B9\uFF0C\u804C\u8D23\u6700\u5C0F\u5316\uFF1A",paraId:4,tocIndex:4},{value:`// chat.service.ts \u2014 \u6574\u4E2A ChatService \u4EC5 ~100 \u884C
handleMessage(dto):
  1. tools = registry.getToolDefinitions()     // \u53D6\u5DE5\u5177\u5217\u8868
  2. messages = buildMessages(dto)             // \u7EC4\u88C5\u6D88\u606F
  3. response = llm.chatWithTools(messages, tools)  // \u8C03 LLM
  4. if (\u65E0 tool_call) \u2192 \u76F4\u63A5\u8FD4\u56DE\u6587\u672C
  5. if (\u6709 tool_call) \u2192 registry.get(name).execute(params) \u2192 \u8FD4\u56DE
`,paraId:5,tocIndex:4},{value:"\u4E0D\u505A\u7684",paraId:6,tocIndex:4},{value:"\uFF1A\u4E0D\u89E3\u6790\u4E1A\u52A1\u53C2\u6570\u3001\u4E0D\u77E5\u9053 Product \u8868\u7ED3\u6784\u3001\u4E0D\u77E5\u9053\u6D77\u62A5\u600E\u4E48\u751F\u6210\u3002",paraId:6,tocIndex:4},{value:"\u65E7\u65B9\u6848",paraId:7,tocIndex:6},{value:"\u65B0\u65B9\u6848",paraId:7,tocIndex:6},{value:"IntentService \u5355\u72EC\u4E00\u6B21 LLM \u8C03\u7528\u8BC6\u522B\u610F\u56FE",paraId:7,tocIndex:6},{value:"\u4E00\u6B21 LLM \u8C03\u7528\u5B8C\u6210\u610F\u56FE + \u53C2\u6570\u63D0\u53D6",paraId:7,tocIndex:6},{value:"ChatService switch-case \u8DEF\u7531\u5230 Handler",paraId:7,tocIndex:6},{value:"SkillRegistry \u6309 tool name \u5339\u914D",paraId:7,tocIndex:6},{value:"\u65B0\u589E\u610F\u56FE\u9700\u6539 IntentService prompt + ChatService \u8DEF\u7531",paraId:7,tocIndex:6},{value:"\u65B0\u589E Skill \u52A0\u4E00\u4E2A\u6587\u4EF6 + \u6CE8\u518C\u4E00\u884C",paraId:7,tocIndex:6},{value:"\u53C2\u6570\u63D0\u53D6\u9760 prompt \u5DE5\u7A0B",paraId:7,tocIndex:6},{value:"\u53C2\u6570\u63D0\u53D6\u9760 JSON Schema \u7EA6\u675F",paraId:7,tocIndex:6},{value:`// \u274C \u65E7\u65B9\u6848\uFF1AChatService \u81A8\u80C0
switch (intent) {
  case 'order_query':     return handleOrderQuery();
  case 'product_query':   return handleProductQuery();
  case 'wechat_copy':     return handleWechatCopy();
  // \u6BCF\u52A0\u4E00\u4E2A\u80FD\u529B\uFF0C\u8FD9\u91CC\u591A\u4E00\u4E2A case
}

// \u2705 \u65B0\u65B9\u6848\uFF1AChatService \u4E0D\u6536\u4EFB\u4F55 case
const skill = this.skillRegistry.get(toolCall.function.name);
return skill.execute(params);
`,paraId:8,tocIndex:7},{value:"isFinal",paraId:9,tocIndex:8},{value:"\u884C\u4E3A",paraId:9,tocIndex:8},{value:"\u9002\u7528\u573A\u666F",paraId:9,tocIndex:8},{value:"true",paraId:9,tocIndex:8},{value:"Skill \u8FD4\u56DE\u5185\u5BB9\u76F4\u63A5\u7ED9\u7528\u6237\uFF0C\u4E0D\u8D70\u7B2C\u4E8C\u8F6E LLM",paraId:9,tocIndex:8},{value:"\u6570\u636E\u67E5\u8BE2\u3001\u5165\u5E93\u786E\u8BA4\u3001\u5DF2\u6709\u5B8C\u6574\u6587\u672C",paraId:9,tocIndex:8},{value:"false",paraId:9,tocIndex:8},{value:"Skill \u8FD4\u56DE\u6570\u636E \u2192 LLM \u6DA6\u8272\u540E\u8FD4\u56DE",paraId:9,tocIndex:8},{value:"\u9700\u8981 LLM \u7406\u89E3\u6570\u636E\u540E\u518D\u7EC4\u7EC7\u8BED\u8A00",paraId:9,tocIndex:8},{value:"\u5F53\u524D\u6240\u6709 Skill \u90FD\u8BBE\u4E3A ",paraId:10,tocIndex:8},{value:"isFinal: true",paraId:10,tocIndex:8},{value:"\u3002\u8FD9\u662F\u4E3A ",paraId:10,tocIndex:8},{value:"ReAct \u591A\u6B65\u63A8\u7406",paraId:10,tocIndex:8},{value:`\u9884\u7559\u7684\u6269\u5C55\u70B9\uFF1A
\u5F53 `,paraId:10,tocIndex:8},{value:"isFinal: false",paraId:10,tocIndex:8},{value:" \u65F6\uFF0CSkill \u7ED3\u679C\u4F1A\u53CD\u9988\u7ED9 LLM\uFF0CLLM \u53EF\u4EE5\u51B3\u5B9A\u7EE7\u7EED\u8C03\u66F4\u591A tool \u6216\u6700\u7EC8\u56DE\u590D\u3002",paraId:10,tocIndex:8},{value:"toolDefinition",paraId:11,tocIndex:9},{value:" \u4E2D\u7684 ",paraId:11,tocIndex:9},{value:"description",paraId:11,tocIndex:9},{value:" \u548C ",paraId:11,tocIndex:9},{value:"parameters",paraId:11,tocIndex:9},{value:" JSON Schema \u76F4\u63A5\u653E\u5728 Skill \u7C7B\u91CC\uFF0C\u800C\u4E0D\u662F\u7EDF\u4E00\u5728\u4E00\u4E2A\u5355\u72EC\u7684 prompt \u6587\u4EF6\u4E2D\uFF1A",paraId:11,tocIndex:9},{value:"\u81EA\u5305\u542B",paraId:12,tocIndex:9},{value:"\uFF1A\u4E00\u4E2A Skill \u6587\u4EF6 = LLM \u770B\u7684\u63CF\u8FF0 + \u4EE3\u7801\u5B9E\u73B0",paraId:12,tocIndex:9},{value:"\u540C\u6B65\u7EF4\u62A4",paraId:12,tocIndex:9},{value:"\uFF1A\u6539\u4E86\u6267\u884C\u903B\u8F91\u4E0D\u4F1A\u5FD8\u8BB0\u66F4\u65B0 LLM \u63D0\u793A",paraId:12,tocIndex:9},{value:"\u96F6\u8026\u5408",paraId:12,tocIndex:9},{value:"\uFF1A\u65B0\u589E Skill \u4E0D\u9700\u8981\u4FEE\u6539\u4EFB\u4F55\u914D\u7F6E\u6587\u4EF6",paraId:12,tocIndex:9},{value:`\u7528\u6237: "\u4ECA\u5929\u8BA2\u4E86\u591A\u5C11\u8D27\uFF1F"
        \u2502
        \u25BC
\u250C\u2500\u2500\u2500 ChatController \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  @Post('message')                                            \u2502
\u2502  @Public()  // \u804A\u5929\u63A5\u53E3\u4E0D\u9700\u767B\u5F55                               \u2502
\u2502  \u63A5\u6536 { message: "\u4ECA\u5929\u8BA2\u4E86\u591A\u5C11\u8D27\uFF1F", history: [...] }          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                       \u2502
                       \u25BC
\u250C\u2500\u2500\u2500 ChatService.handleMessage \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                                                              \u2502
\u2502 \u2460 \u53D6 tools                                                   \u2502
\u2502   registry.getToolDefinitions()                              \u2502
\u2502   \u2192 [{name:'query_orders',...}, {name:'search_products',...},\u2502
\u2502      {name:'add_product',...}, ...\u5171 9 \u4E2A]                   \u2502
\u2502                                                              \u2502
\u2502 \u2461 \u6784\u5EFA messages                                              \u2502
\u2502   [system prompt, ...history, {role:'user', content:'...'}]  \u2502
\u2502                                                              \u2502
\u2502 \u2462 \u8C03\u7528 LLM                                                   \u2502
\u2502   llm.chatWithTools(messages, tools)                         \u2502
\u2502   \u2192 POST DashScope /chat/completions                         \u2502
\u2502     body: { messages, tools, tool_choice:'auto' }            \u2502
\u2502                                                              \u2502
\u2502 \u2463 LLM \u8FD4\u56DE tool_call                                         \u2502
\u2502   { function: { name: "query_orders",                        \u2502
\u2502                 arguments: '{"timeRange":"today"}' } }        \u2502
\u2502                                                              \u2502
\u2502 \u2464 \u6267\u884C Skill                                                 \u2502
\u2502   skill = registry.get("query_orders")                       \u2502
\u2502   result = await skill.execute(JSON.parse(arguments))        \u2502
\u2502                                                              \u2502
\u2502 \u2465 \u8FD4\u56DE\u54CD\u5E94                                                   \u2502
\u2502   { type: "order_query", content: "## \u{1F4CA} \u4ECA\u65E5\u8BA2\u5355...",       \u2502
\u2502     data: { stats: { todayOrders: 5, ... } } }               \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                       \u2502
                       \u25BC
\u250C\u2500\u2500\u2500 \u524D\u7AEF ChatLayout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  MessageBubble \u2192 renderAssistantContent(item)                 \u2502
\u2502  responseType === 'order_query' \u2192 OrderQueryCard \u6E32\u67D3\u7EDF\u8BA1\u5361\u7247 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,paraId:13,tocIndex:10},{value:"\u5F53\u524D\u662F",paraId:14,tocIndex:11},{value:"\u5355\u6B21\u6267\u884C",paraId:14,tocIndex:11},{value:"\u6A21\u5F0F\uFF0C\u4F46\u67B6\u6784\u9884\u7559\u4E86\u591A\u6B65\u63A8\u7406\u6269\u5C55\u70B9\u3002",paraId:14,tocIndex:11},{value:`\u7528\u6237\u6D88\u606F \u2192 LLM (tools) \u2192 0 \u6216 1 \u4E2A tool_call \u2192 \u8FD4\u56DE
`,paraId:15,tocIndex:12},{value:"isFinal",paraId:16,tocIndex:13},{value:" \u5B57\u6BB5\u63A7\u5236\u5FAA\u73AF\u662F\u5426\u7EE7\u7EED\uFF1A",paraId:16,tocIndex:13},{value:`// chat.service.ts \u5DF2\u9884\u7559\u7ED3\u6784
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

      if (result.isFinal) return result;        // Skill \u8BF4"\u591F\u4E86"\uFF0C\u7ED3\u675F
      
      messages.push({ role: 'tool', content: JSON.stringify(result) });
      // \u7EE7\u7EED\u4E0B\u4E00\u8F6E\uFF0CLLM \u53EF\u80FD\u8C03\u7528\u66F4\u591A tool
    }
  }
}
`,paraId:17,tocIndex:13},{value:"\u5F53\u67D0\u4E2A Skill \u7684 ",paraId:18,tocIndex:13},{value:"isFinal: false",paraId:18,tocIndex:13},{value:' \u65F6\uFF0C\u5B83\u7684\u8F93\u51FA\u4F1A\u6210\u4E3A LLM \u7684\u8F93\u5165\uFF0CLLM \u53EF\u4EE5\u7EE7\u7EED\u63A8\u7406\u5E76\u8C03\u7528\u66F4\u591A tool\uFF0C\u5B9E\u73B0 "\u67E5\u70ED\u9500\u5546\u54C1 \u2192 \u751F\u6210\u6D77\u62A5 \u2192 \u5199\u63A8\u5E7F\u6587\u6848" \u7684\u94FE\u5F0F\u6267\u884C\u3002',paraId:18,tocIndex:13},{value:`Skill.execute() catch
  \u2192 toUserError() \u7FFB\u8BD1 DB \u9519\u8BEF \u2192 \u4E2D\u6587\u63D0\u793A
  \u2192 isFinal: true \u76F4\u63A5\u8FD4\u56DE\u7528\u6237

Service \u5C42\u5F02\u5E38
  \u2192 NestJS HttpException
  \u2192 HttpExceptionFilter \u6355\u83B7 \u2192 \u7EDF\u4E00\u54CD\u5E94\u683C\u5F0F

LLM \u8C03\u7528\u5F02\u5E38
  \u2192 InternalServerErrorException
  \u2192 api.ts \u62E6\u622A\u5668 \u2192 message.error toast
`,paraId:19,tocIndex:15},{value:"error-helper.ts",paraId:20,tocIndex:16},{value:" \u5C06 MySQL \u539F\u751F\u9519\u8BEF\u8F6C\u4E3A\u4E2D\u6587\uFF1A",paraId:21,tocIndex:16},{value:"MySQL \u9519\u8BEF",paraId:22,tocIndex:16},{value:"\u7528\u6237\u770B\u5230",paraId:22,tocIndex:16},{value:"Field 'xxx' doesn't have a default value",paraId:22,tocIndex:16},{value:"\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5\u300Cxxx\u300D",paraId:22,tocIndex:16},{value:"Duplicate entry",paraId:22,tocIndex:16},{value:"\u6570\u636E\u5DF2\u5B58\u5728\uFF0C\u4E0D\u80FD\u91CD\u590D\u6DFB\u52A0",paraId:22,tocIndex:16},{value:"Data too long",paraId:22,tocIndex:16},{value:"\u8F93\u5165\u7684\u6570\u636E\u957F\u5EA6\u8D85\u51FA\u9650\u5236",paraId:22,tocIndex:16},{value:"ECONNREFUSED",paraId:22,tocIndex:16},{value:"\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25",paraId:22,tocIndex:16},{value:"\u5F53 Skill \u6821\u9A8C\u53C2\u6570\u4E0D\u901A\u8FC7\u65F6\uFF0C\u8BBE\u7F6E ",paraId:23,tocIndex:17},{value:"isFinal: true",paraId:23,tocIndex:17},{value:" \u76F4\u63A5\u8FD4\u56DE\u63D0\u793A\uFF0C",paraId:23,tocIndex:17},{value:"\u4E0D\u8D70\u7B2C\u4E8C\u8F6E LLM",paraId:23,tocIndex:17},{value:'\u3002\u8FD9\u907F\u514D\u4E86 "LLM \u751F\u6210\u9519\u8BEF \u2192 \u518D\u8C03 LLM \u89E3\u91CA\u9519\u8BEF" \u7684\u6D6A\u8D39\u3002',paraId:23,tocIndex:17},{value:`// 1. \u521B\u5EFA\u6587\u4EF6
@Injectable()
class NewSkill implements Skill {
  name = 'new_skill';
  toolDefinition = { /* ... */ };
  async execute(params) { /* ... */ }
}

// 2. \u6CE8\u518C\uFF08chat.module.ts\uFF09
providers: [..., NewSkill],
onModuleInit() {
  this.skillRegistry.register(this.newSkill);
}
`,paraId:24,tocIndex:19},{value:"\u65B9\u5411",paraId:25,tocIndex:20},{value:"\u505A\u6CD5",paraId:25,tocIndex:20},{value:"\u6539\u52A8\u8303\u56F4",paraId:25,tocIndex:20},{value:"\u5206\u7EC4\u8FC7\u6EE4",paraId:25,tocIndex:20},{value:"Skill \u52A0 ",paraId:25,tocIndex:20},{value:"group",paraId:25,tocIndex:20},{value:" \u5B57\u6BB5\uFF0C\u8BF7\u6C42\u65F6\u6307\u5B9A\u7EC4",paraId:25,tocIndex:20},{value:"Skill \u63A5\u53E3 + ChatService",paraId:25,tocIndex:20},{value:"\u6743\u9650\u63A7\u5236",paraId:25,tocIndex:20},{value:"Skill \u52A0 ",paraId:25,tocIndex:20},{value:"requiredRole",paraId:25,tocIndex:20},{value:"\uFF0Cexecute \u524D\u6821\u9A8C",paraId:25,tocIndex:20},{value:"Skill \u63A5\u53E3 + ChatService",paraId:25,tocIndex:20},{value:"\u52A8\u6001\u52A0\u8F7D",paraId:25,tocIndex:20},{value:"\u4ECE\u914D\u7F6E\u6587\u4EF6/DB \u8BFB\u53D6 Skill \u5143\u6570\u636E\uFF0C\u52A8\u6001\u5B9E\u4F8B\u5316",paraId:25,tocIndex:20},{value:"SkillRegistry",paraId:25,tocIndex:20},{value:"\u591A\u6B65\u63A8\u7406",paraId:25,tocIndex:20},{value:"isFinal: false",paraId:25,tocIndex:20},{value:" \u542F\u7528 ReAct Loop",paraId:25,tocIndex:20},{value:"ChatService\uFF08\u5DF2\u9884\u7559\uFF09",paraId:25,tocIndex:20},{value:"\u5BA1\u8BA1\u65E5\u5FD7",paraId:25,tocIndex:20},{value:"SkillRegistry \u7EDF\u4E00\u62E6\u622A\u6240\u6709 execute \u8C03\u7528",paraId:25,tocIndex:20},{value:"SkillRegistry",paraId:25,tocIndex:20},{value:`\u67E5\u8BE2\u7C7B  \u2502 query_orders            \u2014 \u8BA2\u5355\u7EDF\u8BA1
        \u2502 search_products          \u2014 \u5546\u54C1\u641C\u7D22
        \u2502 list_categories          \u2014 \u5206\u7C7B\u5217\u8868
        \u2502 stock_alert              \u2014 \u5E93\u5B58\u9884\u8B66
\u64CD\u4F5C\u7C7B  \u2502 add_product              \u2014 \u6DFB\u52A0\u5546\u54C1
        \u2502 update_product           \u2014 \u66F4\u65B0\u5546\u54C1
        \u2502 add_product_category     \u2014 \u521B\u5EFA\u5206\u7C7B
\u751F\u6210\u7C7B  \u2502 write_wechat_copy        \u2014 \u6587\u6848\u64B0\u5199
        \u2502 generate_poster          \u2014 \u6D77\u62A5\u751F\u6210
`,paraId:26,tocIndex:21},{value:"\u6240\u6709 Skill \u5728 NestJS \u542F\u52A8\u65F6\u4E00\u6B21\u6027\u6CE8\u518C\uFF0C\u65F6\u673A\u662F\u6A21\u5757\u521D\u59CB\u5316\u3002",paraId:27,tocIndex:22},{value:"chat.module.ts",paraId:28,tocIndex:23},{value:" \u4E2D\u7684 ",paraId:29,tocIndex:23},{value:"OnModuleInit",paraId:29,tocIndex:23},{value:" \u94A9\u5B50\uFF1A",paraId:29,tocIndex:23},{value:`export class ChatModule implements OnModuleInit {
  constructor(
    private readonly skillRegistry: SkillRegistry,
    private readonly orderQuerySkill: OrderQuerySkill,
    private readonly productQuerySkill: ProductQuerySkill,
    // ... \u5171 9 \u4E2A Skill \u901A\u8FC7\u6784\u9020\u51FD\u6570\u6CE8\u5165
  ) {}

  onModuleInit(): void {
    this.skillRegistry.register(this.orderQuerySkill);
    this.skillRegistry.register(this.productQuerySkill);
    // ... \u9010\u4E00\u6CE8\u518C\u5230 Map
  }
}
`,paraId:30,tocIndex:23},{value:"\u51B3\u7B56",paraId:31,tocIndex:24},{value:"\u7406\u7531",paraId:31,tocIndex:24},{value:"NestJS DI \u4FDD\u8BC1\u4F9D\u8D56\u5C31\u7EEA",paraId:31,tocIndex:24},{value:"\u6240\u6709 Service/Repository \u5DF2\u521D\u59CB\u5316",paraId:31,tocIndex:24},{value:"Map \u67E5\u627E O(1)",paraId:31,tocIndex:24},{value:"LLM \u8FD4\u56DE tool name \u540E\u76F4\u63A5 get",paraId:31,tocIndex:24},{value:"\u6570\u91CF\u5C11\uFF089 \u4E2A\uFF09",paraId:31,tocIndex:24},{value:"\u4E0D\u9700\u8981\u52A8\u6001\u70ED\u63D2\u62D4",paraId:31,tocIndex:24},{value:"\u4E0D\u662F",paraId:32,tocIndex:25},{value:"\u542F\u52A8\u65F6\u4E00\u6B21\u6027\u53D1\u7ED9\u6A21\u578B\uFF0C\u800C\u662F",paraId:32,tocIndex:25},{value:"\u6BCF\u6B21\u8BF7\u6C42",paraId:32,tocIndex:25},{value:"\u65F6\u52A8\u6001\u83B7\u53D6\u5E76\u53D1\u9001\u3002",paraId:32,tocIndex:25},{value:`POST /api/v1/chat/message
  \u2502
  \u251C\u2500 SkillRegistry.getToolDefinitions()
  \u2502     \u2514\u2500 \u904D\u5386 9 \u4E2A Skill\uFF0C\u8FD4\u56DE ToolDefinition[]
  \u2502        \u793A\u4F8B: [{ type: 'function', function: { name: 'query_orders', ... } }, ...]
  \u2502
  \u251C\u2500 buildMessages()
  \u2502     \u2514\u2500 [system prompt, ...history, user message]
  \u2502
  \u251C\u2500 LLM.chatWithTools(messages, tools)
  \u2502     \u2514\u2500 POST DashScope API
  \u2502         body: { model, messages, tools, tool_choice: 'auto' }
  \u2502
  \u2514\u2500 LLM \u8FD4\u56DE
        \u251C\u2500 \u65E0 tool_call \u2192 \u6587\u672C\u76F4\u63A5\u8FD4\u56DE
        \u2514\u2500 \u6709 tool_call \u2192 SkillRegistry.get(name).execute(params)
`,paraId:33,tocIndex:26},{value:"\u5173\u952E\u4EE3\u7801\u5728 ",paraId:34,tocIndex:26},{value:"chat.service.ts",paraId:35,tocIndex:26},{value:" \u7684 ",paraId:34,tocIndex:26},{value:"handleMessage()",paraId:34,tocIndex:26},{value:"\uFF1A",paraId:34,tocIndex:26},{value:`async handleMessage(dto: ChatRequestDto): Promise<ChatResponseDto> {
  const tools = this.skillRegistry.getToolDefinitions();  // \u6BCF\u6B21\u8BF7\u6C42\u53D6
  const messages = this.buildMessages(dto);
  const response = await this.llmService.chatWithTools(messages, tools);
  // ...
}
`,paraId:36,tocIndex:26},{value:"\u6BCF\u6B21\u8BF7\u6C42\u90FD\u91CD\u65B0\u83B7\u53D6 tool \u5B9A\u4E49\uFF0C\u5373\u4F7F\u5C06\u6765\u52A8\u6001\u589E\u5220 Skill\uFF0C\u4E0B\u4E00\u6B21\u8BF7\u6C42\u5C31\u80FD\u751F\u6548\uFF0C\u65E0\u9700\u91CD\u542F\u3002",paraId:37,tocIndex:27},{value:"\u4E00\u4E2A tool \u5B9A\u4E49\u7EA6 150-250 tokens\uFF08\u540D\u79F0 + \u63CF\u8FF0 + parameters JSON Schema\uFF09\uFF1A",paraId:38,tocIndex:29},{value:"\u7EC4\u6210\u90E8\u5206",paraId:39,tocIndex:29},{value:"Token \u6570",paraId:39,tocIndex:29},{value:"System prompt",paraId:39,tocIndex:29},{value:"~150",paraId:39,tocIndex:29},{value:"\u5BF9\u8BDD\u5386\u53F2\uFF0810 \u8F6E\uFF09",paraId:39,tocIndex:29},{value:"~1500",paraId:39,tocIndex:29},{value:"9 \u4E2A tools",paraId:39,tocIndex:29},{value:"~1800",paraId:39,tocIndex:29},{value:"\u5355\u6B21\u8BF7\u6C42\u603B\u8BA1",paraId:39,tocIndex:29},{value:"~3500",paraId:39,tocIndex:29},{value:"Tool \u5B9A\u4E49\u7EA6\u5360\u5355\u6B21\u8BF7\u6C42\u7684\u4E00\u534A\uFF0C\u4F46 qwen-plus \u4EF7\u683C\u6781\u4F4E\uFF08\u8F93\u5165\u7EA6 \xA50.004/\u5343 token\uFF09\uFF0C\u5355\u6B21\u8BF7\u6C42\u7684 tool \u5F00\u9500\u7EA6 ",paraId:40,tocIndex:29},{value:"0.007 \u5143",paraId:40,tocIndex:29},{value:"\u3002",paraId:40,tocIndex:29},{value:"\u65E7\u65B9\u6848\uFF08\u4E24\u6BB5\u5F0F\uFF09",paraId:41,tocIndex:30},{value:"\u65B0\u65B9\u6848\uFF08Function Calling\uFF09",paraId:41,tocIndex:30},{value:"\u7B2C 1 \u6B21 LLM \u8C03\u7528\uFF1AIntentService \u5206\u7C7B",paraId:41,tocIndex:30},{value:"\u65E0",paraId:41,tocIndex:30},{value:"\u7B2C 2 \u6B21 LLM \u8C03\u7528\uFF1AHandler \u6267\u884C",paraId:41,tocIndex:30},{value:"1 \u6B21 LLM \u8C03\u7528",paraId:41,tocIndex:30},{value:"2 \u6B21\u7F51\u7EDC\u5F80\u8FD4",paraId:41,tocIndex:30},{value:"1 \u6B21\u7F51\u7EDC\u5F80\u8FD4",paraId:41,tocIndex:30},{value:"IntentService \u5355\u72EC\u7684 prompt tokens",paraId:41,tocIndex:30},{value:"tool definitions \u590D\u7528",paraId:41,tocIndex:30},{value:"\u7701\u53BB IntentService \u7684 90 \u884C prompt \u548C\u4E00\u6B21\u5B8C\u6574\u5F80\u8FD4\u3002",paraId:42,tocIndex:30},{value:"\u53EF\u4EE5\u52A0\u5173\u952E\u8BCD\u9884\u8FC7\u6EE4\uFF0C\u4E0D\u8C03 LLM\uFF1A",paraId:43,tocIndex:31},{value:`const TOOL_KEYWORDS: Record<string, string[]> = {
  query_orders:     ['\u8BA2\u5355', '\u8BA2\u8D27', '\u9500\u91CF'],
  search_products:  ['\u5546\u54C1', '\u67E5\u8BE2', '\u641C\u7D22', '\u5E93\u5B58'],
  add_product:      ['\u6DFB\u52A0', '\u4E0A\u67B6', '\u5F55\u5165'],
  generate_poster:  ['\u6D77\u62A5', '\u56FE\u7247', '\u5BA3\u4F20\u56FE'],
};
`,paraId:44,tocIndex:31},{value:"\u6240\u6709 Skill \u90FD\u5B9E\u73B0\u540C\u4E00\u4E2A ",paraId:45,tocIndex:32},{value:"Skill",paraId:45,tocIndex:32},{value:" \u63A5\u53E3\uFF0C\u4F46\u5185\u90E8\u903B\u8F91\u6309\u804C\u8D23\u5206\u4E09\u7C7B\u3002",paraId:45,tocIndex:32},{value:`interface Skill {
  name: string;            // \u552F\u4E00\u6807\u8BC6\uFF0CLLM \u8FD4\u56DE\u7684 tool_call \u6309\u6B64\u5339\u914D
  toolDefinition: object;  // \u7ED9 LLM \u770B\u7684\u63CF\u8FF0 + \u53C2\u6570 Schema
  execute(params): Promise<SkillResult>;  // \u4E1A\u52A1\u5B9E\u73B0
}
`,paraId:46,tocIndex:33},{value:"\u7C7B\u578B",paraId:47,tocIndex:34},{value:"\u6CE8\u5165\u4F9D\u8D56",paraId:47,tocIndex:34},{value:"\u903B\u8F91\u6A21\u5F0F",paraId:47,tocIndex:34},{value:"\u4EE3\u8868",paraId:47,tocIndex:34},{value:"\u6570\u636E\u67E5\u8BE2\u578B",paraId:47,tocIndex:34},{value:"ProductService / DataSource",paraId:47,tocIndex:34},{value:"\u67E5 \u2192 \u683C\u5F0F\u5316 \u2192 \u8FD4\u56DE",paraId:47,tocIndex:34},{value:"order-query, product-query, stock-alert, list-categories",paraId:47,tocIndex:34},{value:"\u6570\u636E\u64CD\u4F5C\u578B",paraId:47,tocIndex:34},{value:"ProductService / DataSource",paraId:47,tocIndex:34},{value:"\u6821\u9A8C \u2192 \u5199\u5165 \u2192 \u8FD4\u56DE\u7ED3\u679C",paraId:47,tocIndex:34},{value:"add-product, update-product, add-product-category",paraId:47,tocIndex:34},{value:"\u5185\u5BB9\u751F\u6210\u578B",paraId:47,tocIndex:34},{value:"LLMService / ImageGenerationService",paraId:47,tocIndex:34},{value:"\u53D6\u4E0A\u4E0B\u6587 \u2192 \u8C03 LLM \u2192 \u8FD4\u56DE\u5185\u5BB9",paraId:47,tocIndex:34},{value:"wechat-copy, poster-generation",paraId:47,tocIndex:34},{value:"ChatService \u4E0D\u9700\u8981\u77E5\u9053 Skill \u7684\u7EC6\u8282",paraId:48,tocIndex:35},{value:" \u2014 \u53EA\u505A ",paraId:48,tocIndex:35},{value:"registry.get(name).execute(params)",paraId:48,tocIndex:35},{value:"\u65B0\u589E Skill \u96F6\u4FB5\u5165",paraId:48,tocIndex:35},{value:" \u2014 \u52A0\u4E00\u4E2A\u6587\u4EF6 + \u5728 ChatModule \u6CE8\u518C\u4E00\u884C\uFF0C\u4E0D\u6539\u4EFB\u4F55\u73B0\u6709\u4EE3\u7801",paraId:48,tocIndex:35},{value:"\u81EA\u63CF\u8FF0",paraId:48,tocIndex:35},{value:" \u2014 ",paraId:48,tocIndex:35},{value:"toolDefinition.description",paraId:48,tocIndex:35},{value:" \u548C ",paraId:48,tocIndex:35},{value:"execute()",paraId:48,tocIndex:35},{value:" \u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u7EF4\u62A4",paraId:48,tocIndex:35},{value:"\u5929\u7136\u652F\u6301\u6269\u5C55",paraId:48,tocIndex:35},{value:" \u2014 \u53EF\u4EE5\u968F\u65F6\u52A0\u5B57\u6BB5\uFF08\u5982 ",paraId:48,tocIndex:35},{value:"group",paraId:48,tocIndex:35},{value:"\u3001",paraId:48,tocIndex:35},{value:"requiredRole",paraId:48,tocIndex:35},{value:"\uFF09",paraId:48,tocIndex:35},{value:"\u4E09\u5C42\u9632\u62A4\uFF0C\u9010\u5C42\u6536\u655B\uFF1A",paraId:49,tocIndex:36},{value:"toolDefinition.function.parameters",paraId:50,tocIndex:37},{value:" \u5B9A\u4E49\u4E86\u53C2\u6570\u683C\u5F0F\uFF0C\u6A21\u578B\u8BAD\u7EC3\u65F6\u5DF2\u5B66\u4F1A\u6309 Schema \u8F93\u51FA\uFF1A",paraId:50,tocIndex:37},{value:`// \u6A21\u578B\u8FD4\u56DE\u7684 tool_calls[0].function.arguments
{"name": "\u6709\u673A\u897F\u7EA2\u67FF", "price": 8.8, "stock": 100}
`,paraId:51,tocIndex:37},{value:`let params: Record<string, unknown> = {};
try {
  params = JSON.parse(argsJson);
} catch {
  this.logger.warn('Failed to parse tool arguments');
}
// \u89E3\u6790\u5931\u8D25 \u2192 params \u4E3A\u7A7A\u5BF9\u8C61\uFF0C\u4EA4\u7ED9 Skill \u5185\u90E8\u6821\u9A8C
`,paraId:52,tocIndex:38},{value:`async execute(params: Record<string, unknown>): Promise<SkillResult> {
  // \u2460 \u663E\u5F0F\u7C7B\u578B\u6536\u655B\uFF1A\u4E0D\u4FE1\u4EFB LLM
  const input = {
    name:  typeof params.name  === 'string' ? params.name.trim()  : undefined,
    price: typeof params.price === 'number' ? params.price         : undefined,
    stock: typeof params.stock === 'number' ? Math.floor(params.stock) : undefined,
  };

  // \u2461 \u4E1A\u52A1\u6821\u9A8C
  const missing = this.validate(input);
  if (missing.length > 0) {
    return { content: \`\u26A0\uFE0F \u4EE5\u4E0B\u5FC5\u586B\u9879\u7F3A\u5931\uFF1A\${missing.join('\u3001')}\`, isFinal: true };
  }

  // \u2462 \u901A\u8FC7\u540E\u624D\u6267\u884C
  await this.productService.create(input);
}
`,paraId:53,tocIndex:39},{value:`LLM \u8F93\u51FA \u2192 JSON Schema \u7EA6\u675F\uFF08\u5C3D\u529B\u5339\u914D\uFF09
  \u2192 JSON.parse\uFF08\u89E3\u6790\u5931\u8D25\u515C\u5E95\u4E3A\u7A7A\u5BF9\u8C61\uFF09
    \u2192 typeof \u6536\u655B\uFF08number/string/undefined\uFF09
      \u2192 \u4E1A\u52A1\u6821\u9A8C\uFF08required/range/duplicate\uFF09
        \u2192 \u901A\u8FC7 \u2192 execute \u4E1A\u52A1\u903B\u8F91
        \u2192 \u5931\u8D25 \u2192 \u4E2D\u6587\u63D0\u793A\uFF0CisFinal: true \u76F4\u63A5\u53CD\u9988\u7528\u6237
`,paraId:54,tocIndex:40},{value:"\u662F\u7684\uFF0CJSON Schema \u7EA6\u675F\u662F\u6A21\u578B\u8BAD\u7EC3\u65F6\u5C31\u5177\u5907\u7684\u80FD\u529B\u3002",paraId:55,tocIndex:41},{value:`{
  "model": "qwen-plus",
  "messages": [...],
  "tools": [{
    "type": "function",
    "function": {
      "name": "add_product",
      "parameters": {
        "type": "object",
        "properties": {
          "name":  { "type": "string", "description": "\u5546\u54C1\u540D\u79F0" },
          "price": { "type": "number", "description": "\u552E\u4EF7" }
        }
      }
    }
  }],
  "tool_choice": "auto"
}
`,paraId:56,tocIndex:42},{value:"\u51B3\u5B9A\u662F\u5426\u8C03",paraId:57,tocIndex:43},{value:' \u2014 \u7528\u6237\u8BF4"\u67E5\u8BA2\u5355"\u2192 \u9009 tool\uFF1B\u95F2\u804A \u2192 \u76F4\u63A5\u56DE\u6587\u672C',paraId:57,tocIndex:43},{value:"\u6309 Schema \u62FC JSON",paraId:57,tocIndex:43},{value:" \u2014 \u4ECE\u7528\u6237\u6D88\u606F\u4E2D\u63D0\u53D6\u53C2\u6570\u5E76\u751F\u6210\u5408\u6CD5 JSON",paraId:57,tocIndex:43},{value:"\u60C5\u51B5",paraId:58,tocIndex:44},{value:"\u6982\u7387",paraId:58,tocIndex:44},{value:"\u515C\u5E95",paraId:58,tocIndex:44},{value:"\u5C11\u4F20\u4E86\u5FC5\u586B\u5B57\u6BB5",paraId:58,tocIndex:44},{value:"\u5076\u5C14",paraId:58,tocIndex:44},{value:'execute \u5185\u6821\u9A8C\uFF0C\u8FD4\u56DE"\u8BF7\u8865\u5145 XX"',paraId:58,tocIndex:44},{value:'price \u4F20\u4E86\u5B57\u7B26\u4E32 "8.8"',paraId:58,tocIndex:44},{value:"\u5076\u5C14",paraId:58,tocIndex:44},{value:"typeof \u6536\u655B\uFF0C\u8F6C\u6210 number",paraId:58,tocIndex:44},{value:"JSON \u683C\u5F0F\u9519\u8BEF",paraId:58,tocIndex:44},{value:"\u6781\u5C11",paraId:58,tocIndex:44},{value:"JSON.parse try/catch",paraId:58,tocIndex:44},{value:"\u9009\u9519 tool",paraId:58,tocIndex:44},{value:"\u6781\u5C11",paraId:58,tocIndex:44},{value:"description \u8DB3\u591F\u51C6",paraId:58,tocIndex:44},{value:"\u5B8C\u5168\u7F16\u9020\u53C2\u6570\u503C",paraId:58,tocIndex:44},{value:"\u6781\u5C11",paraId:58,tocIndex:44},{value:"\u4E1A\u52A1\u6821\u9A8C\uFF08price > 0\u3001DB \u67E5\u91CD\u7B49\uFF09",paraId:58,tocIndex:44},{value:"Schema \u662F\u7B2C\u4E00\u9053\u9632\u7EBF\uFF0C\u4F46\u4E0D\u662F\u552F\u4E00\u9632\u7EBF\u3002\u6BCF\u4E00\u5C42\u90FD\u4E0D\u4FE1\u4EFB\u4E0A\u4E00\u5C42\u3002",paraId:59,tocIndex:44}]}}]);
