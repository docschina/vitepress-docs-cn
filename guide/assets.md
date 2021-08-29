# 静态资源处理{#asset-handling}

所有 Markdown 文件都被编译成 Vue 组件，并由 [Vite](https://github.com/vitejs/vite) 处理。你可以，**也应该**使用相对 url 来引用任何资源：

```md
![An image](./image.png)
```

你可以在 markdown 文件，主题的`*.vue`组件，普通样式文件`.css`等中使用绝对公共路径（基于项目根）或相对路径（基于文件系统）来引用静态资源。 后者类似于使用`vue cli`或 webpack 的`file-loader`时的效果.

常见的图像，媒体和字体等文件将被自动检测并作为资源包括进来.

所有引用的资源，包括那些使用绝对路径的资源，都将被复制到生产版本中带有 hash 文件名的 dist 文件夹中。从未引用过的资源将不会被复制。类似于`vue-cli`，小于 4kb 的图像资源将以 base64 编码内联。

所有**静态**路径引用, 包括绝对路径, 都应基于你的工作目录结构.

## 公共文件{#public-files}

有时，你可能需要提供没有在任何 Markdown 文件或主题组件中直接引用的静态资源（例如，站点图标和 PWA 图标）。项目根目录下的`public`目录可以作为通道来提供源代码中从未引用过的静态资源（例如`robots.txt`）， 或者必须保持完全相同的文件名（不进行哈希处理）。

放置在`public`中的资源将原样复制到 dist 目录的根目录。

请注意，你应该使用根绝对路径引用放置在`public`中的文件，例如，`public/icon.png`在源代码中始终应该以`/icon.png`引用。

## 根 URL{#base-url}

如果你的站点将部署到非根 URL上，则需要在`.vitepress/config.js`中设置`base`选项。例如，如果你计划将站点部署到`https://foo.github.io/bar/`，则`base`应设置为`‘/bar/’`（始终以斜杠开头和结尾）。

你所有静态资源的路径都会被自动处理，以适应不同的`base`配置值。例如，如果你在你的 markdown 中对`public`下的资产有一个绝对引用：

```md
![An image](/image-inside-public.png)
```

在这种情况下，当你改变`base`配置值时，你**不**需要更新相关引用。

但是，如果你正在编写一个动态链接资源的主题组件，例如，一个图片的`src`是基于主题配置值的：

```vue
<img :src="theme.logoPath" />
```

在这种情况下，建议用 VitePress 提供的[`withBase` 帮助器](/guide/api.html#withbase)来包装路径：

```vue
<script setup>
import { withBase, useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>
```
