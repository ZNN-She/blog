---
 title: vscde 配置ClaudeCode.md
---

* 安装vscode编辑器
* 安装Claude Code插件
  
  <image src='./1.png' style='width: 400'/>
* 配置Claude Code的模型（这里采用的系统全局配置）
  * 配置文件位置：~/.claude/settings.json
  * 参考配置文件(这里以deepseek v4为例)
    ```json
    {
      "env": {
        "ANTHROPIC_AUTH_TOKEN": "替换成你的key",
        "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
        "ANTHROPIC_MODEL": "deepseek-v4-pro[1m]",
        "ANTHROPIC_SMALL_FAST_MODEL": "deepseek-v4-flash",
        "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
        "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro[1m]",
        "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro[1m]",
        "CLAUDE_CODE_SUBAGENT_MODEL": "deepseek-v4-flash",
        "CLAUDE_CODE_EFFORT_LEVEL": "max"
      },
      "effortLevel": "high",
      "theme": "auto"
    }
    ```
* deepseek key获取
  * https://platform.deepseek.com/usage

* 配置好后重启vscode编辑器，打开Claude Code插件就可以使用了
  * 成功的话应该会出现下面的界面
  
    <image src='./2.png' style='width: 400px' />