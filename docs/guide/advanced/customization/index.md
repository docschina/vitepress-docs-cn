# 自定义

您可以通过添加`.vitepress/heme/index.js`文件来开发您的自定义主题.

```bash
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.js
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

在`.vitepress/heme/index.js`中, 您必须导出主题对象并注册您自己的主题布局. 假设您有自己的`Layout`组件, 如下所示.

```vue
<!-- .vitepress/theme/Layout.vue -->
<template>
  <h1>Custom Layout!</h1>
  <Content /><!-- make sure to include markdown outlet -->
</template>
```

然后将其包含在`.vitepress/heme/index.js`中.

```js
// .vitepress/theme/index.js
import Layout from "./Layout.vue";

export default {
  Layout,
  NotFound: () => "custom 404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
};
```

如果您想扩展默认主题, 可以从`vitepress/theme`导入.

```js
// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
};
```
