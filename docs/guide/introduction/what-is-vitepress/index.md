# 什么是 VitePress?

::: warning 警告
VitePress 是早期 WIP! 目前的重点是使 Vite 稳定和功能完善. 目前还不建议将此用于任何重要的场景.
:::

VitePress 是 [VuePress](https://vuepress.vuejs.org/) 的小兄弟, 建立在 [Vite](https://github.com/vitejs/vite) 之上.

## 动机

我们喜欢 VuePress v1, 但是由于构建在 Webpack 之上, 对于一个只有几个页面的简单文档站点来说, 启动开发服务器所花费的时间简直令人难以忍受. 即使是 HMR 更新也可能需要数秒才能反映到浏览器中!

作为参考, [Compostion API RFC repo](https://github.com/vuejs/composition-api-rfc) 只有两个页面, 但启动服务器需要 4 秒, 任何编辑都需要近 2 秒才能在浏览器中反映出来.

从根本上说, 这是因为 VuePress v1 在本质上是一个 Webpack 应用程序. 即使只有两个页面, 它也是一个完整的需要编译的 Webpack 项目(包括所有主题源文件). 当项目有很多页面时, 情况就更糟了, 在服务器显示任何内容之前, 每个页面都必须先完全编译!

顺便说一句, Vite 很好地解决了这些问题: 服务器几乎立即启动, 按需编译所服务的页面, 以及快速的 HMR. 另外, 随着时间的推移, 我注意到 VuePress v1 中还有一些额外的设计问题, 但由于需要大量的重构, 一直没有时间来修复.

现在, 有了 Vite 和 Vue 3, 是时候重新考虑 "Vue 驱动的静态站点生成器" 到底可以是什么了.

## 相较于 VuePress v1 的改进

与 VuePress v1 相比, VitePress 有几个改进...

### 使用 Vue 3

利用 Vue 3 改进的模板静态分析来尽可能严格地约束静态内容. 静态内容以字符串文本的形式发送, 而不是以 JavaScript 渲染函数代码的形式, 因此 JS 负载解析起来开销更小, 整合起来也变得更快.

注意: 在应用优化的同时, 仍然允许用户在标记内容中自由混合 Vue 组件, 编译器会自动为您进行静态/动态分离, 您无需考虑这一点.

### 底层使用 Vite

- 更快的开发服务器启动
- 更快的热更新
- 更快的构建(内部使用 Rollup)

### 页面更轻量化

- Vue 3 摇树 + Rollup 代码拆分
- 不为每个请求的每个页面提供元数据. 这样可以将页面负担从总页面中分离出来. 只发送当前页的元数据. 客户端导航同时获取新页面的组件和元数据.
- 不使用 `vue-router`, 因为 VitePress 的需求非常简单和具体, 使用一个简单的自定义路由器(低于 200 LOC)代替.
- (WIP) i18n 语言环境数据也应按需获取.

## 其他差异

VitePress 更指令化, 更少的配置: VitePress 的目标是降低当前 VuePress 的复杂性, 并从其贯彻极简主义.

VitePress 面向未来: VitePress 只针对支持本地 ES 模块导入的浏览器. 它鼓励在没有转换的情况下使用原生 JavaScript, 并鼓励使用 CSS 变量进行主题化.

## 这会成为未来的下一个 VuePress 吗?

我们已经有了 [vuepress-next](https://github.com/vuepress/vuepress-next), 这将是 VuePress 的下一个主要版本. 它在 VuePress v1 的基础上做了很多改进, 现在也支持 Vite.

VitePress 与当前的 VuePress 生态系统(主要是主题和插件)不兼容. 总体思路是, VitePress 将拥有一个大大简化的主题 API(更喜欢 JavaScript API, 而不是文件布局约定), 而且很可能没有插件(所有定制都是在主题中完成的).
