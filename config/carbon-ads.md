# 主题配置：Carbon Ads {#theme-config-carbon-ads}

VitePress 内置了对 [Carbon Ads](https://www.carbonads.net) 的原生支持。通过在配置中定义 Carbon Ads 凭证，VitePress 将在页面上显示广告。

```js
module.exports = {
  themeConfig: {
    carbonAds: {
      carbon: 'your-carbon-key',
      custom: 'your-carbon-custom',
      placement: 'your-carbon-placement',
    },
  },
};
```
