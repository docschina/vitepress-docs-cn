# 主题配置：Algolia Search {#theme-config-algolia-search}

`themeConfig.algolia` 选项允许您使用 [Algolia DocSearch](https://docsearch.algolia.com/)。要启用它，你至少需要提供 apiKey 和 indexName：

```js
module.exports = {
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    }
  }
}
```

有关更多选项，请查看 [Algolia DocSearch‘s documentation](https://docsearch.algolia.com/docs/behavior)。您可以将任何额外的选项与其他选项一起传递，例如传递 `searchParameters`：

```js
module.exports = {
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
      searchParameters: {
        facetFilters: ['tags:guide,api']
      }
    }
  }
}
```

## 国际化（i18n） {#internationalization-i18n}

如果您的文档中有多个语言环境，并且您在 `themeconfig` 中定义了一个 `locales` 对象：

```js
module.exports = {
  themeConfig: {
    locales: {
      // ...
    },
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    }
  }
}
```

VitePress 会自动在 `searchParams.facetFilter` 数组中添加一个语言值正确的 `language` _facetFilter_。**请确保您的 DocSearch 配置也配置正确**通过添加`language`作为 faceting\_ 的 \_custom 属性，并根据 `<html>` 元素的 `lang` 属性进行设置。 以下是 DocSearch 配置的一个简短示例：

```json
{
  "index_name": "<the name of your library>",
  "start_urls": [
    {
      "url": "<your deployed url>"
    }
  ],
  "stop_urls": ["(?:(?<!\\.html)(?<!/))$"],
  "selectors": {
    "lvl0": {
      "selector": ".sidebar > .sidebar-links > .sidebar-link .sidebar-link-item.active",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": ".content h1",
    "lvl2": ".content h2",
    "lvl3": ".content h3",
    "lvl4": ".content h4",
    "lvl5": ".content h5",
    "lvl6": ".content p, .content li",
    "text": ".content [class^=language-]",
    "language": {
      "selector": "/html/@lang",
      "type": "xpath",
      "global": true,
      "default_value": "en-US"
    }
  },
  "custom_settings": {
    "attributesForFaceting": ["language"]
  }
}
```

您可以查看 [Vue Router 使用的 DocSearch 配置](https://github.com/algolia/docsearch-configs/blob/master/configs/next_router_vuejs.json) 以获得完整的示例。
