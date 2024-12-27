# 安装 Koishi

::: info
参考官方 [安装方式](https://koishi.chat/zh-CN/manual/starter/)
:::

## 使用 Docker

::: warning
在使用 Docker 等容器化软件部署时, 
我们认为您已经掌握运维一台服务器所必须的知识
同时理解 Docker 基本操作及相关概念
:::

Koishi 官方在 [Docker Hub](https://hub.docker.com/) 提供 [Docker Image](https://hub.docker.com/r/koishijs/koishi),
您需要安装 [Podman](https://podman.io/) 或 [Docker](https://docker.com/) 来运行容器

### 启动容器

::: tip
由于依赖 [koishi-plugin-puppeteer](https://www.npmjs.com/package/koishi-plugin-puppeteer) 的插件较多  
因此 [koishijs/koishi](https://hub.docker.com/r/koishijs/koishi)  默认包含了 Chromium

如果您需要不包含 Chromium 的版本, 可以使用轻量版本 [koishijs/koishi-lite](https://hub.docker.com/r/koishijs/koishi-lite)  
将下方的命令的 `koishijs/koishi` 换成 `koishijs/koishi-lite` 即可
:::

::: code-group

```shell [podman]
podman run -p 5140:5140 koishijs/koishi
```

```shell [docker]
docker run -p 5140:5140 koishijs/koishi
```

:::

## 使用 Koishi Desktop

::: warning
Koishi Desktop 由 ilharp 主导开发, 
本文档不对 Koishi Desktop 出现的任何问题负责
:::

<div class="text-center m-2">
    <a href="https://koishi.chat/zh-CN/manual/starter/" rel="nofollow">
        <Card v-ripple>
            <template #content>
                前往官方文档
            </template>
        </Card>
    </a>
</div>

::: warning
链接来自官方文档 [bdea503](https://github.com/koishijs/koishi/commit/bdea50369ca49fc3fd915833ac2d4b3ea63b29f4) 版本  
但短链由 ilharp 提供和服务, 
本文档不对从以下链接下载的任何文件负责
:::

**下载跳转链接**

<div class="flex flex-col gap-2 text-center">
    <a href="https://k.ilharp.cc/linux.AppImage" rel="nofollow" class="flex-1">
        <Card v-ripple>
            <template #content>
                Linux
            </template>
        </Card>
    </a>
    <a href="https://k.ilharp.cc/osx.pkg" rel="nofollow" class="flex-1">
        <Card v-ripple>
            <template #content>
                MacOS
            </template>
        </Card>
    </a>
    <a href="https://k.ilharp.cc/win.msi" rel="nofollow" class="flex-1">
        <Card v-ripple>
            <template #content>
                Windows
            </template>
        </Card>
    </a>
    <a href="https://github.com/koishijs/koishi-desktop/releases" rel="nofollow" class="flex-1">
        <Card v-ripple>
            <template #content>
                所有版本 (GitHub Releases)
            </template>
        </Card>
    </a>
    
</div>

## 接下来

<a href="./webui" class="text-center flex-1">
    <Card v-ripple>
        <template #content>
            认识控制台
        </template>
    </Card>
</a>