---
title: MySql
order: 2
---

# 常用命令

:::warning
数据库操作需要以分号结束
:::

```sh
# 启动
systemctl start mysqld.service 

# 查看端口进程
netstat -lnp|grep 3306 

# 查看状态
systemctl status mysqld.service 

# 重启
systemctl restart mysqld.service

# 显示临时密码
sudo grep 'temporary password' /var/log/mysqld.log

# 设置密码
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!'

# 登录 执行后会提示输入密码，输入正确密码后即可登录。
mysql -u 用户名 -p 

# 指定主机和端口登录
mysql -h 主机地址 -P 端口号 -u 用户名 -p 

# 直接指定密码登录 -p和密码之间不能有空格
mysql -u 用户名 -p密码

# 指定数据库登录
mysql -u 用户名 -p 数据库名

# 显示所有数据库
SHOW DATABASES;

# 使用特定数据库
USE 数据库名;

# 显示当前数据库中的表
SHOW TABLES;

# 创建数据库
CREATE DATABASE 数据库名;

# 创建数据库(带字符集)
CREATE DATABASE 数据库名 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 删除数据库
DROP DATABASE 数据库名;

# 查看当前使用的数据库
SELECT DATABASE();

# 退出MySQL
EXIT;
或
QUIT;

# 创建用户
CREATE USER '用户名'@'主机' IDENTIFIED BY '密码';

# 授予权限
GRANT 权限 ON 数据库.表 TO '用户名'@'主机';

# 撤销权限
REVOKE 权限 ON 数据库.表 FROM '用户名'@'主机';

# 刷新权限
FLUSH PRIVILEGES;

# 导出数据
mysqldump -u 用户名 -p 数据库名 > 备份文件.sql

# 导入数据
mysql -u 用户名 -p 数据库名 < 备份文件.sql

```

    
