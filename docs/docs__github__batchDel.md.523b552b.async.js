"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2],{23625:function(d,_,e){e.r(_);var t=e(72269),h=e(93359),l=e(61788),x=e(19977),c=e(25809),u=e(90978),f=e(96057),m=e(83213),a=e(53683),o=e(80936),i=e(67294),r=e(94854),n=e(85893);function s(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(o.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h5",{id:"\u6279\u91CF\u5220\u9664\u8FDC\u7A0B\u5206\u652F\u5206\u652F\u547D\u540Dxxx_xxx_20250630",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6279\u91CF\u5220\u9664\u8FDC\u7A0B\u5206\u652F\u5206\u652F\u547D\u540Dxxx_xxx_20250630",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6279\u91CF\u5220\u9664\u8FDC\u7A0B\u5206\u652F\uFF0C\u5206\u652F\u547D\u540D\uFF08xxx_xxx_20250630\uFF09"]}),(0,n.jsx)(u.Z,{lang:"Bash",children:r.texts[0].value}),(0,n.jsx)("hr",{}),(0,n.jsxs)("h2",{id:"title-\u6279\u91CF\u5220\u9664\u5206\u652Forder-4",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#title-\u6279\u91CF\u5220\u9664\u5206\u652Forder-4",children:(0,n.jsx)("span",{className:"icon icon-link"})}),`title: \u6279\u91CF\u5220\u9664\u5206\u652F
order: 4`]}),(0,n.jsxs)("h5",{id:"\u6279\u91CF\u5220\u9664\u8FDC\u672C\u5730\u5206\u652F\u5206\u652F\u547D\u540Dxxx_xxx_20250630",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6279\u91CF\u5220\u9664\u8FDC\u672C\u5730\u5206\u652F\u5206\u652F\u547D\u540Dxxx_xxx_20250630",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6279\u91CF\u5220\u9664\u8FDC\u672C\u5730\u5206\u652F\uFF0C\u5206\u652F\u547D\u540D\uFF08xxx_xxx_20250630\uFF09"]}),(0,n.jsx)(u.Z,{lang:"Bash",children:r.texts[1].value})]})})})})}_.default=s},94854:function(d,_,e){e.r(_),e.d(_,{texts:function(){return t}});const t=[{value:`#!/bin/bash 
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

`,paraId:1,tocIndex:2}]}}]);
