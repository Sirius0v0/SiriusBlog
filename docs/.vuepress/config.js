const themeConfig = require("./config/themeConfig.js");
const plugins = require("./config/plugins.js");
const head = require("./config/head.js")

module.exports = {
    title: "Sirius' blog",
    description: 'Just playing around',
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

    theme: 'vdoing', // 使用npm包主题
    // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

    // 主题配置
    themeConfig,

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head,

    // 插件配置
    plugins,
}