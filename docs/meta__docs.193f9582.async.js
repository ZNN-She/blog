"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[904],{73968:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},2267:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},98610:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},66129:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},11171:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},30343:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},78621:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},77499:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},94854:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:`#!/bin/bash 
# \u786E\u4FDD\u4F7F\u7528 Bash

# \u5220\u9664\u5F53\u524D\u65E5\u5FD7\u4E4B\u524D\u7684\u6240\u6709\u5206\u652F\u548C\u547D\u540D\u4E0D\u5408\u6CD5\u7684\u5206\u652F\uFF0C\u4E0D\u5305\u542Bmaster\u548Cmain\uFF0C\u5408\u6CD5\u5206\u652F\u547D\u540D\uFF08xxx_xxx_20250630\uFF09
# \u9700\u8981\u5220\u9664\u4E91\u6548\u4E2D\u7684\u4FDD\u62A4\u5206\u652F\u89C4\u5219
# \u53EF\u80FD\u4E2A\u522B\u5206\u652F\u5220\u9664\u5931\u8D25\uFF0C\u9700\u8981\u624B\u52A8\u5220\u9664

# \u83B7\u53D6\u5F53\u524D\u65E5\u671F\uFF08\u683C\u5F0F\uFF1AYYYYMMDD\uFF09
current_date=$(date +%Y%m%d)

# \u83B7\u53D6\u6240\u6709\u672C\u5730\u5206\u652F\uFF08\u6392\u9664master/main\uFF09
branches=$(git branch -r --format='%(refname:short)' | grep -Ev 'origin/master$|origin/main$' | sed 's/origin\\///')

# \u5339\u914D\u65E5\u671F\u540E\u7F00\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
date_suffix_regex='_[0-9]{8}$'

declare -a branches_to_delete

while IFS= read -r  branch; do
    # \u63D0\u53D6\u65E5\u671F\u540E\u7F00
    date_suffix=$(echo "$branch" | grep -Eo "$date_suffix_regex" | cut -c2-)
    if [[ -z "$date_suffix" || ( -n "$date_suffix" && "$date_suffix" -lt "$current_date" ) ]]; then
        branches_to_delete+=("$branch")
    fi
done <<< "$branches"

if [ \${#branches_to_delete[@]} -gt 0 ]; then
    echo "\u5373\u5C06\u5220\u9664\u4EE5\u4E0B\u5206\u652F\uFF1A"
    printf '%s\\n' "\${branches_to_delete[@]}"
    
    # \u786E\u8BA4\u5220\u9664
    echo -n "\u786E\u8BA4\u5220\u9664\u4EE5\u4E0A\u5206\u652F\uFF1F(y/n) "
    read -n 1 -r
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        for branch in "\${branches_to_delete[@]}"; do
            if git push origin --delete "$branch"; then
                echo "\u5DF2\u5220\u9664\u8FDC\u7A0B\u5206\u652F: origin/$branch"
            else
                echo "\u5220\u9664\u5206\u652F $branch \u5931\u8D25" >&2
            fi
        done
    else
        echo "\u64CD\u4F5C\u5DF2\u53D6\u6D88"
    fi
else
    echo "\u6CA1\u6709\u9700\u8981\u5220\u9664\u7684\u5206\u652F"
fi

`,paraId:0,tocIndex:0},{value:`#!/bin/bash 
# \u786E\u4FDD\u4F7F\u7528 Bash

# \u5220\u9664\u5F53\u524D\u65E5\u5FD7\u4E4B\u524D\u7684\u6240\u6709\u5206\u652F\u548C\u547D\u540D\u4E0D\u5408\u6CD5\u7684\u5206\u652F\uFF0C\u4E0D\u5305\u542Bmaster\u548Cmain\uFF0C\u5408\u6CD5\u5206\u652F\u547D\u540D\uFF08xxx_xxx_20250630\uFF09
# \u9700\u8981\u5220\u9664\u4E91\u6548\u4E2D\u7684\u4FDD\u62A4\u5206\u652F\u89C4\u5219
# \u53EF\u80FD\u4E2A\u522B\u5206\u652F\u5220\u9664\u5931\u8D25\uFF0C\u9700\u8981\u624B\u52A8\u5220\u9664

# \u83B7\u53D6\u5F53\u524D\u65E5\u671F\uFF08\u683C\u5F0F\uFF1AYYYYMMDD\uFF09
current_date=$(date +%Y%m%d)

# \u83B7\u53D6\u6240\u6709\u672C\u5730\u5206\u652F\uFF08\u6392\u9664master/main\uFF09
branches=$(git branch --format='%(refname:short)' | grep -Ev 'master$|main$')
# \u5339\u914D\u65E5\u671F\u540E\u7F00\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
date_suffix_regex='_[0-9]{8}$'

declare -a branches_to_delete

while IFS= read -r  branch; do
    # \u63D0\u53D6\u65E5\u671F\u540E\u7F00
    date_suffix=$(echo "$branch" | grep -Eo "$date_suffix_regex" | cut -c2-)
    if [[ -z "$date_suffix" || ( -n "$date_suffix" && "$date_suffix" -lt "$current_date" ) ]]; then
        branches_to_delete+=("$branch")
    fi
done <<< "$branches"

if [ \${#branches_to_delete[@]} -gt 0 ]; then
    echo "\u5373\u5C06\u5220\u9664\u4EE5\u4E0B\u5206\u652F\uFF1A"
    printf '%s\\n' "\${branches_to_delete[@]}"
    
    # \u786E\u8BA4\u5220\u9664
    echo -n "\u786E\u8BA4\u5220\u9664\u4EE5\u4E0A\u5206\u652F\uFF1F(y/n) "
    read -n 1 -r
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        for branch in "\${branches_to_delete[@]}"; do
            if git branch -D "$branch"; then
                echo "\u5DF2\u5220\u9664\u672C\u5730\u5206\u652F: $branch"
            else
                echo "\u5220\u9664\u5206\u652F $branch \u5931\u8D25" >&2
            fi
        done
    else
        echo "\u64CD\u4F5C\u5DF2\u53D6\u6D88"
    fi
else
    echo "\u6CA1\u6709\u9700\u8981\u5220\u9664\u7684\u5206\u652F"
fi

`,paraId:1,tocIndex:2}]},7976:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:`# \u62C9\u53D6\u8FDC\u7A0B\u6570\u636E\u5E76\u6E05\u7406\u672C\u5730\u5931\u6548\u5206\u652F
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
`,paraId:0,tocIndex:0}]},28553:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\uFF0C\u8FD9\u91CC\u6807\u6CE8\u4E00\u4E9B\u4FEE\u6539\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u600E\u4E48\u90E8\u7F72\u5230github pages\u3002",paraId:0,tocIndex:0},{value:"\u53E6\u5916Dumi\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86nopm\u5DE5\u5177\u5305\uFF1A",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\u4F7F\u7528github actions \u8FDB\u884C\u90E8\u7F72",paraId:1,tocIndex:0},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA.github/workflows/deploy.yml",paraId:2,tocIndex:0},{value:"\u5185\u5BB9\u5982\u4E0B",paraId:2,tocIndex:0},{value:`name: Deploy to GitHub Pages # \u5DE5\u4F5C\u6D41\u540D\u79F0

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

`,paraId:8,tocIndex:0}]},14348:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u767B\u5F55 github \u8D26\u53F7",paraId:0,tocIndex:1},{value:"\u65B0\u5EFA\u4E00\u4E2A\u4ED3\u5E93",paraId:0,tocIndex:1},{value:"\u4ED3\u5E93\u540D\u548C\u5E38\u89C4\u4ED3\u5E93\u540D\u65E0\u53BB\u5457",paraId:0,tocIndex:1},{value:"\u8FDB\u5165\u4ED3\u5E93",paraId:0,tocIndex:1},{value:"\u70B9\u51FB\u8BBE\u7F6E(Setting)",paraId:0,tocIndex:1},{value:"\u627E\u5230Pages",paraId:0,tocIndex:1},{value:`\u5728Branch\u9009\u9879\u8BBE\u7F6E\u90E8\u7F72\u7684\u5206\u652F\u548C\u76EE\u5F55
`,paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u5206\u652F\u662F\u4E3B\u5206\u652F",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u76EE\u5F55\u662F\u6839\u76EE\u5F55(root)\u3002github\u53EA\u652F\u6301root\u548Cdocs\u4E24\u4E2A\u76EE\u5F55",paraId:1,tocIndex:1},{value:"\u70B9\u51FB\u4FDD\u5B58(Save)",paraId:0,tocIndex:1},{value:"\u8FD9\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u57DF\u540D\u8BBF\u95EE\u535A\u5BA2\uFF0C\u57DF\u540D\u89C4\u5219\u662F\uFF1A",paraId:0,tocIndex:1},{value:"\u7528\u6237\u540D.github.io/\u9879\u76EE\u540D",paraId:0,tocIndex:1},{value:"\u53EF\u4EE5\u518DCustom domain\u9009\u9879\u4E2D\u8BBE\u7F6E\u81EA\u5DF1\u5DF2\u6709\u7684\u5916\u7F51\u57DF\u540D\uFF0C\u5E76\u4E14\u9700\u8981\u5728\u57DF\u540D\u5546\u5904\u505A\u4E00\u4E9B\u914D\u7F6E\uFF0C\u6BD4\u5982DNS\u89E3\u6790\u5230github\u7684ip\u5730\u5740\u624D\u80FD\u6B63\u5E38\u8BBF\u95EE\u3002",paraId:2,tocIndex:2}]},51446:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},27684:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"yum -y install mysql mysql-server mysql-devel",paraId:0,tocIndex:0},{value:"systemctl start mysqld.service \u542F\u52A8",paraId:0,tocIndex:0},{value:"netstat -lnp|grep 3306 \u67E5\u770B\u7AEF\u53E3",paraId:0,tocIndex:0},{value:"systemctl status mysqld.service \u67E5\u770B\u72B6\u6001",paraId:0,tocIndex:0},{value:`mysql -uroot -p \u767B\u5F55mysql\uFF0C\u8F93\u5165\u5BC6\u7801\u53EF\u4EE5\u76F4\u63A5\u56DE\u8F66\uFF0C\u5982\u679C\u767B\u5F55\u5728\u5931\u8D25\u5728\u67E5\u627E\u4E34\u65F6\u5BC6\u7801
`,paraId:0,tocIndex:0},{value:`/var/log/mysqld.log \u6216/var/log/mysql/mysqld.log \u4E0B\u67E5\u627E\u4E34\u65F6\u5BC6\u7801\uFF0C\u7C7B\u4F3C\u4E0B\u9762\u7684\u65E5\u5FD7\uFF0Croot@localhost\u540E\u9762\u7684\u5C31\u662F\u4E34\u65F6\u5BC6\u7801
`,paraId:1,tocIndex:0},{value:"2024-06-13T05:48:58.893117Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: /hs)r9C<(wAu",paraId:2,tocIndex:0},{value:"\u4E5F\u53EF\u901A\u8FC7\u547D\u4EE4sudo grep 'temporary password' /var/log/mysqld.log \u67E5\u627E\u4E34\u65F6\u5BC6\u7801\uFF0C\u6CE8\u610Flog\u65E5\u5FD7\u8DEF\u5F84\u6709\u6240\u5DEE\u5F02",paraId:1,tocIndex:0},{value:`\u767B\u5F55\u540E\u8BBE\u7F6E\u5BC6\u7801\uFF1AALTERUSER'root'@'localhost'IDENTIFIEDBY'MyNewPass4!';  \u8BBE\u7F6E\u5B8C\u4E4B\u540E\u91CD\u542F\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u65B0\u5BC6\u7801\u767B\u9646\u4E86\uFF1B
`,paraId:0,tocIndex:0},{value:"\u76F4\u63A5\u6267\u884C\uFF0C\u4E0D\u7528\u8FDB\u5165\u5230mysql\u6570\u636E\u5E93",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u6743\u9650\uFF0C\u53EF\u4EE5\u8FDC\u7A0B\u94FE\u63A5\uFF1B
`,paraId:0,tocIndex:0},{value:"\u5148\u8FDB\u5165mysql\u6570\u636E\u5E93: use mysql",paraId:4,tocIndex:0},{value:'\u8BBE\u7F6E\u6743\u9650\uFF1Aupdate user set host = "%" where user = "root";',paraId:4,tocIndex:0},{value:"\u5B8C\u6210\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FDC\u7A0B\u94FE\u63A5\u6570\u636E\u5E93\u4E86\uFF1B",paraId:0,tocIndex:0},{value:"systemctl daemon-reload",paraId:5,tocIndex:1},{value:"systemctl start mysqld.service \u542F\u52A8",paraId:5,tocIndex:1},{value:"netstat -lnp|grep 3306 \u67E5\u770B\u7AEF\u53E3\u8FDB\u7A0B",paraId:5,tocIndex:1},{value:"systemctl status mysqld.service \u67E5\u770B\u72B6\u6001",paraId:5,tocIndex:1},{value:"systemctl restart mysqld.service \u91CD\u542F",paraId:5,tocIndex:1},{value:"sudo grep 'temporary password' /var/log/mysqld.log \u663E\u793A\u4E34\u65F6\u5BC6\u7801",paraId:5,tocIndex:1},{value:"mysql -uroot -p \u767B\u5F55\u6570\u636E\u5E93",paraId:5,tocIndex:1},{value:"ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!'; \u8BBE\u7F6E\u5BC6\u7801",paraId:5,tocIndex:1},{value:"use name; \u9009\u62E9\u6570\u636E\u5E93",paraId:5,tocIndex:1},{value:"show database; \u663E\u793A\u6570\u636E\u5E93",paraId:5,tocIndex:1},{value:"show tables; \u663E\u793A\u8868",paraId:5,tocIndex:1},{value:"exit; \u6216 quit; \u9000\u51FA\u6570\u636E\u5E93",paraId:5,tocIndex:1},{value:"https://blog.csdn.net/qq_42379799/article/details/131234726",paraId:6,tocIndex:2},{value:"https://blog.csdn.net/myyhtw/article/details/128573673",paraId:6,tocIndex:2},{value:"https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html",paraId:6,tocIndex:2},{value:" \u76F4\u63A5\u4ECE\u7B2C5\u70B9\u5F00\u59CB\u770B",paraId:6,tocIndex:2},{value:`\u6BCF\u6B21\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898\u90FD\u4E0D\u4E00\u6837\uFF0C\u8FD9\u6B21\u7B97\u662F\u6BD4\u8F83\u987A\u5229\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u6D41\u7A0B\u4E5F\u6BD4\u8F83\u6E05\u6670\uFF0C\u8BE5\u6D41\u7A0B\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5E0C\u671B\u80FD\u5E2E\u5230\u5927\u5BB6\uFF1B
\u4E4B\u524D\u54C8\u53C2\u8003\u4E86\u4E00\u4E9B\u5176\u4ED6\u6587\u7AE0\uFF0C\u5E76\u9047\u5230\u4E86\u4E00\u4E9B\u5176\u4ED6\u95EE\u9898\uFF1A`,paraId:7,tocIndex:3},{value:`\u670D\u52A1\u5668\u7AEF\u53E3\u6CA1\u66B4\u9732
`,paraId:8,tocIndex:3},{value:"\u8FD9\u79CD\u9700\u8981\u8BBE\u7F6E\u5B89\u5168\u7B56\u7565\uFF0C\u4E00\u822C\u4E91\u670D\u52A1\u5546\u90FD\u63D0\u4F9B\u4E86\u53EF\u89C6\u5316\u7684\u914D\u7F6E\u754C\u9762\uFF1B",paraId:9,tocIndex:3},{value:`Access denied for user 'root'@'localhost' (using password: YES)
`,paraId:8,tocIndex:3},{value:"https://www.cnblogs.com/zhongyehai/p/10695334.html",paraId:10,tocIndex:3},{value:`1130-Host\u2018 \u2018is not allowed to connect to this MySQL server
a. `,paraId:8,tocIndex:3},{value:"https://blog.csdn.net/qq_21237549/article/details/136924212",paraId:8,tocIndex:3}]},50330:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u6570\u636E\u5E93\u64CD\u4F5C\u9700\u8981\u4EE5\u5206\u53F7\u7ED3\u675F",paraId:0},{value:`# \u542F\u52A8
systemctl start mysqld.service 

# \u67E5\u770B\u7AEF\u53E3\u8FDB\u7A0B
netstat -lnp|grep 3306 

# \u67E5\u770B\u72B6\u6001
systemctl status mysqld.service 

# \u91CD\u542F
systemctl restart mysqld.service

# \u663E\u793A\u4E34\u65F6\u5BC6\u7801
sudo grep 'temporary password' /var/log/mysqld.log

# \u8BBE\u7F6E\u5BC6\u7801
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!'

# \u767B\u5F55 \u6267\u884C\u540E\u4F1A\u63D0\u793A\u8F93\u5165\u5BC6\u7801\uFF0C\u8F93\u5165\u6B63\u786E\u5BC6\u7801\u540E\u5373\u53EF\u767B\u5F55\u3002
mysql -u \u7528\u6237\u540D -p 

# \u6307\u5B9A\u4E3B\u673A\u548C\u7AEF\u53E3\u767B\u5F55
mysql -h \u4E3B\u673A\u5730\u5740 -P \u7AEF\u53E3\u53F7 -u \u7528\u6237\u540D -p 

# \u76F4\u63A5\u6307\u5B9A\u5BC6\u7801\u767B\u5F55 -p\u548C\u5BC6\u7801\u4E4B\u95F4\u4E0D\u80FD\u6709\u7A7A\u683C
mysql -u \u7528\u6237\u540D -p\u5BC6\u7801

# \u6307\u5B9A\u6570\u636E\u5E93\u767B\u5F55
mysql -u \u7528\u6237\u540D -p \u6570\u636E\u5E93\u540D

# \u663E\u793A\u6240\u6709\u6570\u636E\u5E93
SHOW DATABASES;

# \u4F7F\u7528\u7279\u5B9A\u6570\u636E\u5E93
USE \u6570\u636E\u5E93\u540D;

# \u663E\u793A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u7684\u8868
SHOW TABLES;

# \u521B\u5EFA\u6570\u636E\u5E93
CREATE DATABASE \u6570\u636E\u5E93\u540D;

# \u521B\u5EFA\u6570\u636E\u5E93(\u5E26\u5B57\u7B26\u96C6)
CREATE DATABASE \u6570\u636E\u5E93\u540D CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# \u5220\u9664\u6570\u636E\u5E93
DROP DATABASE \u6570\u636E\u5E93\u540D;

# \u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93
SELECT DATABASE();

# \u9000\u51FAMySQL
EXIT;
\u6216
QUIT;

# \u521B\u5EFA\u7528\u6237
CREATE USER '\u7528\u6237\u540D'@'\u4E3B\u673A' IDENTIFIED BY '\u5BC6\u7801';

# \u6388\u4E88\u6743\u9650
GRANT \u6743\u9650 ON \u6570\u636E\u5E93.\u8868 TO '\u7528\u6237\u540D'@'\u4E3B\u673A';

# \u64A4\u9500\u6743\u9650
REVOKE \u6743\u9650 ON \u6570\u636E\u5E93.\u8868 FROM '\u7528\u6237\u540D'@'\u4E3B\u673A';

# \u5237\u65B0\u6743\u9650
FLUSH PRIVILEGES;

# \u5BFC\u51FA\u6570\u636E
mysqldump -u \u7528\u6237\u540D -p \u6570\u636E\u5E93\u540D > \u5907\u4EFD\u6587\u4EF6.sql

# \u5BFC\u5165\u6570\u636E
mysql -u \u7528\u6237\u540D -p \u6570\u636E\u5E93\u540D < \u5907\u4EFD\u6587\u4EF6.sql

`,paraId:1}]},74656:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u6839\u636E\u6570\u636E\u81EA\u52A8\u751F\u6210model\u5B9A\u4E49",paraId:0,tocIndex:0},{value:"https://github.com/sequelize/sequelize-auto#readme",paraId:1,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:3},{value:" \u914D\u7F6E\u4E2D\u6DFB\u52A0 ",paraId:2,tocIndex:3},{value:"dialectOptions",paraId:2,tocIndex:3},{value:" \u5B57\u6BB5\uFF0C\u7528\u4E8E\u8F6C\u6362\u6570\u636E\u5E93\u65F6\u95F4\u4E3A\u5B57\u7B26\u4E32",paraId:2,tocIndex:3},{value:`module.exports = (appInfo) => {
  const config = (exports = {});
  const env = appInfo.env; // \u5F53\u524D\u73AF\u5883 \u53EF\u6839\u636E\u73AF\u5883\u914D\u7F6E\u4E0D\u540C\u7684\u914D\u7F6E \u6BD4\u5982\u6570\u636E\u5E93\u3001redis\u7B49

  // ... \u5176\u4ED6\u914D\u7F6E
  config.sequelize = {
    "database": "\u6570\u636E\u5E93",
    "username": "root",
    "password": "\u5BC6\u7801",
    "host": "\u6570\u636E\u5E93\u5730\u5740",
    "port": 3306,
    "dialect": "mysql",

    dialectOptions: {
      dateStrings: true, // \u8FD4\u56DE\u5B57\u7B26\u4E32\u800C\u4E0D\u662F Date \u5BF9\u8C61
      typeCast: function (field, next) {
        if (field.type === "DATETIME" || field.type === "TIMESTAMP" || field.type === 'DATE') { // \u7EDF\u4E00\u8F6C\u6362\u65F6\u95F4\u4E3A\u5B57\u7B26\u4E32
          const val = field.string();
          return val || null;
        }
        return next();
      },
    },
  }

}
`,paraId:3,tocIndex:3},{value:`{
  "database": "\u6570\u636E\u5E93",
  "username": "root",
  "password": "\u5BC6\u7801",
  "host": "\u6570\u636E\u5E93\u5730\u5740",
  "port": 3306,
  "dialect": "mysql",

  "directory": "./app/model", // \u751F\u6210\u6587\u4EF6\u76EE\u5F55\uFF0Cegg\u4E2D\u9ED8\u8BA4\u4E3Aapp/model
  "noInitModels": true,  // \u4E0D\u9700\u8981\u751F\u6210init-models\u6587\u4EF6\uFF0Cegg\u4F1A\u81EA\u52A8\u5BFC\u5165modals
  "singularize": true  // \u5355\u6570\u5F62\u5F0F\u7B26\u5408egg\u89C4\u8303
  directory: "./app/model",
  noInitModels: true,
  freezeTableName: true,
  // caseModel: 'c', // \u8868\u540D\u9A7C\u5CF0\u547D\u540D
  caseProp: 'c', // \u5B57\u6BB5\u540D\u9A7C\u5CF0\u547D\u540D
  // "tables": ["users"],
  underscored: true, // \u5C06\u9A7C\u5CF0\u8F6C\u6362\u4E3A\u4E0B\u5212\u7EBF
  timestamps: true, // \u81EA\u52A8\u7BA1\u7406 createdAt \u548C updatedAt
  paranoid: true, // \u4F7F\u7528\u8F6F\u5220\u9664
  define: {
    freezeTableName: false,
    underscored: true,
  }
}
`,paraId:4,tocIndex:4},{value:`{
  "scripts": {
    ...
    "model": "sequelize-auto --config ./sequelize-auto-config.json"
  }
}
`,paraId:5,tocIndex:5},{value:`npm run model
npm run model -- --tables=\u8868\u540D1,\u8868\u540D2 # \u6307\u5B9A\u8868\u540D
\u6216
yarn model
yarn model --tables=\u8868\u540D1,\u8868\u540D2 # \u6307\u5B9A\u8868\u540D
`,paraId:6,tocIndex:6},{value:"\u56E0\u4E3Asequelize-auto\u751F\u6210\u7684\u662F\u901A\u7528model\uFF0C\u5E76\u4E0D\u9002\u5408egg\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u6700\u9876\u90E8\u7684\u4E24\u884C\u4EE3\u7801\u5373\u53EF",paraId:7,tocIndex:7},{value:`// \u4FEE\u6539\u524D
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {


// \u4FEE\u6539\u540E
"use strict";

"use strict";

module.exports = function (app) {
  const { DataTypes } = app.Sequelize; // egg\u4E2D\u83B7\u53D6DataTypes
  const sequelize = app.model; // egg\u4E2D\u83B7\u53D6sequelize\u5B9E\u4F8B

`,paraId:8,tocIndex:7},{value:"\u7248\u672C\u6BD4\u8F83\u65E7\u4E86\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u5F88\u591A\u914D\u7F6E\u65E0\u6548\u4E86\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684modal\u6BD4\u8F83\u7B80\u5355\uFF0C\u6CA1\u6709\u6CE8\u91CA\u7B49\u4E00\u4E9B\u4E1C\u897F",paraId:9,tocIndex:8}]}}]);
