"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[226],{84306:function(u,e,_){_.r(e);var o=_(72269),m=_(93359),a=_(61788),h=_(19977),E=_(25809),d=_(90978),g=_(96057),D=_(83213),t=_(53683),r=_(80936),l=_(67294),s=_(7976),n=_(85893);function i(){return(0,n.jsx)(t.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(r.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h5",{id:"\u8FDC\u7A0B\u5206\u652F\u5220\u9664\u4E86\u672C\u5730\u8FD8\u80FD\u770B\u5230",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8FDC\u7A0B\u5206\u652F\u5220\u9664\u4E86\u672C\u5730\u8FD8\u80FD\u770B\u5230",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u8FDC\u7A0B\u5206\u652F\u5220\u9664\u4E86\u672C\u5730\u8FD8\u80FD\u770B\u5230"]}),(0,n.jsx)(d.Z,{children:s.texts[0].value})]})})})})}e.default=i},7976:function(u,e,_){_.r(e),_.d(e,{texts:function(){return o}});const o=[{value:`# \u62C9\u53D6\u8FDC\u7A0B\u6570\u636E\u5E76\u6E05\u7406\u672C\u5730\u5931\u6548\u5206\u652F
git fetch --prune 

# \u83B7\u53D6\u8FDC\u7A0B\u6700\u65B0\u6570\u636E
git fetch origin         

# \u6E05\u7406\u672C\u5730\u4ED3\u5E93\u4E2D\u90A3\u4E9B\u5728\u8FDC\u7A0B\u4ED3\u5E93\uFF08origin\uFF09\u4E2D\u5DF2\u5220\u9664\u7684\u5206\u652F\u7684\u5F15\u7528\uFF0C\u53EA\u6267\u884C\u201C\u6E05\u7406\u201D\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u4ECE\u8FDC\u7A0B\u62C9\u53D6\u4EFB\u4F55\u65B0\u6570\u636E\u3002
git remote prune origin  

# \u663E\u793A\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u7684\u5DEE\u5F02\uFF0C\u5E76\u663E\u793A\u672C\u5730\u5DF2\u5931\u6548\u7684\u8FDC\u7A0B\u5206\u652F
git remote show origin 

# \u6E05\u7406\u672C\u5730\u5DF2\u5931\u6548\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u4E0D\u5305\u542B\u53EA\u6709\u672C\u5730\u7684\u5206\u652F\u4E48\u6709\u63A8\u9001\u8FC7\u6216\u7ED1\u5B9A\u8FC7\u7684\u8FDC\u7A0B\u5206\u652F
git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {print $1}' | xargs git branch -d 

# \u6E05\u7406\u672C\u5730\u5DF2\u5931\u6548\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u5305\u542B\u6CA1\u5408\u5E76\u5230\u5206\u652F\uFF0C\u4F7F\u7528 -D \u4F1A\u5F3A\u5236\u5220\u9664\uFF0C\u5305\u62EC\u672A\u5408\u5E76\u7684\u66F4\u6539\uFF0C\u4E0D\u5305\u542B\u53EA\u6709\u672C\u5730\u7684\u5206\u652F\u4E48\u6709\u63A8\u9001\u8FC7\u6216\u7ED1\u5B9A\u8FC7\u7684\u8FDC\u7A0B\u5206\u652F
git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {print $1}' | xargs git branch -D
`,paraId:0,tocIndex:0}]}}]);
