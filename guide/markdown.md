---
sidebarDepth: 3
---

# Markdown 扩展 {#markdown-extensions}

## 标题锚点 {#header-anchors}

标题会自动应用锚点链接。可以使用 `markdown.anchor` 选项配置锚点的渲染。

## 链接 {#links}

### 内部链接 {#internal-links}

内部链路转换为 router link 以用于 SPA 导航。另外，每个子目录包含的 `index.md` 都会自动转换为 `index.html`，并有对应的 URL `/`。

例如，给定以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

且假设你在 `foo/one.md` 中：

```md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extention -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

### 页面后缀 {#page-suffix}

默认生成的页面和内部链接后缀为 `.html`。

### 外部链接 {#external-links}

外部链接自动配置 `target="_blank" rel="noopener noferrer"`：

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)

## Frontmatter {#frontmatter}

[YAML frontmatter](https://jekyllrb.com/docs/frontmatter/) 支持开箱即用：

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

该数据对页面的其余部分以及所有自定义和主题化组件都可用。

查看 [Frontmatter](./frontmatter.md) 获取更多细节。

## GitHub 风格 表格 {#github-style-tables}

**输入**

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Emoji :tada:

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

[可用的表情符号列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)。

## 目录 {#table-of-contents}

**输入**

```
[[toc]]
```

**输出**

[[toc]]

可以使用 `markdown.toc` 选项配置目录的渲染。

## 自定义容器 {#custom-containers}

自定义容器可以通过它们的类型，标题和内容来定义。

### 默认标题 {#default-title}

**输入**

```md
::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

**输出**

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### 自定义标题 {#custom-title}

**输入**

```md
::: danger STOP
Danger zone, do not proceed
:::
```

**输出**

::: danger STOP
Danger zone, do not proceed
:::

## 代码块中的语法高亮显示 {#syntax-highlighting-in-code-blocks}

VitePress 使用 [Prism](https://prismjs.com/) 突出显示 Markdown 代码块中的语言语法，使用彩色文本。Prism 支持多种编程语言。你所需要做的就是在代码块的开头的反勾号后面添加一个有效的语言别名：

**输入**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**输出**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

**输入**

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

Prism 的网站上提供了 [有效语言列表](https://prismjs.com/#languages-list)。

## 代码块中的行高亮显示 {#line-highlighting-in-code-blocks}

**输入**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除单行外，你还可以指定多个单行，范围或同时指定这两种：

- 行范围：例如 `{5-8}`, `{3-10}`, `{10-17}`
- 多行：例如 `{4,7,9}`
- 行范围和单行：例如 `{4,7-13,16,23-27,40}`

**输入**

````
```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
````

**输出**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## 行号 {#line-numbers}

你可以通过配置启用每个代码块的行号：

```js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

- Demo:

<picture>
  <source srcset="../images/line-numbers-mobile.gif" media="(max-width: 719px)">
  <img class="line-numbers-mobile-snap" src="../images/line-numbers-mobile.gif" alt="Image">
</picture>

<picture>
  <source srcset="../images/line-numbers-desktop.png" media="(min-width: 720px)">
  <img class="line-numbers-desktop-snap" src="../images/line-numbers-desktop.png" alt="Image">
</picture>

<style>
  .line-numbers-mobile-snap {
    margin: 0 -1.5rem;
    width: 100vw;
    max-width: none !important;
  }

  .line-numbers-desktop-snap {
    display: none;
  }

  @media (min-width:  720px) {
    .line-numbers-mobile-snap {
       display: none;
    }

    .line-numbers-desktop-snap {
      display: block;
    }
  }
</style>

## 导入代码片段 {#import-code-snippets}

你可以通过以下语法从现有文件中导入代码片段：

```md
<<< @/filepath
```

它还支持 [行高亮显示](#line-highlighting-in-code-blocks)：

```md
<<< @/filepath{highlightLines}
```

**输入**

```md
<<< @/snippets/snippet.js{2}
```

**代码文件**

<!--lint disable strong-marker-->

<<< @/snippets/snippet.js

<!--lint enable strong-marker-->

**输出**

<!--lint disable strong-marker-->

<<< @/snippets/snippet.js{2}

<!--lint enable strong-marker-->

::: tip
`@` 的值对应于 `process.cwd()`。默认情况下，它是 VitePress 项目的根目录，除非配置了 `srcDir`。
:::

你还可以使用 [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) 来仅包括代码文件的相应部分。你可以在文件路径后的 `#` 后面提供自定义的范围名称(默认为 `snippet`)：

**输入**

```md
<<< @/snippets/snippet-with-region.js{1}
```

**代码文件**

<!--lint disable strong-marker-->

<<< @/snippets/snippet-with-region.js

<!--lint enable strong-marker-->

**输出**

<!--lint disable strong-marker-->

<<< @/snippets/snippet-with-region.js#snippet{1}

<!--lint enable strong-marker-->

## 进阶配置 {#advanced-configuration}

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 渲染器。上面的许多扩展都是通过自定义插件实现的。你可以通过 `.vitepress/config.js` 中的 `markdown` 选项进一步自定义 `markdown-it` 实例：

```js
const anchor = require('markdown-it-anchor')

module.exports = {
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#permalinks
    anchor: {
      permalink: anchor.permalink.headerLink()
    },

    // options for markdown-it-table-of-contents
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
