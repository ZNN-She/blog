---
title: sequelize auto
order: 3
---

# sequelize-auto

根据数据自动生成model定义

## 文档
https://github.com/sequelize/sequelize-auto#readme

# 在egg.js中的应用

## sequelize 配置 config.default.js

**注意：** 配置中添加 `dialectOptions` 字段，用于转换数据库时间为字符串

```js
module.exports = (appInfo) => {
  const config = (exports = {});
  const env = appInfo.env; // 当前环境 可根据环境配置不同的配置 比如数据库、redis等

  // ... 其他配置
  config.sequelize = {
    "database": "数据库",
    "username": "root",
    "password": "密码",
    "host": "数据库地址",
    "port": 3306,
    "dialect": "mysql",

    dialectOptions: {
      dateStrings: true, // 返回字符串而不是 Date 对象
      typeCast: function (field, next) {
        if (field.type === "DATETIME" || field.type === "TIMESTAMP" || field.type === 'DATE') { // 统一转换时间为字符串
          const val = field.string();
          return val || null;
        }
        return next();
      },
    },
  }

}
```

### 配置文件

```js
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
  directory: "./app/model",
  noInitModels: true,
  freezeTableName: true,
  // caseModel: 'c', // 表名驼峰命名
  caseProp: 'c', // 字段名驼峰命名
  // "tables": ["users"],
  underscored: true, // 将驼峰转换为下划线
  timestamps: true, // 自动管理 createdAt 和 updatedAt
  paranoid: true, // 使用软删除
  define: {
    freezeTableName: false,
    underscored: true,
  }
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