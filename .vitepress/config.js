module.exports = {
  lang: 'zh-Hans',
  title: 'VitePress',
  description: 'Vite 与 Vue 驱动的静态站点生成器',

  themeConfig: {
    repo: 'docschina/vitepress-docs-cn',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页面',
    lastUpdated: '上次更新',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    carbonAds: {
      carbon: 'CEBDT27Y',
      custom: 'CKYD62QM',
      placement: 'vuejsorg'
    },

    nav: [
      { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '配置参考',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: '发行说明',
        link: 'https://github.com/vuejs/vitepress/releases'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  },

  markdown: {
    anchor: {
      renderPermalink: require('./plugins/render-perma-link')
    },
    config: (md) => {
      md.use(require('./plugins/markdown-it-custom-anchor'))
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        { text: '什么是 VitePress？', link: '/' },
        { text: '入门', link: '/guide/getting-started' },
        { text: '配置', link: '/guide/configuration' },
        { text: '静态资源处理', link: '/guide/assets' },
        { text: 'Markdown 扩展', link: '/guide/markdown' },
        { text: '在 Markdown 中使用 Vue', link: '/guide/using-vue' },
        { text: '部署', link: '/guide/deploy' }
      ]
    },
    {
      text: '进阶',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: '主题', link: '/guide/theming' },
        { text: 'API 参考', link: '/guide/api' },
        {
          text: '与 VuePress 的区别',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: '应用设置',
      children: [{ text: '基础知识', link: '/config/basics' }]
    },
    {
      text: '主题设置',
      children: [
        { text: '首页', link: '/config/homepage' },
        { text: 'Algolia 搜索', link: '/config/algolia-search' },
        { text: 'Carbon 广告', link: '/config/carbon-ads' }
      ]
    }
  ]
}
