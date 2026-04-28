---
nav: 
  title: AI
  hidden: true
---

### MCP
```json
{
  "mcpServers": {          // 核心节点：定义所有 MCP 服务器的配置集合
    "example-server": {    // 自定义的服务器名称（唯一标识），可自定义命名
      "command": "npx",    // 启动 MCP 服务器的核心命令（如 node、npx、python 等）
      "args": [            // 命令的参数列表，按执行顺序排列
        "-y",              // 第一个参数：npx 的 -y 选项（自动确认所有提示）
        "mcp-server-example" // 第二个参数：要执行的包名/脚本名
      ]
    }
  }
}
```

### MasterGo MCP 配置

参考 https://article.juejin.cn/post/7490407437071089683，这篇文章中提到了 MasterGo MCP 组件的概念，可以指定某个局部ui使用哪个组件，并切可以附上组件文档地址
