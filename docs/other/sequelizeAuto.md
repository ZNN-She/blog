---
title: sequelize auto
order: 3
---

# sequelize-auto

根据数据自动生成model定义

## 文档
https://github.com/sequelize/sequelize-auto#readme

# 在egg.js中的应用

### 配置文件

```json5
{
  "database": "数据库",
  "username": "root",
  "password": "密码",
  "host": "数据库地址",
  "port": 3306,
  "dialect": "mysql",

  "directory": "./app/model", // 生成文件目录，egg中默认为app/model
  "noInitModels": true,  // 不需要生成init-models文件，egg会自动导入modals
  "singularize": true  // 单数形式符合egg规范
}
```

### 添加命令
```json5
{
  "scripts": {
    ...
    "model": "sequelize-auto --config ./sequelize-auto-config.json"
  }
}
```

### 运行命令
```bash
npm run model
npm run model -- --tables=表名1,表名2 # 指定表名
或
yarn model
yarn model --tables=表名1,表名2 # 指定表名
```

### 修改model
因为sequelize-auto生成的是通用model，并不适合egg，所以需要修改，只需要修改最顶部的两行代码即可
```js
// 修改前
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {


// 修改后
"use strict";

"use strict";

module.exports = function (app) {
  const { DataTypes } = app.Sequelize; // egg中获取DataTypes
  const sequelize = app.model; // egg中获取sequelize实例

```

### egg-sequelize-auto
版本比较旧了，不建议使用，很多配置无效了，默认生成的modal比较简单，没有注释等一些东西