# 与 VuePress 的区别

VitePress 和 VuePress 有不同的[设计目标](../../introduction/what-is-vitepress/). 这两个项目共享相似的配置命名约定. VitePress 的目标是为编写文档提供最基本的功能. 其他特性被推到主题中. 另一方面, VuePress 拥有更多的开箱即用的特性, 或者由它的插件生态系统支持的特性.

::: tip
如果您使用的是 VuePress, 则无需迁移到 VitePress. 在可预见的未来, 这两个项目将继续共存.
:::

::: warning
请注意, 这是早期 WIP! 目前的重点是首先使 Vite 稳定和功能齐全. 目前还不建议将其用于任何重要场景.
:::

如果您决定将您的项目移到 VitePress, 以下是您需要考虑的与[VuePress v1.7.1](https://github.com/vuejs/vuepress/releases/tag/v1.7.1)的不同之处.

## General

- Missing
  - YAML and TOML are not supported formats for site config. Only javascript is supported for `.vitepress/config.js`
  - [Plugins](https://vuepress.vuejs.org/plugin/) support, features are implemented in themes
  - [permalink support](https://vuepress.vuejs.org/guide/permalinks.html)
  - `.vitepress/templates`
  - Components in `.vitepress/components` [are not auto registered as global components](https://vuepress.vuejs.org/)
- Differences
  - [Public files](https://vuepress.vuejs.org/guide/assets.html#public-files) that are directly copied to dist root moved from `.vitepress/public/` is `public/`
  - [styling](https://vuepress.vuejs.org/config/#styling) `.vitepress/styles/index.styl` and `.vitepress/styles/palette.styl` is `.vitepress/style.styl`
  - [App Level Enhancements](https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements) API, app enhancements `.vitepress/enhanceApp.js` is `.vitepress/theme/index.js`.

## Markdown

- Missing
  - Support for [toml in frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html#alternative-frontmatter-formats)
  - [details block](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
  - [markdown slots](https://vuepress.vuejs.org/guide/markdown-slot.html)
    guide/using-vue.html#using-components).
  - `~` prefix to explicitly specify a url is a [webpack module request](https://vuepress.vuejs.org/guide/assets.html#relative-urls)

## Site Config

- Missing
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

- Missing
  - [`smoothScroll`](https://vuepress.vuejs.org/theme/default-theme-config.html#smooth-scrolling)
  - [`displayAllHeaders`](https://vuepress.vuejs.org/theme/default-theme-config.html#displaying-header-links-of-all-pages)
  - [`activeHeaderLinks`](https://vuepress.vuejs.org/theme/default-theme-config.html#active-header-links)
  - `sidebarDepth` and `initialOpenGroupIndex` for [sidebar groups](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar-groups)
- Differences
  - `searchMaxSuggestions` is `search.maxSuggestions`
  - `algolia` is `search.algolia`
  - `searchPlaceholder` is `search.placeholder`

# Default Theme

- Missing
  - [`<code-group>` and `<code-block>`](https://vuepress.vuejs.org/theme/default-theme-config.html#code-groups-and-code-blocks)

## Computed Globals

- Missing
  - `$lang`
  - `$localePath`

## Frontmatter Predefined Variables

- Missing
  - `description`
  - [`meta`](https://vuepress.vuejs.org/guide/frontmatter.html#meta)
  - [`metaTitle`](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables)
  - `lang`
  - [`layout`](https://vuepress.vuejs.org/guide/frontmatter.html#layout)
  - [`permalink`](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables)
  - [`canonicalUrl`](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables)

## Frontmatter Default Theme Variables

- Missing
  - `prev`, `next`
  - [`search`](https://vuepress.vuejs.org/guide/frontmatter.html#search)
  - [`tags`](https://vuepress.vuejs.org/guide/frontmatter.html#tags)
  - [`pageClass`](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-page-class)
  - [`layout`](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages)

## siteData

- Missing
  - [`pages`](https://vuepress.vuejs.org/theme/writing-a-theme.html#site-and-page-metadata)

## pageData

- Missing
  - `key`
  - `path`
  - `regularPath`

## Global Components

- Missing
  - [`<Badge>`](https://vuepress.vuejs.org/guide/using-vue.html#badge)
