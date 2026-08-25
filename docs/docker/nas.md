---
title: Mac 安装本地 NAS
---

## 工具

### Homebrew

```bash
# 检查是否已安装
brew --version

# 安装：https://brew.sh/zh-cn/
```

### Docker

```bash
# 安装 Docker 和 docker-compose
brew install docker docker-compose

# 安装 Docker Desktop 客户端
brew install --cask docker
```

> 推荐使用 [OrbStack](https://orbstack.dev/) 代替 Docker Desktop。我的电脑系统是 macOS 12，OrbStack 最新版本不兼容，旧版本兼容性也不太好，所以还是用了 Docker Desktop。

### 入门参考

- [40 分钟的 Docker 实战攻略，一期视频精通 Docker](https://www.bilibili.com/video/BV1og4y1q7M4)

---

## docker-compose.yml 配置

```yaml
version: "3"

services:
  nextcloud:
    image: linuxserver/nextcloud
    container_name: nextcloud
    environment:
      - PUID=501          # 当前电脑用户 ID，让容器有权限读写主机文件
      - PGID=20           # 用户组 ID
      - TZ=Asia/Shanghai
    volumes:
      - ~/docker/nextcloud:/config   # Nextcloud 配置、数据库
      - ~/docker/media:/media        # 共享媒体文件夹，三个服务都能访问
    ports:
      - 8080:80           # http://localhost:8080
    restart: unless-stopped
    depends_on:
      - mariadb

  mariadb:
    image: lscr.io/linuxserver/mariadb
    container_name: mariadb
    environment:
      - PUID=501
      - PGID=20
      - TZ=Asia/Shanghai
      - MYSQL_ROOT_PASSWORD=rootpass
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=nextcloudpass
    volumes:
      - ~/docker/mariadb:/config
    restart: unless-stopped

  jellyfin:
    image: linuxserver/jellyfin
    container_name: jellyfin
    environment:
      - PUID=501
      - PGID=20
      - TZ=Asia/Shanghai
    volumes:
      - ~/docker/media:/media
      - ~/docker/jellyfin:/config
    ports:
      - 8096:8096
    restart: unless-stopped

  qbittorrent:
    image: linuxserver/qbittorrent
    container_name: qbittorrent
    environment:
      - PUID=501
      - PGID=20
      - TZ=Asia/Shanghai
      - WEBUI_PORT=8081
    volumes:
      - ~/docker/qbittorrent:/config
      - ~/docker/media:/media      # 下载文件存到共享媒体文件夹，Jellyfin 自动识别
    ports:
      - 8081:8081                   # Web 管理界面
      - 6881:6881                   # TCP 下载端口
      - 6881:6881/udp               # BT 下载通讯端口（TCP + UDP）
    restart: unless-stopped
```

在 `docker-compose.yml` 所在目录执行：

```bash
docker-compose up -d
```

启动后即可访问三个服务：

| 服务 | 地址 |
|------|------|
| Nextcloud | http://localhost:8080/ |
| Jellyfin | http://localhost:8096/ |
| qBittorrent | http://localhost:8081/ |

---

## Nextcloud 初始化设置

1. 访问 http://localhost:8080/
2. 设置管理员账号密码
3. 选择数据库 — 使用上面配置的 MariaDB（**不要用默认的 SQLite**，不支持并发，问题很多）
4. 填写数据库信息：
   - 数据库用户名/密码：参考 `docker-compose.yml` 中的配置
   - **数据库主机必须填 `mariadb`**（容器名），不能填 `localhost`。原因参见上方 Docker 入门视频。

> 首次安装后自动刷新可能出现 Nginx 500 错误，手动刷新即可。

安装完成后使用管理员账户登录 http://localhost:8080/。

### 局域网访问 & 修复 trusted_domains

使用 IP 或局域网内其他设备访问时会报错：「请联系您的管理员。如果您就是管理员，请参照 config.sample.php 中的示例编辑 config/config.php 中的 "trusted_domains" 设置。」

快速修复命令：

```bash
docker exec -it nextcloud sed -i 's/.*trusted_domains.*/ "trusted_domains" => array (\n 0 => "localhost",\n 1 => "127.0.0.1",\n 2 => "192.168.*.*",\n ),/' /config/www/nextcloud/config/config.php
```

### 其他设备登录

1. 下载 [Nextcloud 客户端](https://nextcloud.com/install/)
2. 确保设备与 Nextcloud 服务在同一局域网（后续会讲内网穿透方案）
3. 输入 Nextcloud 服务的 IP 和端口即可访问
4. 登录会跳转网页授权，使用账号密码登录
5. 手机上可设置自动同步指定照片文件夹，支持添加多个目录

### 固定 IP & 防止休眠

- **固定 IP**：电脑默认动态获取 IP，需改为固定 IP，否则下次开机 IP 会变，客户端就连接不到了
- **禁止休眠**：笔记本需设置盒盖也不休眠

---

## Jellyfin 设置

首次访问后：

1. 设置服务名（建议取个有意义的名字，如 `jellyfinlocal`）
2. 设置管理员账户

---

## qBittorrent 设置

最新版本取消了默认密码，需通过以下命令查看临时密码：

```bash
docker logs qbittorrent | grep -i password
```

进入后：

1. **Tools** → 设置语言为简体中文
2. **工具 → WebUI** → 修改密码

---

## 其他资料

- [PanSou](https://github.com/FongMi/Release)
- [vodspider](https://github.com/vodspider/release)
- [Omnibox 文档](https://omnibox-doc.pages.dev/)
- [影视资源站](https://www.xn--sss604efuw.com/)
- Tailscale、ZeroTier 内网穿透
- https://www.cloudflare.com/ 域名托管个人免费
