# 入门

本节将帮助您从头开始构建一个基本的 VitePress 文档站点. 如果您已经有了一个现有的项目, 并且希望将文档保存在项目中, 那么从步骤 3 开始.

- **步骤 1:** 创建并切换到一个新目录.

  ```bash
  ✗ mkdir vitepress-starter && cd vitepress-starter
  ```

- **步骤 2:** 使用包管理器进行初始化.

  ```bash
  ✗ yarn init
  ```

- **步骤 3:** 在本地安装 VitePress.

  ```bash
  ✗ yarn add --dev vitepress
  ```

- **步骤 4:** 创建您的第一个文档.

  ```bash
  ✗ mkdir docs && echo '# Hello VitePress' > docs/index.md
  ```

- **步骤 5:** 添加一些脚本到 `package.json`.

  ```json
  {
    "scripts": {
      "docs:dev": "vitepress dev docs",
      "docs:build": "vitepress build docs",
      "docs:serve": "vitepress serve docs"
    }
  }
  ```

- **Step. 6:** 在本地服务器上启动文档站点.

  ```bash
  ✗ yarn docs:dev
  ```

  VitePress 将在 [http://localhost:3000](http://localhost:3000) 启动一个热加载开发服务器.

到目前为止, 您应该已经有了一个基本但功能强大的 VitePress 文档站点.

当您的文档站点成型时, 请务必阅读[部署指南](../depolying/).
