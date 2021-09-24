# Frontmatter

任何包含 YAML frontmatter 块都将由 [gray-matter](https://github.com/jonschlinkert/gray-matter) 处理。frontmatter 必须位于 Markdown 文件的顶部，并且必须采用在三条虚线之间设置的有效 YAML 的形式。示例：

```md
---
title: Docs with VitePress
editLink: true
---
```

在三条虚线之间，你可以设置 [预定义变量](#predefined-variables)，甚至可以创建你自己的自定义变量。这些变量可以通过 <code>$frontmatter</code> 变量使用。

以下是如何在 Markdown 文件中使用它的示例：

```md
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

## 备选 frontmatter 格式 {#alternative-frontmatter-formats}

VitePress 还支持 JSON frontmatter 语法，以大括号开头和结尾：

```json
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```

## 预定义变量 {#predefined-variables}

### title

- Type: `string`
- Default: `h1_title || siteData.title`

当前页面的标题。

### head

- Type: `array`
- Default: `undefined`

指定需要注入的额外头标签：

```yaml
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

### navbar

- Type: `boolean`
- Default: `undefined`

你可以使用 `navbar: false` 禁用特定页面上的导航栏

### sidebar

- Type: `boolean|'auto'`
- Default: `undefined`

你可以使用 `sidebar: auto` 决定在特定页面上显示侧边栏，也可以使用 `sidebar: false` 将其禁用

### editLink

- Type: `boolean`
- Default: `undefined`

定义此页面是否应包含编辑链接。
