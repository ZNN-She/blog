---
title: sequelize auto
order: 3
---

# sequelize-auto

根据数据自动生成model定义

## 部分参数介绍
参数配置有多种形式，json、js、命令行三种方式都支持
```

配置项	说明	示例
database	数据库名	'test'
username	数据库用户名	'root'
password	数据库密码	'123456'
host	数据库主机	'localhost'
port	数据库端口	3306
dialect	数据库类型	'mysql' / 'postgres'
directory	模型输出目录	'./app/model'
additional.timestamps	自动时间戳	true
additional.underscored	字段名下划线风格	true
additional.freezeTableName	禁止自动复数化表名	true
additional.paranoid	不启用软删除
tables	只生成指定表	['users', 'posts']
skipTables	跳过指定表	['migrations']
caseModel	模型类名风格	'pascal'（User）
caseFile	文件名风格	'camel'（user.js）
caseProp	属性名风格	'camel'（userId）
noInitModels	不生成 init-models.js	true（Egg.js 推荐）
lang	代码风格	'es6'（推荐）
template	自定义模板路径	'./custom-template.js'
"additional": {
  "comment": true,       // 启用字段注释
  "indexes": true,       // 生成索引
  "defaultValue": true   // 包含默认值
}
```

# 在egg.js中的应用

自定义模版