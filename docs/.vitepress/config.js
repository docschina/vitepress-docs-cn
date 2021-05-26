const { getSidebar } = require("../../scripts/utils");

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  head: [
    // ["link", { rel: "icon", href: "/logo.png", type: "image/png" }],
    ["meta", { name: "author", content: "cabbage9" }],
    // 设置 描述 和 关键词
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

    editLinks: true,
    editLinkText: "在帮助我们在GitHub上改善此页",
    lastUpdated: "上次更新",

    nav: [{ text: "配置参考", link: "/config/app/app" }],

    sidebar: {
      "/config/": [
        {
          text: "应用配置",
          children: [{ text: "基础", link: "/config/app/basics" }],
        },
        {
          text: "主题配置",
          children: [
            { text: "主页", link: "/config/theme/homepage" },
            { text: "Algolia 搜索", link: "/config/theme/algolia-search" },
            { text: "Carbon 广告", link: "/config/theme/carbon-ads" },
          ],
        },
      ],
    },
  },
};
