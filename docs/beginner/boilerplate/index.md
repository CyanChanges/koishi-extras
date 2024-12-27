---
title: Boilerplate
---

# 模板项目开发

## 配置开发环境

创建模板项目

::: code-group

```shell [bun]
bunx create-koishi # 或 bun x create-koishi
```

```shell [deno]
deno run npm:create-koishi
```

```shell [yarn]
yarn create koishi # 或 yarn dlx create-koishi
```

```shell [pnpm]
pnpm dlx create-koishi
```

:::

跟随引导创建项目

```shell
$ deno run npm:create-koishi
  Create Koishi  v6.3.2

? Project name: › # <填入: 项目名称>
  Scaffolding project in <project-name> ...
  Done.
? Install and start it now? › (Y/n) 
# <输入 `Y` 将会立即安装依赖并启动 Koishi, 输入 `n` 跳过启动>
```

至此 Koishi 模板项目创建完成

## 删除 telemetry 插件

::: info
若果您想跳过此步骤
可以直接前往 [启动开发环境](#启动开发环境)
:::

在启动 Koishi 模板项目前, 建议先删除 telemetry 插件

:::: details 为什么?
::: warning
截至 2024/12/27 本文撰写
相关隐私条款更新日期为 [2024 年 5 月 2 日](https://legal.ilharper.com/cordis/privacy#:~:text=%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4%EF%BC%9A-,2024%20%E5%B9%B4%205%20%E6%9C%88%202%20%E6%97%A5,-%E7%94%9F%E6%95%88%E6%97%B6%E9%97%B4%EF%BC%9A2024)  
本文仅针对 `2024 年 5 月 2 日` 在 legal.ilharper.com/cordis/privacy 发布的隐私条款  
及 [koishi-plugin-telemetry](https://www.npmjs.com/package/koishi-plugin-telemetry) 
的 GitHub 存储库的 [3f7a865](https://github.com/koishijs/koishi-plugin-telemetry/commit/3f7a865e415312e9f4d4401d597f3177b98c0952) 版本
做出评价

以下文本不具备法律效益, 
仅代表个人看法, 不一定具备参考价值, 请读者自己谨慎甄别
:::

**同意发送?**

telemetry 插件由 ilharp 开发,
其所有内容由 ilharp 所有
如果您没有在此之前禁用插件
在您首次启动 Koishi 时, 该插件会主动连接远程服务器两次
在后续启动中, 都至少会连接远程服务器一次
除非您在配置中禁用/移除插件,  
或将配置 `mode` 修改为 关闭(`off`), 
否则每次启动 telemetry 都将向远程服务器发送请求

这将会导致服务器可以解析以下信息
- 您的网络出口的互联网地址
- 计算机大致精确到41天的本地时间

**隐私协议?**

隐私协议写的似乎并不严谨
以下列出一些奇怪的点

> Cordis（以下简称“我们”）
[[1]](https://legal.ilharper.com/cordis/privacy#:~:text=%E5%BA%94%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%E4%BD%BF%E7%94%A8%E6%88%91%E4%BB%AC%E7%9A%84%E7%BD%91%E7%AB%99%E3%80%81%E4%BA%A7%E5%93%81%E3%80%81%E6%9C%8D%E5%8A%A1%E3%80%81%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)


> 若您不同意修改后的隐私政策，您有权并应立即停止使用我们的网站、产品、服务、应用程序
[[2]](https://legal.ilharper.com/cordis/privacy#:~:text=%E6%84%9F%E8%B0%A2%E6%82%A8%E4%BD%BF%E7%94%A8-,Cordis%EF%BC%88%E4%BB%A5%E4%B8%8B%E7%AE%80%E7%A7%B0%E2%80%9C%E6%88%91%E4%BB%AC%E2%80%9D%EF%BC%89,-%E3%80%82%E8%AF%B7%E8%8A%B1%E4%B8%80%E4%BA%9B)

将"我们"替换为"Cordis"

> 若您不同意修改后的隐私政策，您有权并应立即停止使用 Cordis 的网站、产品、服务、应用程序

这是否阻止您使用所有基于 Cordis 的衍生项目, 包括 Cordis, Minato, Yakumo, 甚至 Satori, Koishi?
ilharp 的文本并没有明确 Cordis 代表的实际实体

此外, 协议中 
[[3]](https://legal.ilharper.com/cordis/privacy#:~:text=%E8%AF%AD%E8%A8%80%E4%B9%A0%E6%83%AF%E5%B7%AE%E5%BC%82%EF%BC%8C-,%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC,-%E5%A6%82%E4%B8%8E%E4%B8%AD%E6%96%87)
[[4]](https://legal.ilharper.com/cordis/privacy#:~:text=%E7%82%B9%E5%87%BB%E6%9F%A5%E9%98%85-,%E5%8E%86%E5%8F%B2%E7%89%88%E6%9C%AC%E7%9A%84%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96,-%E3%80%82)
并不存在

另外文中 [依法豁免征得您的授权同意的情形](https://legal.ilharper.com/cordis/privacy#:~:text=1.-,%E4%BE%9D%E6%B3%95%E8%B1%81%E5%85%8D%E5%BE%81%E5%BE%97%E6%82%A8%E7%9A%84%E6%8E%88%E6%9D%83%E5%90%8C%E6%84%8F%E7%9A%84%E6%83%85%E5%BD%A2,-%E8%AF%B7%E6%82%A8%E7%90%86%E8%A7%A3) 中所述

> 为公共利益实施新闻报道、舆论监督等行为，在合理的范围内处理个人信息；
[[5]](https://legal.ilharper.com/cordis/privacy#:~:text=%E8%88%86%E8%AE%BA%E7%9B%91%E7%9D%A3)

根据人民日报所述

> 舆论监督主要是对公共权力、公共事务的一种公开性监督形式，而新闻舆论监督主要是人们通过媒介对政府及其工作人员的监督
[[6]](http://paper.people.com.cn/zgby/html/2015-12/25/content_1647666.htm)

ilharp 或其所称的 "Cordis" 不是公共权力, telemetry 服务也非公共事务, 
我们作为使用 Koishi 软件的个人也非公共权力
为什么 ilharp 或其所称的 "Cordis", 
可以"根据法律"将我们的个人信息无需同意的发送给合作方,
这是否代表 ilharp 可以根据自己想法, 进行 "舆论监督"?

**有吗? 如有**

以下信息的收集功能并不存在
[[7]](https://legal.ilharper.com/cordis/privacy#:~:text=%E5%AE%9E%E4%BE%8B%E5%81%9C%E6%AD%A2%E4%BA%8B%E4%BB%B6%E3%80%81%E5%AE%9E%E4%BE%8B%E6%84%8F%E5%A4%96%E9%80%80%E5%87%BA%E4%BA%8B%E4%BB%B6%E3%80%81%E9%A1%B5%E9%9D%A2%E8%AE%BF%E9%97%AE%E4%BA%8B%E4%BB%B6%E3%80%81%E9%A1%B5%E9%9D%A2%E8%AE%BF%E9%97%AE%E6%97%B6%E9%95%BF%E4%BA%8B%E4%BB%B6%E3%80%81%E4%BC%9A%E8%AF%9D%E4%BA%8B%E4%BB%B6%E3%80%81%E7%BD%91%E7%BB%9C%E7%B1%BB%E5%9E%8B%EF%BC%9B%E4%BB%A5%E5%8F%8A%20CPU%20%E5%8F%8A%E6%98%BE%E7%A4%BA%E8%AE%BE%E5%A4%87%E7%AD%89%E7%A1%AC%E4%BB%B6%E8%AE%BE%E5%A4%87)

::::

打开模板项目目录下的 `koishi.yml`,
这个文件是 Koishi 的配置文件

在 `group:basic` 中, 
找到包含 `telemetry: {}` 的一行 
删除此行即可
```yaml
group:basic:
    ~admin: {}
    ~bind: {}
    commands: {}
    help: {}
    http: {}
    ~inspect: {}
    locales: {}
    proxy-agent: {}
    rate-limit: {}
    telemetry: {} // [!code --]
```

同时可以删除 `package.json` 文件中的 `koishi-plugin-telemtry` 包依赖

```json
    "koishi": "^4.18.1",
    "koishi-plugin-android": "^0.0.1",
    "koishi-plugin-assets-local": "^3.3.2",
    "koishi-plugin-dataview": "^2.6.1",
    "koishi-plugin-desktop": "^1.0.0",
    "koishi-plugin-puppeteer": "^3.9.0",
    "koishi-plugin-rate-limit": "^2.0.4",
    "koishi-plugin-telemetry": "^0.2.3", // [!code --]
    "koishi-plugin-theme-vanilla": "^1.1.0"
```


## 启动开发环境

在模板项目配置完成后, 
您就可以使用命令启动 Koishi 了

::: tip
将 `dev` 换成 `start` 即可以普通模式启动 Koishi
:::

::: code-group

```shell [bun]
bun run dev
```

```shell [deno]
deno task dev
```

```shell [yarn]
yarn dev
```

```shell [pnpm]
pnpm run dev
```

:::

运行以上命令后,
您应该可以看到以下内容

:::: details 示例

::: info 版本信息
**Boilerplate**:  [9e998c1](https://github.com/koishijs/boilerplate/commit/9e998c1feabbb409bb3df5e7bd6d081954386cd6)  
**Koishi**:       4.18.4
:::

::: info NOTE
插件名后面跟的是一串随机生成的 id (如 `server:ma4zya`, `ma4zya` 是该 `server` 插件的 id)  
id 在首次启动时自动生成, 每个实例都会有所不同
:::

```log
[I] app Koishi/4.18.4
[I] loader apply plugin group:entry
[I] loader apply plugin group:server
[I] loader apply plugin server:l76d7j
[I] loader apply plugin group:basic
[I] loader apply plugin commands:glsvk6
[I] loader apply plugin help:u9tyxy
[I] loader apply plugin http:kmn9zk
[I] loader apply plugin locales:kwvmke
[I] loader apply plugin proxy-agent:v05mc9
[I] loader apply plugin rate-limit:wjvvik
[I] loader apply plugin group:console
[I] loader apply plugin actions:nys2nv
[I] loader apply plugin analytics:xu3s34
[I] loader apply plugin config:gmkl6n
[I] loader apply plugin console:ke4dg6
[I] loader apply plugin dataview:7g10cl
[I] loader apply plugin explorer:thqb1r
[I] loader apply plugin logger:ic9e3b
[I] loader apply plugin insight:nsi465
[I] loader apply plugin market:o818dr
[I] loader apply plugin notifier:0mt95a
[I] loader apply plugin oobe:mofsth
[I] loader apply plugin sandbox:ow66kq
[I] loader apply plugin status:gtt77n
[I] loader apply plugin theme-vanilla:3j0bfd
[I] loader apply plugin group:storage
[I] loader apply plugin database-sqlite:sh4arh
[I] loader apply plugin assets-local:ic2rnm
[I] loader apply plugin group:adapter
[I] loader apply plugin group:develop
[I] loader apply plugin hmr:7sscte
[I] assets missing config "selfUrl", fallback to "file:" scheme
The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
[I] server server listening at http://127.0.0.1:5140
[I] sqlite auto creating table user
[I] sqlite auto creating table binding
[I] sqlite auto creating table channel
[I] sqlite auto creating table analytics.message
[I] sqlite auto creating table analytics.command
[I] console webui is available at http://127.0.0.1:5140
```
::::

## 接下来

<div class="flex gap-2 text-center">
    <a href="../../end-user/webui#模板" class="flex-1">
        <Card v-ripple>
            <template #content>
                了解控制台
            </template>
        </Card>
    </a>
    <a href="./setup-plugin" class="flex-1">
        <Card v-ripple>
            <template #content>
                创建插件
            </template>
        </Card>
    </a>
</div>
