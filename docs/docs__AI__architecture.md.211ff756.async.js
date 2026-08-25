"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[451],{93643:function(l,t,d){d.r(t);var _=d(72269),I=d(93359),i=d(61788),h=d(19977),c=d(25809),s=d(90978),a=d(96057),E=d(83213),u=d(53683),r=d(80936),o=d(67294),e=d(79650),n=d(85893);function x(){return(0,n.jsx)(u.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(r.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"ai-\u667A\u80FD\u4F53\u7CFB\u7EDF\u5168\u94FE\u8DEF\u67B6\u6784\u56FE",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ai-\u667A\u80FD\u4F53\u7CFB\u7EDF\u5168\u94FE\u8DEF\u67B6\u6784\u56FE",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"AI \u667A\u80FD\u4F53\u7CFB\u7EDF\u5168\u94FE\u8DEF\u67B6\u6784\u56FE"]}),(0,n.jsx)(s.Z,{lang:"mermaid",children:e.texts[0].value}),(0,n.jsx)("blockquote",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:e.texts[1].value}),e.texts[2].value]})}),(0,n.jsx)("hr",{}),(0,n.jsxs)("h2",{id:"\u6838\u5FC3\u6D41\u7A0B\u8BF4\u660E",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6838\u5FC3\u6D41\u7A0B\u8BF4\u660E",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6838\u5FC3\u6D41\u7A0B\u8BF4\u660E"]}),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:e.texts[3].value}),(0,n.jsx)("th",{children:e.texts[4].value}),(0,n.jsx)("th",{children:e.texts[5].value})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:e.texts[6].value})}),(0,n.jsx)("td",{children:e.texts[7].value}),(0,n.jsx)("td",{children:e.texts[8].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:e.texts[9].value})}),(0,n.jsx)("td",{children:e.texts[10].value}),(0,n.jsx)("td",{children:e.texts[11].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:e.texts[12].value})}),(0,n.jsx)("td",{children:e.texts[13].value}),(0,n.jsx)("td",{children:e.texts[14].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:e.texts[15].value})}),(0,n.jsx)("td",{children:e.texts[16].value}),(0,n.jsx)("td",{children:e.texts[17].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:e.texts[18].value})}),(0,n.jsx)("td",{children:e.texts[19].value}),(0,n.jsx)("td",{children:e.texts[20].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:e.texts[21].value})}),(0,n.jsx)("td",{children:e.texts[22].value}),(0,n.jsx)("td",{children:e.texts[23].value})]})]})]}),(0,n.jsx)("hr",{})]})})})})}t.default=x},79650:function(l,t,d){d.r(t),d.d(t,{texts:function(){return _}});const _=[{value:`flowchart TD
    subgraph INPUT["\u{1F4E5} \u8F93\u5165\u5C42"]
        U(["\u7528\u6237"])
        I1["\u{1F4DD} \u6587\u5B57"]
        I2["\u{1F3A4} \u8BED\u97F3"]
        I3["\u{1F4C1} \u6587\u4EF6"]
        I4["\u{1F5BC}\uFE0F \u56FE\u7247"]
        U --> I1 & I2 & I3 & I4
    end

    subgraph CONVERT["\u{1F504} \u8F93\u5165\u9884\u5904\u7406\u5C42"]
        AI_JUDGE1["AI \u6A21\u578B\u5224\u65AD\\n\u8F93\u5165\u7C7B\u578B"]
        T1["\u8BED\u97F3\u8BC6\u522B\\nASR / Whisper"]
        T2["\u6587\u4EF6\u89E3\u6790\\nPDF / Word / CSV"]
        T3["\u56FE\u50CF\u7406\u89E3\\nVision Model"]
        TOKEN["\u7EDF\u4E00\u8F6C\u6362\u4E3A\\n\u6A21\u578B\u53EF\u8BC6\u522B\u7684 Token"]

        I1 --> AI_JUDGE1
        I2 --> AI_JUDGE1
        I3 --> AI_JUDGE1
        I4 --> AI_JUDGE1
        AI_JUDGE1 -->|"\u8BED\u97F3"| T1
        AI_JUDGE1 -->|"\u6587\u4EF6"| T2
        AI_JUDGE1 -->|"\u56FE\u7247"| T3
        AI_JUDGE1 -->|"\u6587\u5B57\u76F4\u63A5\u901A\u8FC7"| TOKEN
        T1 & T2 & T3 --> TOKEN
    end

    subgraph MIDDLE["\u2699\uFE0F \u4E2D\u95F4\u5904\u7406\u5C42\uFF08Agent Loop\uFF09"]
        direction TB
        RECV["\u63A5\u6536 Token \u8F93\u5165"]
        AI_JUDGE2["AI \u6A21\u578B\u5206\u6790\u5224\u65AD\\n\u610F\u56FE\u8BC6\u522B + \u53C2\u6570\u63D0\u53D6"]

        subgraph DB["\u{1F4DA} \u8D44\u6599\u5E93"]
            VDB[("\u5411\u91CF\u6570\u636E\u5E93\\n\u77E5\u8BC6\u5E93")]
            RDB[("\u5173\u7CFB\u6570\u636E\u5E93\\nMySQL / PG")]
            API["\u4E1A\u52A1\u63A5\u53E3\\n\u5B9A\u5411\u6570\u636E\u83B7\u53D6"]
        end

        AI_JUDGE3["AI \u6A21\u578B\\n\u5206\u6790\u68C0\u7D22\u7ED3\u679C"]
        LOOP{"\u662F\u5426\u9700\u8981\\n\u7EE7\u7EED\u5FAA\u73AF\uFF1F"}
        SUMMARY["AI \u6A21\u578B\\n\u6C47\u603B\u6240\u6709\u6570\u636E\\n\u751F\u6210\u6700\u7EC8\u7ED3\u8BBA"]

        RECV --> AI_JUDGE2
        AI_JUDGE2 -->|"\u68C0\u7D22\u76F8\u5173\u8D44\u6599"| VDB
        AI_JUDGE2 -->|"\u67E5\u8BE2\u7ED3\u6784\u5316\u6570\u636E"| RDB
        AI_JUDGE2 -->|"\u8C03\u7528\u4E1A\u52A1\u63A5\u53E3"| API
        VDB & RDB & API --> AI_JUDGE3
        AI_JUDGE3 --> LOOP
        LOOP -->|"Yes\uFF1A\u8865\u5145\u4FE1\u606F\\n\u518D\u6B21\u68C0\u7D22"| AI_JUDGE2
        LOOP -->|"No\uFF1A\u6570\u636E\u5145\u8DB3"| SUMMARY
    end

    subgraph OUTPUT["\u{1F4E4} \u8F93\u51FA\u5C42"]
        OUT_DATA["\u63A5\u6536\u8F93\u51FA\u6570\u636E"]
        O1["\u{1F4AC} \u6587\u5B57\u56DE\u590D"]
        O2["\u{1F5BC}\uFE0F \u56FE\u7247\u751F\u6210"]
        O3["\u{1F3AC} \u89C6\u9891\u5408\u6210"]
        O4["\u{1F50A} \u8BED\u97F3\u64AD\u62A5"]
        OUT_DATA --> O1 & O2 & O3 & O4
    end

    TOKEN --> RECV
    SUMMARY --> OUT_DATA
`,paraId:0,tocIndex:0},{value:"\u6CE8",paraId:1,tocIndex:0},{value:"\uFF1A\u5982\u679C\u6DF1\u5EA6\u4F7F\u7528\u98DE\u4E66\uFF0C\u98DE\u4E66\u667A\u80FD\u4F53\u642D\u5EFA\u4E2D\u6709\u4E2A\u300C\u77E5\u8BC6\u5E93\u300D\uFF0C\u4E2A\u4EBA\u611F\u89C9\u5C31\u662F\u4E00\u4E2A\u300C\u5411\u91CF\u6570\u636E\u5E93\u300D\uFF0C\u91CC\u9762\u8FD8\u6709\u6709\u5207\u7247\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u67E5\u8BE2\u65F6\u505A\u8BED\u4E49\u76F8\u4F3C\u5EA6\u68C0\u7D22\u3002\u98DE\u4E66\u5C06\u5176\u4E0E\u5185\u90E8\u6587\u6863\u7CFB\u7EDF\u6253\u901A\uFF0C\u5B9E\u73B0\u5B9A\u65F6\u81EA\u52A8\u66F4\u65B0\u3002",paraId:1,tocIndex:0},{value:"\u9636\u6BB5",paraId:2,tocIndex:1},{value:"\u5173\u952E\u52A8\u4F5C",paraId:2,tocIndex:1},{value:"\u5178\u578B\u5DE5\u5177",paraId:2,tocIndex:1},{value:"\u8F93\u5165\u9884\u5904\u7406",paraId:2,tocIndex:1},{value:"\u591A\u6A21\u6001\u8F6C Token",paraId:2,tocIndex:1},{value:"ASR\u3001Vision Model\u3001\u6587\u6863\u89E3\u6790\u5668",paraId:2,tocIndex:1},{value:"\u610F\u56FE\u8BC6\u522B",paraId:2,tocIndex:1},{value:"AI \u5224\u65AD\u9700\u8981\u54EA\u4E9B\u6570\u636E",paraId:2,tocIndex:1},{value:"Function Calling / Tool Use",paraId:2,tocIndex:1},{value:"\u6570\u636E\u68C0\u7D22",paraId:2,tocIndex:1},{value:"\u4ECE\u591A\u6E90\u83B7\u53D6\u4E0A\u4E0B\u6587",paraId:2,tocIndex:1},{value:"\u5411\u91CF\u6570\u636E\u5E93\u3001\u4E1A\u52A1 API\u3001\u5173\u7CFB\u6570\u636E\u5E93",paraId:2,tocIndex:1},{value:"\u5FAA\u73AF\u63A8\u7406",paraId:2,tocIndex:1},{value:"\u5224\u65AD\u4FE1\u606F\u662F\u5426\u5145\u8DB3\uFF0C\u4E0D\u8DB3\u5219\u7EE7\u7EED",paraId:2,tocIndex:1},{value:"ReAct / Agent Loop",paraId:2,tocIndex:1},{value:"\u6C47\u603B\u8F93\u51FA",paraId:2,tocIndex:1},{value:"\u6574\u5408\u6240\u6709\u6570\u636E\u751F\u6210\u6700\u7EC8\u54CD\u5E94",paraId:2,tocIndex:1},{value:"LLM Summary",paraId:2,tocIndex:1},{value:"\u7ED3\u679C\u5448\u73B0",paraId:2,tocIndex:1},{value:"\u6309\u9700\u6E32\u67D3\u4E0D\u540C\u683C\u5F0F",paraId:2,tocIndex:1},{value:"TTS\u3001\u56FE\u7247\u751F\u6210\u3001\u5BCC\u6587\u672C\u6E32\u67D3",paraId:2,tocIndex:1}]}}]);
