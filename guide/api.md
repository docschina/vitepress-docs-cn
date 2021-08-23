# API 参考 {#api-reference}

## 辅助方法 {#helper-methods}

以下方法通常用于自定义主题 Vue 组件，可以从 `vitepress` 全局导入。但是，因为 markdown 文件都会被编译成 Vue 单文件组件，所以它们也可以在 `.md` 文件中使用。

以 `use*` 开头的方法表明它是一个 [Vue 3 组合式 API](https://v3.vuejs.org/guide/composition-api-introduction.html) 函数，只能在 `setup()` 或 `<script setup>` 中使用。

### `useData`

返回特定页面数据。返回的对象类型如下：

```ts
interface VitePressData {
  site: Ref<SiteData>
  page: Ref<PageData>
  theme: Ref<any> // themeConfig from .vitepress/config.js
  frontmatter: Ref<PageData['frontmatter']>
  title: Ref<string>
  description: Ref<string>
  lang: Ref<string>
  localePath: Ref<string>
}
```

**例子：**

```vue
<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <h1>{{ theme.heroText }}</h1>
</template>
```

### `useRoute`

返回具有以下类型的当前路由对象：

```ts
interface Route {
  path: string
  data: PageData
  component: Component | null
}
```

### `useRouter`

返回 VitePress 路由实例，以便你以编程的方式导航到另一个页面。

```ts
interface Router {
  route: Route
  go: (href?: string) => Promise<void>
}
```

### `withBase`

- **Type**: `(path: string) => string`

  将已配置的 [`base`](/config/basics.html#base) 追加到给定的 URL 路径。参见 [根 URL](/guide/assets.html#base-url)。

## 全局组件 {#global-components}

VitePress 只有很少的内置组件可以在全局范围内使用。你可以在你的 markdown 或自定义主题配置中使用这些组件。

### `<Content/>`

`<Content/>` 组件呈现渲染出来的 markdown 内容。[这在创建您自己的主题时很有用](https://vitepress.vuejs.org/guide/customization.html)。

```vue
<template>
  <h1>Custom Layout!</h1>
  <Content />
</template>
```

### `<ClientOnly/>`

`<ClientOnly/>` 组件仅在客户端渲染其插槽。

因为在生成静态构建时，VitePress 应用程序是在 Node.js 中服务器渲染呈现的，所以任何 Vue 的使用都必须符合通用代码要求。简而言之，确保仅在 beforeMount 或 mounted 钩子中访问 Browser / DOM APIs。

如果您使用或演示的组件不是 SSR 友好的（例如，包含自定义指令），您可以将它们包装在 `<ClientOnly/>` 组件中。

```html
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```
