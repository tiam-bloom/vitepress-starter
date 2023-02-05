const anchor = require('markdown-it-anchor')

module.exports = {
  title: "J's Docs",
  // <meta name="description" content="Just playing around.">
  description: "Just playing around.",
  cleanUrls: true,
  // 基础地址
  base: "/",
  head: [
    // <link rel="icon" href="/logo.png" crossorigin />  浏览器标签页图标
    ["link", { rel: "icon", href: "/logo.png", crossorigin: "" }],
  ],
  // 最后更新
  lastUpdated: true,
  lastUpdatedText: "Updated Date",
  // 编辑链接
  editLink: {
    pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    text: "Edit this page on GitHub",
  },
  // 代码主题 https://vscodethemes.com/
  // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
  markdown: {
    // 锚点
    // anchor: {
    //   permalink: anchor.permalink.headerLink()
    // },
    // 目录显示等级 h1-h2
    toc: { level: [1, 2] },
    // 安装其他插件
    config: (md) => {
      // use more markdown-it plugins!
      // md.use(require('markdown-it-anchor'))
    },
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    outline: [2, 4], // 识别<h2>-<h4>的标题
    outlineTitle: "Catalogue", // aside第一行显示的文本
    logo: "/logo.png",
    // 导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },  // 跳转 /guide/index.md
      {
        text: "Blog↗",
        link: "https://yujing.fit",
      },
      { text: "Navigation↗", link: "https://go.code2022.top" },
      {
        text: "Other",
        items: [
          { text: "Notepad", link: "https://notepad.yujing.fit" },
          { text: "Music", link: "https://music.code2022.top" },
          { text: "README", link: "http://resume.yujing.fit" },
        ],
      },
      { text: "About", link: "/about" },
    ],
    // 文档侧边栏
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          collapsed: true,  // 显示可折叠按钮
          items: [
            { text: "artical01", link: "/guide/artical01" },
            { text: "artical02", link: "/guide/artical02" },
          ],
        },
        {
          text: "2023",
          collapsed: true,  
          items: [
            { text: "2023-11", link: "/guide/2023" },
          ],
        },
      ],
      // 在think文件夹下的侧边栏
      "/think/": [
        {
          text: "Think",
          items: [
            { text: "artical01", link: "/guide/artical01" },
            { text: "artical02", link: "/guide/artical02" },
          ],
        },
      ],
    },
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present by Tiam",
    },
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/tiam-bloom" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>',
        },
        link: "https://blog.csdn.net/qq_50969362?type=blog",
      },
    ],
  },
};
