---
title: Setup Plugin
---

# 创建插件

创建一个名为 `my-plugin` 的插件

::: code-group

```shell [bun]
$ bun run setup # 也可以在此直接填入 [插件名称]
? plugin name: › my-plugin # 插件名称: my-plugin
? description: › My first Koishi plugin # 插件描述: My first Koishi plugin
```

:::

::: details 更多创建模板

除了直接不包含参数使用 `setup` 创建插件模板, 
您也可以添加一些参数创建其他模板

::: code-group

```shell [bun]
# 创建普通插件
bun run setup # <填入插件名称>
# 创建控制台插件模板
bun run setup -c # <填入插件名称>
# 创建 monorepo 插件模板
bun run setup -m # <填入插件名称>
```

```shell [deno]
# 创建普通插件模板
deno task setup # [填入插件名称]
# 创建控制台插件模板
deno task setup -c # <填入插件名称>
# 创建 monorepo 插件模板
deno task setup -m # <填入插件名称>
```

```shell [yarn]
# 创建普通插件模板
yarn setup # <填入插件名称>
# 创建控制台插件模板
yarn setup -c # <填入插件名称>
# 创建 monorepo 插件模板
yarn setup -m # <填入插件名称>
```

```shell [pnpm]
# 创建普通插件模板
pnpm run setup # <填入插件名称>
# 创建控制台插件模板
pnpm run setup -c # <填入插件名称>
# 创建 monorepo 插件模板
pnpm run setup -m # <填入插件名称>
```

:::

