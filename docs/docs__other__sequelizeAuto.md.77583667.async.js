"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[87],{89393:function(a,u,n){n.r(u);var d=n(72269),r=n(93359),h=n(61788),m=n(19977),c=n(25809),l=n(90978),x=n(96057),E=n(83213),_=n(53683),o=n(80936),i=n(67294),s=n(74656),e=n(85893);function t(){return(0,e.jsx)(_.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"sequelize-auto",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequelize-auto",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"sequelize-auto"]}),(0,e.jsx)("p",{children:s.texts[0].value}),(0,e.jsxs)("h2",{id:"\u6587\u6863",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6587\u6863",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6587\u6863"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://github.com/sequelize/sequelize-auto#readme",children:s.texts[1].value})}),(0,e.jsxs)("h1",{id:"\u5728eggjs\u4E2D\u7684\u5E94\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5728eggjs\u4E2D\u7684\u5E94\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5728egg.js\u4E2D\u7684\u5E94\u7528"]}),(0,e.jsxs)("h3",{id:"\u914D\u7F6E\u6587\u4EF6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u914D\u7F6E\u6587\u4EF6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u914D\u7F6E\u6587\u4EF6"]}),(0,e.jsx)(l.Z,{lang:"json5",children:s.texts[2].value}),(0,e.jsxs)("h3",{id:"\u6DFB\u52A0\u547D\u4EE4",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6DFB\u52A0\u547D\u4EE4",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6DFB\u52A0\u547D\u4EE4"]}),(0,e.jsx)(l.Z,{lang:"json5",children:s.texts[3].value}),(0,e.jsxs)("h3",{id:"\u8FD0\u884C\u547D\u4EE4",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8FD0\u884C\u547D\u4EE4",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8FD0\u884C\u547D\u4EE4"]}),(0,e.jsx)(l.Z,{lang:"bash",children:s.texts[4].value}),(0,e.jsxs)("h3",{id:"\u4FEE\u6539model",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4FEE\u6539model",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4FEE\u6539model"]}),(0,e.jsx)("p",{children:s.texts[5].value}),(0,e.jsx)(l.Z,{lang:"js",children:s.texts[6].value}),(0,e.jsxs)("h3",{id:"egg-sequelize-auto",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#egg-sequelize-auto",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"egg-sequelize-auto"]}),(0,e.jsx)("p",{children:s.texts[7].value})]})})})})}u.default=t},74656:function(a,u,n){n.r(u),n.d(u,{texts:function(){return d}});const d=[{value:"\u6839\u636E\u6570\u636E\u81EA\u52A8\u751F\u6210model\u5B9A\u4E49",paraId:0,tocIndex:0},{value:"https://github.com/sequelize/sequelize-auto#readme",paraId:1,tocIndex:1},{value:`{
  "database": "\u6570\u636E\u5E93",
  "username": "root",
  "password": "\u5BC6\u7801",
  "host": "\u6570\u636E\u5E93\u5730\u5740",
  "port": 3306,
  "dialect": "mysql",

  "directory": "./app/model", // \u751F\u6210\u6587\u4EF6\u76EE\u5F55\uFF0Cegg\u4E2D\u9ED8\u8BA4\u4E3Aapp/model
  "noInitModels": true,  // \u4E0D\u9700\u8981\u751F\u6210init-models\u6587\u4EF6\uFF0Cegg\u4F1A\u81EA\u52A8\u5BFC\u5165modals
  "singularize": true  // \u5355\u6570\u5F62\u5F0F\u7B26\u5408egg\u89C4\u8303
}
`,paraId:2,tocIndex:3},{value:`{
  "scripts": {
    ...
    "model": "sequelize-auto --config ./sequelize-auto-config.json"
  }
}
`,paraId:3,tocIndex:4},{value:`npm run model
npm run model -- --tables=\u8868\u540D1,\u8868\u540D2 # \u6307\u5B9A\u8868\u540D
\u6216
yarn model
yarn model --tables=\u8868\u540D1,\u8868\u540D2 # \u6307\u5B9A\u8868\u540D
`,paraId:4,tocIndex:5},{value:"\u56E0\u4E3Asequelize-auto\u751F\u6210\u7684\u662F\u901A\u7528model\uFF0C\u5E76\u4E0D\u9002\u5408egg\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u6700\u9876\u90E8\u7684\u4E24\u884C\u4EE3\u7801\u5373\u53EF",paraId:5,tocIndex:6},{value:`// \u4FEE\u6539\u524D
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {


// \u4FEE\u6539\u540E
"use strict";

"use strict";

module.exports = function (app) {
  const { DataTypes } = app.Sequelize; // egg\u4E2D\u83B7\u53D6DataTypes
  const sequelize = app.model; // egg\u4E2D\u83B7\u53D6sequelize\u5B9E\u4F8B

`,paraId:6,tocIndex:6},{value:"\u7248\u672C\u6BD4\u8F83\u65E7\u4E86\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u5F88\u591A\u914D\u7F6E\u65E0\u6548\u4E86\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684modal\u6BD4\u8F83\u7B80\u5355\uFF0C\u6CA1\u6709\u6CE8\u91CA\u7B49\u4E00\u4E9B\u4E1C\u897F",paraId:7,tocIndex:7}]}}]);
