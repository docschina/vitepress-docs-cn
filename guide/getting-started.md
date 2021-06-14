# 开始 {#getting-started}

本章节将帮助你从零开始构建一个基础的 VitePress 文档站点、如果你想改造已有的项目，并希望保留原文档，请从第 3 步开始操作。

- **步骤 1：** 创建一个新目录，并进入该目录

  ```bash
  $ mkdir vitepress-starter && cd vitepress-starter
  ```

- **步骤 2：** 使用你常用的包管理工具初始化 package.json

  ```bash
  $ yarn init
  ```

- **步骤 3：** 本地安装 VitePress

  ```bash
  $ yarn add --dev vitepress
  ```

- **步骤 4：** 创建文档

  ```bash
  $ mkdir docs && echo '# Hello VitePress' > docs/index.md
  ```

- **步骤 5：** 在 `package.json` 中添加 scripts 命令

  ```json
  {
    "scripts": {
      "docs:dev": "vitepress dev docs",
      "docs:build": "vitepress build docs",
      "docs:serve": "vitepress serve docs"
    }
  }
  ```

- **步骤 6：** 在本地启动文档站点

  ```bash
  $ yarn docs:dev
  ```

  VitePress 将启动一个热重载的开发服务器，其地址是 http://localhost:3000。

此刻，你已经拥有了一个简单但功能强大的 VitePress 文档站点。

当你的文档站点成型时，请务必阅读 [部署指南](./deploy)。
