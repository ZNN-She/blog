---
  title: agent开发
---

> 大模型全部调用第三方模型  
> 对于大多说个人和公司没有能力或资金部署和训练模型

## 大模型基座方案

直接调用厂商大模型接口，适合大多数人活公司：

* 国内：文心千帆、通义千问、讯飞星火、智谱、月之暗面、deepseek等
* 海外：OpenAI、Anthropic、Gemini等
* 方案形态：纯 API 封装 + 业务层，最轻量

## LLM 核心增强技术方案

### RAG 检索增强生成

最主流落地方案，解决幻觉、知识滞后、私有数据  

* 流程：文档解析→分块→向量化→向量库检索→Prompt 注入 LLM 生成
* 细分方案：
  * 朴素 RAG、多路检索 RAG、重排序 RAG、Agentic RAG、Graph RAG（知识图谱 + RAG）
* 向量库：Milvus、ES、Qdrant、Chroma、PGVector

### Agent 智能体方案

让 LLM 具备思考、规划、工具调用、任务拆解能力

* 核心技术：CoT 思维链、ReAct、Plan&Execute、Function Calling
* 能力：联网搜索、代码执行、API 调用、数据库查询、流程自动化
* 框架：LangChain、LlamaIndex、AutoGPT、Dify、Coze

### 多模态 LLM 方案

文本 + 图像 + 语音 + 视频融合

* 图文理解：LLaVA、Qwen-VL、GPT-4V
* 语音 LLM：ASR+LLM+TTS 端到端
* 视频理解：帧抽取 + 多模态模型解析
* 落地场景：识图问答、PPT 解析、语音对话、视频内容总结

### LLM 产品化架构方案（分层）

* 接入层：API 网关、鉴权、限流、多模型路由
* 应用层：对话会话管理、Prompt 工程、角色设定、插件系统
* 能力层：RAG 引擎、Agent 引擎、工作流编排、知识库管理
* 模型层：多模型调度（开源 + 闭源混搭）、微调服务、推理服务
* 数据层：向量库、结构化数据库、文档仓库、日志观测

### 主流 LLM 产品落地形态（对应技术方案）

* 通用对话机器人：闭源 API+Prompt 工程 + 会话管理
* 企业知识库问答：RAG + 私有文档解析 + 向量库
* 智能客服 / 数字员工：Agent+RAG + 工作流 + API 对接业务系统
* 代码助手：代码 LLM + 代码 RAG+AST 语法解析
* 行业垂直 LLM：开源底座领域微调 + 行业 RAG + 知识图谱
* 端侧 AI 应用：模型量化 + 端侧推理 + 轻量化 RAG

### 最简选型

* 小团队快速上线：闭源 API + RAG + 简单 Agent
* 企业私有化部署：开源 LLM + LoRA 微调 + 私有化 RAG + 向量库
* 复杂业务自动化：Agent 工作流 + 多工具调用 + 知识图谱 RAG
* 端侧产品：量化开源模型 + 端侧向量库
