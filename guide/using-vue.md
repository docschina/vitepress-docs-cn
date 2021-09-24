---
sidebarDepth: 3
---

# 在 Markdown 中使用 Vue {#using-vue-in-markdown}

在 VitePress 中，每个 markdown 文件都被编译成 HTML，然后作为 Vue 的单文件组件。这意味着你可以在 markdown 中使用任何 Vue 的功能，包含动态模板、Vue 组件，或者编写在 Vue 页面中通过 `<script>` 包裹的逻辑中。

对于 VitePress 使用 Vue 3 的编译器来字典检测和优化纯静态部分非常重要。从 JavaScript 负载中剔除被优化的静态内容并加入到占位节点中，它们可以在客户端合成。简而言之，你只需要为页面上的动态内容负责。

## 模板 {#templating}

### 插值 {#interpolation}

每个 Markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递到 Vite 处理流程中。这意味着你可以在文本中使用 Vue 风格的插值：

**输入**

```md
{{ 1 + 1 }}
```

**输出**

<div class="language-text"><pre><code>{{ 1 + 1 }}</code></pre></div>

### 指令 {#directives}

指令也起作用：

**输入**

```md
<span v-for="i in 3">{{ i }} </span>
```

**输出**

<div class="language-text"><pre><code><span v-for="i in 3">{{ i }} </span></code></pre></div>

### 访问网站和页面数据 {#access-to-site-page-data}

你可以在 `<script>` 块中使用 [`useData`](/guide/api.html#usedata)并暴露给页面。

**输入**

```md
<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<pre>{{ page }}</pre>
```

**输出**

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## Escaping {#escaping}

默认情况下，::: 代码块会自动使用 v-pre 包装，要在内联代码片段或纯文本中显示原生的双大括号或特定的 Vue 语法，需要使用 v-pre 自定义容器对段落进行换行：

**输入**

```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**输出**

::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用组件 {#using-components}

当你需要更加灵活时，VitePress 允许你使用自己的 Vue 组件扩展你的创作工具箱。

### 在 markdown 中导入组件 {#importing-components-in-markdown}

如果你的组件将只在少数几个地方使用，那么推荐的使用方法是在使用它的文件中导入组件。

```md
<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

...
```

### 在主题中注册全局组件 {#registering-global-components-in-the-theme}

如果这些组件将在文档中的多个页面中使用，它们可以在主题中全局注册（或者作为扩展默认 VitePress 主题的一部分）。详情请查看[主题定制指南](./theming.md)。

在 `.vitepress/Theme/index.js` 文件中，`enhanceApp` 函数接收 Vue 应用实例，因此你可以像在常规 Vue 应用中一样[注册组件](https://v3.cn.vuejs.org/guide/component-registration.html#component-registration)。

```js
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
```

稍后在你的 markdown 文件中，该组件可以在内容之间交错使用。

```md
# Vue Click Away

<VueClickAwayExample />
```

::: warning IMPORTANT
确保自定义组件的名称包含连字符或采用 PascalCase 格式。否则会被当作内联元素包装在一个 `p` 标签中，因为 `p` 不允许在里面放置内联元素，所以会导致 hydration 不匹配。
:::

### 在 headers 中使用组件 <ComponentInHeader /> {#using-components-in-headers}

你可以在标题中使用 Vue 组件，但请注意以下语法之间的区别:

| Markdown                                                | Output HTML                               | Parsed Header |
| ------------------------------------------------------- | ----------------------------------------- | ------------- |
| <pre v-pre><code> # text &lt;Tag/&gt; </code></pre>     | `<h1>text <Tag/></h1>`                    | `text`        |
| <pre v-pre><code> # text \`&lt;Tag/&gt;\` </code></pre> | `<h1>text <code>&lt;Tag/&gt;</code></h1>` | `text <Tag/>` |

由 `code` 包装的 HTML 将按原样显示，只有**没有**包装的 HTML 才会被 Vue 解析。

::: tip
输出的 HTML 由 [markdown-it](https://github.com/markdown-it/markdown-it) 完成，而解析的 headers 由 VitePress 处理（同时用于侧栏和文档标题）。
:::

## 使用 CSS 预处理器 {#using-css-pre-processors}

VitePress 对 CSS 预处理器有[内置支持](https://vitejs.dev/guide/features.html#css-pre-processors): `.scss`，`.sass`，`.less`，`.styl` 和 `.stylus` 文件，不需要为它们安装特定于 Vite 的插件，但必须安装相应的预处理器：

```
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

然后你可以在 Markdown 和主题组件中这样使用：

```vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

## Script & Style Hoisting {#using-vue-in-markdown-1}

有时你可能只需要对当前页面应用一些 JavaScript 或 CSS，在这些情况下, 你可以直接在 Markdown 文件中编写根级别的 `script` 或 `style` 块，这些会在编译后的 HTML 中 hoisting，并作为生成的 Vue 单文件组件的 `script` 和 `style` 块使用：

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
import ComponentInHeader from '../components/ComponentInHeader.vue'

export default {
  props: ['slot-key'],
  components: { ComponentInHeader },
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = 'This is rendered by inline script and styled by inline CSS'
  }
}
</script>

## 内置组件 {#built-in-components}

VitePress 提供了 `ClientOnly`，`Outbound Link` 等内置 Vue 组件，详情请查看 [全局组件指南](./global-component.md)。

**另请参阅：**

- [在 headers 中使用组件](#using-components-in-headers)

## Browser API 访问限制 {#browser-api-access-restrictions}

因为在生成静态构建时，VitePress 应用程序是在 Node.js 中服务器渲染的，所以任何 Vue 的使用都必须符合 [通用代码要求](https://ssr.vuejs.org/zh/guide/universal.html)。简而言之，确保只在 `beforeMount` 或 `mounted` 钩子中访问 Browser / DOM APIs。

如果你使用或演示的组件是不友好的 SSR (例如，包含自定义指令)，可以将它们包装在 `ClientOnly` 组件中。

```md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

注意，这不会修复 **导入时** 访问 Browser APIs 的组件或库，假定要在导入时使用浏览器环境的代码，你需要在适当的生命周期钩子中动态地导入它们：

```vue
<script>
export default {
  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      // use code
    })
  }
}
</script>
```

如果你的模块中是以 `export default` 声明的 Vue 组件，就可以动态注册：

```vue
<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```

**另请参阅：**

- [Vue.js > 动态组件 & 异步组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)
