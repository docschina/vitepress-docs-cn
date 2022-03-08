# 配置 {#configuration}

## 概述 {#overview}

在没有任何配置的情况下，页面非常简约，而且用户无法在站点中导航。为了自定义你的站点，首先在你的 docs 目录中创建一个 `.vitepress` 目录。这是所有 VitePress 专用文件的存放位置。你的项目结构可能是这样的：

```bash
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

配置 VitePress 站点的基本文件是 `.vitepress/config.js`，它应该导出一个 JavaScript 对象：

```js
module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.'
}
```

查看 [配置参考](/config/basics) 获得完整的配置列表。

## 配置智能提示 {#config-intellisense}

由于 VitePress 附带 TypeScript 类型，你可以利用你的 IDE 的智能提示与 jsdoc 类型提示：

```js
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

另外，你也可以使用 `defineConfig` 辅助函数，它可以在不需要 jsdoc 注释的情况下提供智能分析。

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...
})
```

VitePress 也直接支持 TS 配置文件。你也可以使用 `.vitepress/config.ts` 与 `defineConfig` 辅助函数。

## 类型化主题配置 {#typed-theme-config}

默认情况下，`defineConfig` 辅助函数利用默认主题的配置类型。

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    // Type is `DefaultTheme.Config`
  }
})
```

如果你使用自定义主题，并希望对主题配置进行类型检查，你需要使用 `defineConfigWithTheme` 来代替 `defineConfig`，并通过一个泛型参数传递自定义主题的配置类型。

```js
import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from 'your-theme'

export default defineConfigWithTheme<ThemeConfig>({
  themeConfig: {
    // Type is `ThemeConfig`
  }
})
```