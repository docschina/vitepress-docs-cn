# 应用配置: 基础

## 基础

- 类型: `字符串`
- 默认: `/`

站点将部署在的根 URL. 如果你计划在子路径下部署你的站点, 比如 GitHub 页面, 你需要设置这个. 如果你计划将你的站点部署到`https://foo.github.io/bar/`, 那么你应该将 base 设置为'/bar/'. 它应该始终以斜杠开始和结束.

base 被自动添加到其他选项中以`/`开头的所有 url, 因此您只需要指定它一次.

```js
module.exports = {
  base: "/base/",
};
```

## 语言

- 类型: `字符串`
- 默认: `en-US`

站点的`lang`属性. 这将在 html 页面中呈现为`<html lang="en-US">`标签.

```js
module.exports = {
  lang: "en-US",
};
```

## 标题

- 类型: `字符串`
- 默认: `VitePress`

网站的标题. 这将是所有页面标题的前缀, 并显示在导航栏中.

```js
module.exports = {
  title: "VitePress",
};
```

## 描述

- 类型: `字符串`
- 默认: `A VitePress site`

站点的描述. 这将在 HTML 页面中呈现为`<meta>`标记.

```js
module.exports = {
  description: "A VitePress site",
};
```
