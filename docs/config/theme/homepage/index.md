# 主题配置：主页 {#theme-config-homepage}

VitePress 提供了主页布局，要启用它，请在根页面 `index.md` 的 [YAML frontmatter](../guide/frontmatter) 中指定 `home:true` 和一些其他的 metadata。这是一个展示它如何起作用的例子：

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
