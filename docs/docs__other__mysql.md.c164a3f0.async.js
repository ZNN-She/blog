"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[147],{28130:function(d,e,n){n.r(e);var l=n(72269),i=n(93359),a=n(61788),o=n(19977),D=n(25809),u=n(90978),h=n(96057),A=n(83213),t=n(53683),E=n(80936),m=n(67294),s=n(50330),_=n(85893);function r(){return(0,_.jsx)(t.dY,{children:(0,_.jsx)(m.Suspense,{fallback:(0,_.jsx)(E.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h1",{id:"\u5E38\u7528\u547D\u4EE4",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5E38\u7528\u547D\u4EE4",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5E38\u7528\u547D\u4EE4"]})}),(0,_.jsx)(o.Z,{type:"warning",children:(0,_.jsx)("p",{children:s.texts[0].value})}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsx)(u.Z,{lang:"sh",children:s.texts[1].value})})]})})})}e.default=r},50330:function(d,e,n){n.r(e),n.d(e,{texts:function(){return l}});const l=[{value:"\u6570\u636E\u5E93\u64CD\u4F5C\u9700\u8981\u4EE5\u5206\u53F7\u7ED3\u675F",paraId:0},{value:`# \u542F\u52A8
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

`,paraId:1}]}}]);
