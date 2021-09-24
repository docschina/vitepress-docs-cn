# 全局组件 {#global-component}

VitePress 只有很少的内置组件可以在全局范围内使用。你可以在 Markdown 或自定义主题配置中使用这些组件。

## Content {#content}

`Content` 组件渲染呈现的 Markdown 内容，在 [创建你自己的 theme](https://vitepress.vuejs.org/guide/customization.html) 时很有用。

```vue
<template>
  <h1>Custom Layout!</h1>
  <Content />
</template>
```

## ClientOnly {#client-only}

`ClientOnly` 组件仅在客户端渲染其 slot。

因为在生成静态构建时，VitePress 应用程序是在 Node.js 中服务端渲染的，所以任何 Vue 的使用都必须符合通用代码要求。简而言之，确保在 mount 或挂载钩子之前只访问 Browser / DOM APIs。

如果你使用或演示的组件是不友好的 SSR (例如，包含自定义指令)，可以将它们包装在 `ClientOnly` 组件中。

```html
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```

## OutboundLink {#outbound-link}

`OutboundLink` 指示符用于表示外部链接。在 VitePress 中，每个外部链接都紧跟着这个组件。
