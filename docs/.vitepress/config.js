module.exports = {
  head: [
    [
      "link",
      { rel: "icon", href: "/book-mark-fill-24px.png", type: "image/png" },
    ],
    ["meta", { name: "author", content: "cabbage9" }],
    ["meta", { name: "keywords", content: "vitepress 中文 文档" }],
    [
      "meta",
      {
        name: "description",
        content: "VitePress中文文档",
      },
    ],
  ],
  base: "/",
  lang: "zh-CN",
  title: "VitePress",
  // description: "VitePress中文文档",
  themeConfig: {
    repo: "cabbage9/cn-vitepress",
    docsBranch: "master",
    docsDir: "docs",
    // algolia: {
    //   apiKey: "b564625be65feb637a8f776517d5b143",
    //   indexName: "cn-vitepress_NAME",
    // },
    editLinks: true,
    editLinkText: "在帮助我们在GitHub上改善此页",
    lastUpdated: "上次更新",

    nav: [
      { text: "指南", link: "/guide/introduction/what-is-vitepress/" },
      { text: "配置参考", link: "/config/app/basics/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          children: [
            {
              text: "什么是VitePress?",
              link: "/guide/introduction/what-is-vitepress/",
            },
            {
              text: "入门",
              link: "/guide/introduction/getting-started/",
            },
            {
              text: "配置",
              link: "/guide/introduction/configuration/",
            },
            {
              text: "静态资源处理",
              link: "/guide/introduction/asset-handling/",
            },
            {
              text: "Markdown 扩展",
              link: "/guide/introduction/markdown-extensions/",
            },
            {
              text: "在 Markdown 中使用 Vue",
              link: "/guide/introduction/using-vue-in-markdown/",
            },
            {
              text: "部署",
              link: "/guide/introduction/depolying/",
            },
          ],
        },
        {
          text: "进阶",
          children: [
            { text: "Frontmatter", link: "/guide/advanced/frontmatter/" },
            {
              text: "全局计算属性",
              link: "/guide/advanced/global-computed/",
            },
            {
              text: "全局组件",
              link: "/guide/advanced/global-component/",
            },
            { text: "自定义", link: "/guide/advanced/customization/" },
            {
              text: "与 VuePress 的区别",
              link: "/guide/advanced/differences-from-vuepress/",
            },
          ],
        },
      ],
      "/config/": [
        {
          text: "应用配置",
          children: [{ text: "基础", link: "/config/app/basics/" }],
        },
        {
          text: "主题配置",
          children: [
            { text: "主页", link: "/config/theme/homepage/" },
            { text: "Algolia 搜索", link: "/config/theme/algolia-search/" },
            { text: "Carbon 广告", link: "/config/theme/carbon-ads/" },
          ],
        },
      ],
    },
  },
};
