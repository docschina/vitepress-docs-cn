# 静态资源处理

所有 Markdown 文件都被编译成 Vue 组件, 并由 [Vite](https://github.com/vitejs/vite) 处理. 你可以**也应该**使用相对 url 引用任何资源:

```md
![An image](./image.png)
```

您可以使用绝对公共路径(基于项目根)或相对路径(基于文件系统)引用文件中的静态资产, 主题中的`*.vue`组件, 样式和普通的`.css`文件. 后者类似于使用`vue cli`或 webpack 的`file-loader`时的行为.

常见的图像, 媒体和字体文件类型将被自动检测并作为资源包括进来.

所有引用的资源, 包括那些使用绝对路径的资源, 都将被复制到生产版本中带有 hash 文件名的 dist 文件夹中. 从未引用过的资产将不会被复制. 类似于`vue-cli`, 小于 4kb 的图像资源将以 base64 内联.

所有**静态**路径引用, 包括绝对路径, 都应基于您的工作目录结构.

## 公共文件

有时, 您可能需要提供没有在任何 Markdown 或主题组件中直接引用的静态资源(例如, 图标和 PWA 图标). 项目根目录下的`public`目录可以作为转换, 提供源代码中从未引用过的静态资产(例如`robots.txt`), 或者必须保持完全相同的文件名(不进行哈希处理).

放置在`public`中的资源将原样复制到 dist 目录的根目录.

请注意, 您应该使用根绝对路径引用放置在`public`中的文件, 例如, `public/icon.png`在源代码中应该始终引用为`/icon.png`.

## 根 URL

如果您的站点部署到非根 URL, 则需要在`.vitepress/config.js`中设置`base`选项. 例如, 如果您计划将站点部署到`https://foo.github.io/bar/`, 则`base`应设置为`‘/bar/’`(始终以斜杠开头和结尾).

有了根 URL, 要引用`public`中的镜像, 必须使用`/bar/image.png`这样的 URL. 但如果你决定更换根 URL, 这是容易出错的. 为了帮助实现这一点, VitePress 提供了一个内置的 helper`$with Base`(注入到 Vue 的原型上), 它可以生成正确的路径:

```html
<img :src="$withBase('/foo.png')" alt="foo" />
```

注意, 您不仅可以在主题组件中使用上述语法, 也可以在您的 Markdown 文件中使用.
