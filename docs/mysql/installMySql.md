---
title: 安装mySql
order: 1
---

# 安装过程
* yum -y install mysql mysql-server mysql-devel
* systemctl start mysqld.service 启动
* netstat -lnp|grep 3306 查看端口
* systemctl status mysqld.service 查看状态
* mysql -uroot -p 登录mysql，输入密码可以直接回车，如果登录在失败在查找临时密码
  * /var/log/mysqld.log 或/var/log/mysql/mysqld.log 下查找临时密码，类似下面的日志，root@localhost后面的就是临时密码
    * 2024-06-13T05:48:58.893117Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: /hs)r9C<(wAu
  * 也可通过命令sudo grep 'temporary password' /var/log/mysqld.log 查找临时密码，注意log日志路径有所差异
* 登录后设置密码：ALTERUSER'root'@'localhost'IDENTIFIEDBY'MyNewPass4!';  设置完之后重启，就可以通过新密码登陆了；
  * 直接执行，不用进入到mysql数据库
* 设置权限，可以远程链接；
  * 先进入mysql数据库: use mysql
  * 设置权限：update user set host = "%" where user = "root";
* 完成这时候就可以通过远程链接数据库了；

# 常用命令
* systemctl daemon-reload
* systemctl start mysqld.service 启动
* netstat -lnp|grep 3306 查看端口进程
* systemctl status mysqld.service 查看状态
* systemctl restart mysqld.service 重启
* sudo grep 'temporary password' /var/log/mysqld.log 显示临时密码
* mysql -uroot -p 登录数据库
* ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!'; 设置密码
* use name; 选择数据库
* show database; 显示数据库
* show tables; 显示表
* exit; 或 quit; 退出数据库

# 参考
* https://blog.csdn.net/qq_42379799/article/details/131234726
* https://blog.csdn.net/myyhtw/article/details/128573673
* https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html 直接从第5点开始看
* 
# Q&A
每次安装过程中遇到的问题都不一样，这次算是比较顺利的过程，同时流程也比较清晰，该流程仅供参考，希望能帮到大家；
之前哈参考了一些其他文章，并遇到了一些其他问题：
* 服务器端口没暴露
  * 这种需要设置安全策略，一般云服务商都提供了可视化的配置界面；
* Access denied for user 'root'@'localhost' (using password: YES)
  * https://www.cnblogs.com/zhongyehai/p/10695334.html
* 1130-Host‘ ‘is not allowed to connect to this MySQL server
  a. https://blog.csdn.net/qq_21237549/article/details/136924212
