# 配置{#configuration}

在没有任何配置的情况下，页面非常简约，而且用户无法在站点中导航. 为了自定义你的站点，首先在你的 docs 目录中创建一个 `.vitepress` 目录。这是所有 VitePress 专用文件的存放位置。你的项目结构可能是这样的：

```bash
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

配置 VitePress 站点的基本文件是 `.vitepress/config.js`，它应该导出一个 JavaScript 对象:

```js
module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.'
}
```

查看 [配置参考](/config/basics) 获得完整的配置列表.
