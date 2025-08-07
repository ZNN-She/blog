"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[648],{19797:function(s,a,d){d.r(a);var t=d(72269),r=d(93359),x=d(61788),c=d(19977),h=d(25809),l=d(90978),m=d(96057),v=d(83213),u=d(53683),o=d(80936),_=d(67294),n=d(28553),e=d(85893);function i(){return(0,e.jsx)(u.dY,{children:(0,e.jsx)(_.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u7ED3\u5408dumi\u6784\u5EFA\u535A\u5BA2",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7ED3\u5408dumi\u6784\u5EFA\u535A\u5BA2",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7ED3\u5408Dumi\u6784\u5EFA\u535A\u5BA2"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n.texts[0].value,(0,e.jsx)("a",{href:"https://d.umijs.org/",children:n.texts[1].value}),n.texts[2].value]}),(0,e.jsxs)("li",{children:[n.texts[3].value,(0,e.jsx)("a",{href:"https://d.umijs.org/guide/faq#%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages",children:n.texts[4].value})]})]}),(0,e.jsxs)("ol",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("p",{children:n.texts[5].value}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:n.texts[6].value}),(0,e.jsx)("li",{children:n.texts[7].value})]}),(0,e.jsx)(l.Z,{lang:"yml",children:n.texts[8].value}),(0,e.jsxs)("ol",{start:"3",children:[(0,e.jsx)("li",{children:n.texts[9].value}),(0,e.jsxs)("li",{children:[n.texts[10].value,(0,e.jsx)("code",{children:n.texts[11].value}),n.texts[12].value,(0,e.jsx)("code",{children:n.texts[13].value})]}),(0,e.jsx)("li",{children:n.texts[14].value})]})]}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:n.texts[15].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:n.texts[16].value})}),(0,e.jsxs)("li",{children:[(0,e.jsxs)("p",{children:[n.texts[17].value,(0,e.jsx)("code",{children:n.texts[18].value}),n.texts[19].value,(0,e.jsx)("code",{children:n.texts[20].value}),n.texts[21].value,(0,e.jsx)("code",{children:n.texts[22].value}),n.texts[23].value,(0,e.jsx)("code",{children:n.texts[24].value})]}),(0,e.jsx)(l.Z,{children:n.texts[25].value})]})]})]})})})})}a.default=i},28553:function(s,a,d){d.r(a),d.d(a,{texts:function(){return t}});const t=[{value:"\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\uFF0C\u8FD9\u91CC\u6807\u6CE8\u4E00\u4E9B\u4FEE\u6539\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u600E\u4E48\u90E8\u7F72\u5230github pages\u3002",paraId:0,tocIndex:0},{value:"\u53E6\u5916Dumi\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86nopm\u5DE5\u5177\u5305\uFF1A",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\u4F7F\u7528github actions \u8FDB\u884C\u90E8\u7F72",paraId:1,tocIndex:0},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA.github/workflows/deploy.yml",paraId:2,tocIndex:0},{value:"\u5185\u5BB9\u5982\u4E0B",paraId:2,tocIndex:0},{value:`name: Deploy to GitHub Pages # \u5DE5\u4F5C\u6D41\u540D\u79F0

on:
  push:
    branches: [ main ] # \u89E6\u53D1\u5206\u652F

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js 18
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'yarn' # \u7F13\u5B58yarn\u4F9D\u8D56

      - name: Install dependencies with Yarn
        run: yarn install --frozen-lockfile # \u7F13\u5B58yarn\u4F9D\u8D56\uFF0C\u907F\u514D\u6BCF\u6B21\u90FD\u5B89\u88C5\u4F9D\u8D56

      - name: Build project
        run: yarn build # \u6784\u5EFA\u9879\u76EE

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }} # \u7528\u4E8E\u90E8\u7F72\u7684GitHub\u4EE4\u724C
          publish_dir: ./dist
          destination_dir: ./docs   # \u76EE\u6807\u76EE\u5F55\uFF1A\u5C06\u5185\u5BB9\u653E\u5165gh-pages\u5206\u652F\u7684docs\u76EE\u5F55
          publish_branch: gh-pages  # \u76EE\u6807\u5206\u652F
          force_orphan: true        # \u786E\u4FDD\u6BCF\u6B21\u90FD\u662F\u5E72\u51C0\u90E8\u7F72\uFF08\u53EF\u9009\uFF09
`,paraId:3,tocIndex:0},{value:"\u63D0\u4EA4\u9879\u76EE\u5728\u9879\u76EEActions\u9009\u9879\u4E2D\u5C31\u80FD\u770B\u5230\u4F60\u7684\u5DE5\u4F5C\u6D41\u4E86",paraId:4,tocIndex:0},{value:"\u5728github pages\u4E2D\u914D\u7F6EBranch\u5206\u652F\u4E3A",paraId:4,tocIndex:0},{value:"gh-pages",paraId:4,tocIndex:0},{value:"\uFF0C\u76EE\u5F55\u4E3A",paraId:4,tocIndex:0},{value:"docs",paraId:4,tocIndex:0},{value:"\u90E8\u7F72\u6280\u672F\u65E2\u53EF\u4EE5\u4F7F\u7528Github Pages\u7684\u57DF\u540D\u8FDB\u884C\u8BBF\u95EE\u4E86",paraId:4,tocIndex:0},{value:`\u6CE8\u610F\u4FEE\u6539\u914D\u7F6E
\u56E0\u4E3Adumi\u811A\u624B\u67B6\u4E5F\u4F7F\u7528\u5230\u4E86docs\u76EE\u5F55\uFF0C\u4F1A\u548Cgithub pages\u7684docs\u76EE\u5F55\u51B2\u7A81\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539dumi\u7684\u914D\u7F6E\u3002`,paraId:5,tocIndex:0},{value:"\u4E0A\u9762github actions\u811A\u672C\u662F\u628Adumi\u6784\u5EFA\u7684dist\u76EE\u5F55\u91CD\u65B0\u63A8\u9001\u5230\u9879\u76EE\u7684gh-pages\u5206\u652F\u7684docs\u76EE\u5F55",paraId:6,tocIndex:0},{value:"github pages\u8BBF\u95EE\u8DEF\u5F84\u662F",paraId:7,tocIndex:0},{value:"\u7528\u6237\u540D.github.io/\u9879\u76EE\u540D",paraId:7,tocIndex:0},{value:"\uFF0C\u6240\u4EE5\u8981\u5BF9dumi\u7684\u914D\u7F6E\u8FDB\u884C\u4FEE\u6539\uFF0C\u5C06",paraId:7,tocIndex:0},{value:"base",paraId:7,tocIndex:0},{value:"\u548C",paraId:7,tocIndex:0},{value:"publicPath",paraId:7,tocIndex:0},{value:"\u4FEE\u6539\u4E3A",paraId:7,tocIndex:0},{value:"/\u9879\u76EE\u540D/",paraId:7,tocIndex:0},{value:`import { defineConfig } from 'dumi';

const year = new Date().getFullYear();

export default defineConfig({
  base: '/\u9879\u76EE\u540D/',
  publicPath: '/\u9879\u76EE\u540D/',          // \u8D44\u6E90\u76F8\u5BF9\u8DEF\u5F84
  // \u5176\u4ED6\u914D\u7F6E
});

`,paraId:8,tocIndex:0}]}}]);
