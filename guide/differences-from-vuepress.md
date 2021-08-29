---
sidebarDepth: 2
---
# 与 Vuepress 的区别{#differences-from-vuePress}

VitePress 和 VuePress 有不同的[设计目标](../index.md)。两个项目都有类似的配置命名约定。 VitePress 的目标是为编写文档提供最基本的功能。其他特性被委托给主题。另一方面，VuePress 拥有更多的开箱即用的特性，以及支持插件生态系统.

::: tip
如果你正在使用 VuePress，就没有必要迁移到 VitePress。在可预见的未来，这两个项目将继续并存。
:::

::: warning
请注意， 本项目还处于早期 WIP 阶段！目前的重点是首先使 Vite 稳定且功能齐全。目前还不建议将其用于任何正式场景中。
:::

如果你决定将你的项目迁移至 VitePress，以下是你需要考虑的与[VuePress v1.7.1](https://github.com/vuejs/vuepress/releases/tag/v1.7.1)的不同之处。

## 全局{#general}

- 不再支持
  - 站点配置不再支持 YAML 和 TOML 格式。只支持 javascript 格式的`.vitepress/config.js`文件。
  - 支持[插件](https://vuepress.vuejs.org/plugin/)，更多功能在主题中实现。
  - [支持永久链接](https://vuepress.vuejs.org/guide/permalinks.html)
  - `.vitepress/templates`
  - `.vitepress/components`中的组件[不再自动被注册为全局组件](https://vuepress.vuejs.org/)
- 区别
  - [公共文件](https://vuepress.vuejs.org/guide/assets.html#public-files)，直接复制到 dist 文件夹根目录下，从`.vitepress/public/`移到`public/`。
  - [styling](https://vuepress.vuejs.org/config/#styling) 不再支持`.vitepress/styles/index.styl`和`.vitepress/styles/palette.styl`。参见[自定义 CSS](/guide/theming.html#customizing-css)。
  - [应用级增强](https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements) API，应用程序的增强`.vitepress/enhanceApp.js`现在在`.vitepress/theme/index.js`中完成。参考[扩展默认主题](/guide/theming.html#extending-the-default-theme)。

## Markdown{#markdown}

- 不再支持
  - 对[frontmatter 中 toml](https://vuepress.vuejs.org/guide/frontmatter.html#alternative-frontmatter-formats)的支持
  - [详情块](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
  - [markdown 插槽](https://vuepress.vuejs.org/guide/markdown-slot.html)
  - 明确指定一个url的`~`前缀是一个[webpack 模块请求](https://vuepress.vuejs.org/guide/assets.html#relative-urls)

## Site Config

- 不再支持
  - `temp`
  - `dest`
  - [`theme` from a dependency](https://vuepress.vuejs.org/theme/using-a-theme.html#using-a-theme-from-a-dependency)
  - `permalink`
  - [`port`](https://vuepress.vuejs.org/config/#port)
  - [`shouldPrefetch`](https://vuepress.vuejs.org/config/#shouldprefetch)
  - [`cache`](https://vuepress.vuejs.org/config/#cache)
  - [`extraWatchFiles`](https://vuepress.vuejs.org/config/#extrawatchfiles)
  - [`patterns`](https://vuepress.vuejs.org/config/#patterns)
  - [`plugins`](https://vuepress.vuejs.org/config/#pluggable)
  - [`markdown.pageSuffix`](https://vuepress.vuejs.org/config/#markdown-pagesuffix)
  - [`markdown.slugify`](https://vuepress.vuejs.org/config/#markdown-slugify)
  - [`markdown.plugins`](https://vuepress.vuejs.org/config/#markdown-plugins)
  - [`markdown.extractHeaders`](https://vuepress.vuejs.org/config/#markdown-extractheaders)
  - `markdown.extendMarkdown` to `markdown.config`
  - `configureWebpack`, `chainWebpack`, `postcss`, `Stylus`, `scss`, `Sass`, `less` configs
  - [`evergreen`](https://vuepress.vuejs.org/config/#evergreen)

## Default Theme Config

- 不再支持
  - [`smoothScroll`](https://vuepress.vuejs.org/theme/default-theme-config.html#smooth-scrolling)
  - [`displayAllHeaders`](https://vuepress.vuejs.org/theme/default-theme-config.html#displaying-header-links-of-all-pages)
  - [`activeHeaderLinks`](https://vuepress.vuejs.org/theme/default-theme-config.html#active-header-links)
  - [sidebar groups](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar-groups)中的 `sidebarDepth` 和 `initialOpenGroupIndex`  
- 区别
  - `searchMaxSuggestions` 变为 `search.maxSuggestions`
  - `algolia` 变为 `search.algolia`
  - `searchPlaceholder` 变为 `search.placeholder`

## Default Theme

- 不再支持
  - [`<code-group>` 和 `<code-block>`](https://vuepress.vuejs.org/theme/default-theme-config.html#code-groups-and-code-blocks)

## Computed Globals

- 不再支持
  - `$lang`
  - `$localePath`

## Frontmatter Predefined Variables

- 不再支持
  - `description`
  - [`meta`](https://vuepress.vuejs.org/guide/frontmatter.html#meta)
  - [`metaTitle`](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables)
  - `lang`
  - [`layout`](https://vuepress.vuejs.org/guide/frontmatter.html#layout)
  - [`permalink`](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables)
  - [`canonicalUrl`](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables)

## Frontmatter Default Theme Variables

- 不再支持
  - `prev`, `next`
  - [`search`](https://vuepress.vuejs.org/guide/frontmatter.html#search)
  - [`tags`](https://vuepress.vuejs.org/guide/frontmatter.html#tags)
  - [`pageClass`](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-page-class)
  - [`layout`](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages)

## siteData

- 不再支持
  - [`pages`](https://vuepress.vuejs.org/theme/writing-a-theme.html#site-and-page-metadata)

## pageData

- 不再支持
  - `key`
  - `path`
  - `regularPath`

## Global Components

- 不再支持
  - [`<Badge>`](https://vuepress.vuejs.org/guide/using-vue.html#badge)
