
## AI 智能体系统全链路架构图

```mermaid
flowchart TD
    subgraph INPUT["📥 输入层"]
        U(["用户"])
        I1["📝 文字"]
        I2["🎤 语音"]
        I3["📁 文件"]
        I4["🖼️ 图片"]
        U --> I1 & I2 & I3 & I4
    end

    subgraph CONVERT["🔄 输入预处理层"]
        AI_JUDGE1["AI 模型判断\n输入类型"]
        T1["语音识别\nASR / Whisper"]
        T2["文件解析\nPDF / Word / CSV"]
        T3["图像理解\nVision Model"]
        TOKEN["统一转换为\n模型可识别的 Token"]

        I1 --> AI_JUDGE1
        I2 --> AI_JUDGE1
        I3 --> AI_JUDGE1
        I4 --> AI_JUDGE1
        AI_JUDGE1 -->|"语音"| T1
        AI_JUDGE1 -->|"文件"| T2
        AI_JUDGE1 -->|"图片"| T3
        AI_JUDGE1 -->|"文字直接通过"| TOKEN
        T1 & T2 & T3 --> TOKEN
    end

    subgraph MIDDLE["⚙️ 中间处理层（Agent Loop）"]
        direction TB
        RECV["接收 Token 输入"]
        AI_JUDGE2["AI 模型分析判断\n意图识别 + 参数提取"]

        subgraph DB["📚 资料库"]
            VDB[("向量数据库\n知识库")]
            RDB[("关系数据库\nMySQL / PG")]
            API["业务接口\n定向数据获取"]
        end

        AI_JUDGE3["AI 模型\n分析检索结果"]
        LOOP{"是否需要\n继续循环？"}
        SUMMARY["AI 模型\n汇总所有数据\n生成最终结论"]

        RECV --> AI_JUDGE2
        AI_JUDGE2 -->|"检索相关资料"| VDB
        AI_JUDGE2 -->|"查询结构化数据"| RDB
        AI_JUDGE2 -->|"调用业务接口"| API
        VDB & RDB & API --> AI_JUDGE3
        AI_JUDGE3 --> LOOP
        LOOP -->|"Yes：补充信息\n再次检索"| AI_JUDGE2
        LOOP -->|"No：数据充足"| SUMMARY
    end

    subgraph OUTPUT["📤 输出层"]
        OUT_DATA["接收输出数据"]
        O1["💬 文字回复"]
        O2["🖼️ 图片生成"]
        O3["🎬 视频合成"]
        O4["🔊 语音播报"]
        OUT_DATA --> O1 & O2 & O3 & O4
    end

    TOKEN --> RECV
    SUMMARY --> OUT_DATA
```

> **注**：中间层的「向量数据库」即飞书智能体中「知识库」的底层实现——将文档切片并向量化存储，查询时做语义相似度检索。飞书将其与内部文档系统打通，实现定时自动更新。

---

## 核心流程说明

| 阶段 | 关键动作 | 典型工具 |
|---|---|---|
| **输入预处理** | 多模态转 Token | ASR、Vision Model、文档解析器 |
| **意图识别** | AI 判断需要哪些数据 | Function Calling / Tool Use |
| **数据检索** | 从多源获取上下文 | 向量数据库、业务 API、关系数据库 |
| **循环推理** | 判断信息是否充足，不足则继续 | ReAct / Agent Loop |
| **汇总输出** | 整合所有数据生成最终响应 | LLM Summary |
| **结果呈现** | 按需渲染不同格式 | TTS、图片生成、富文本渲染 |

---
