# 主题配置：主页

VitePress 提供主页布局, 要使用它, 请在根页面 `index.md` 的 [YAML frontmatter](https://vitepress.vuejs.org/guide/frontmatter.html) 中指定 `home:true` 和一些其他元数据. 这是一个指导如何工作的例子:

```yaml
---
home: true
heroImage: /logo.png
heroAlt: Logo image
heroText: Hero Title
tagline: Hero subtitle
actionText: Get Started
actionLink: /guide/
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2019-present Evan You
---
```
