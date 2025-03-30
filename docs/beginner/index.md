---
title: Beginner
---

# 如何开发 Koishi

::: tip
什么是 Koishi?  
查看来自 Koishi 官方的 [介绍](https://koishi.chat/zh-CN/manual/introduction.html)
:::


[[toc]]

## 基本知识

阅读文档前您需要:

- 较为熟练使用您的操作系统
- 了解模板目录 (用户目录, 配置目录等) 的位置
- 编程所需的基本英语水平

为了开发 Koishi 插件, 请先了解

- [ECMAScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 
(JavaScript) 的基本语法  

- [TypeScript](https://www.typescriptlang.org/)
             的基本语法

## 准备工作

::: tip
尽管 Koishi 要求使用 Node.js, 但是 Node.js 对 TypeScript 支持有限,  
使用没有 Deno 和 Bun 方便, 且 Deno 和 Bun 性能, 尤其是依赖安装速度相比 Node.js 都更快,  
若您有使用 Node.js 的 TS 开发经验也可以使用 Node.js
:::

建议使用以下配置: 

- [Bun](https://bun.sh/) >= 1.1.38 或 [Deno](https://deno.land/) >= 2.1.2

要使用 [Node.js](https://nodejs.org/), 那么建议另外选择安装一个包管理器: 

- [pnpm](https://pnpm.io/)
- [Yarn Berry](https://yarnpkg.com/)

其中 pnpm 速度最快, Yarn 可能略慢

::: tip
如果您遇到 Corepack 锁定包管理器的问题,  
可以设置环境变量 `COREPACK_ENABLE_AUTO_PIN` 为 `0`, 
以阻止 Corepack 强制锁定您的包管理器
:::

::: code-group

```shell [pnpm (corepack)]
# May Requires Super User (or Administrator)
$ corepack enable
$ corepack use pnpm@latest
```

```shell [yarn (corepack)]
# May Requires Super User (or Administrator)
$ corepack enable
$ corepack use yarn@latest
```

:::

## 接下来

<div class="flex gap-2 text-center">
<a href="./boilerplate" class="flex-1">
<Card v-ripple>
    <template #content>
        使用模板项目
    </template>
</Card>
</a>
<a href="./as-dependency" class="flex-1">
<Card v-ripple>
    <template #content>
        作为依赖开发
    </template>
</Card>
</a>
</div>

