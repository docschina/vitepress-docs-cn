# 应用配置：基础 {#app-config-basics}

::: tip 提示
因为配置格式仍可能接收进一步更改所以配置参考并不完整。想要获得当前可用选项的完整选项，请参考 [config.ts](https://github.com/vuejs/vitepress/blob/master/src/node/config.ts#L15)。
:::

## 基础 {#base}

- Type: `string`
- Default: `/`

站点将部署在的根 URL。因而如果你计划在例如 GitHub pages 的子路径下部署你的站点，你就得如此配置。如果你计划将你的站点部署到 `https://foo.github.io/bar/`，那么你应该将 base 设置为 `'/bar/'`。它始终需要以斜杠开始和结束。

`base` 被自动添加到其他选项中以 `/` 开头的所有 url，因此你只需要指定它一次。

```js
module.exports = {
  base: '/base/'
}
```

## 语言 {#lang}

- Type: `string`
- Default: `en-US`

站点的 `lang` 属性。这将在 html 页面中呈现为 `<html lang="en-US">` 标签。

```js
module.exports = {
  lang: 'en-US'
}
```

## 标题 {#title}

- Type: `string`
- Default: `VitePress`

网站的标题。所有页面的标题都会有这个后缀，导航栏中也会显示。

```js
module.exports = {
  title: 'VitePress'
}
```

## 描述 {#description}

- Type: `string`
- Default: `A VitePress site`

站点的描述。这将在 HTML 页面中呈现为 `<meta>` 标记。

```js
module.exports = {
  description: 'A VitePress site'
}
```
