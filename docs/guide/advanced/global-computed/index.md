# 全局计算属性

在 VitePress 中, 一些核心[计算属性](https://v3.vuejs.org/guide/computed.html#computed-properties)可以被默认主题或自定义主题使用. 或者直接在 Markdown 页面使用 vue, 例如使用`$frontmatter.title`来访问在页面的前部部分定义的标题.

## $site

这是您当前正在阅读的站点的`$site`值:

```js
{
  base: '/',
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  head: [],
  locales: {},
  themeConfig: $themeConfig
}
```

## $themeConfig

指`$site.hemeConfig`.

```js
{
  locales: {},
  repo: 'vuejs/vitepress',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: 'Last Updated',
  nav: [...],
  sidebar: { ... }
}
```

## $page

这是您当前正在阅读的页面的`$page`值:

```js
{
  relativePath: 'guide/global-computed.md',
  title: 'Global Computed',
  headers: [
    { level: 2, title: '$site', slug: 'site' },
    { level: 2, title: '$page', slug: '$page' },
    ...
  ],
  frontmatter: $frontmatter,
  lastUpdated: 1606297645000
}
```

## $frontmatter

指`$page.frontmatter`.

```js
{
  title: 'Docs with VitePress',
  editLink: true
}
```

## $lang

当前页面的语言. 默认值: `en-us`.

## $localePath

当前页的区域设置路径前缀. 默认值：`/`.

## $title

当前页面使用的`<title>`标签的值.

## $description

当前页面`<meta name= "description" content= "...">`的值.

## $withBase

辅助方法, 通过添加`.vitepress/config.js`中配置的`base`路径来生成正确的路径. 当你想要链接到[公共文件的基本路径](../../../introduction/asset-handling/#public-files)时, 它很有用.

```html
<img :src="$withBase('/foo.png')" alt="foo" />
```
