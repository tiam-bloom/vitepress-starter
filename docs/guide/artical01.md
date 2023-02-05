---
layout: doc
title: 第一篇文章
editLink: true
lastUpdated: true
aside: true
outline: 2
# 在html头部中添加标签 <meta name="keywords" content="super duper SEO">
head:
  - - meta
    - name: keywords
      content: J's Docs J's Blog
---
# {{ $frontmatter.title }}
[[toc]]


## 引入文件中的代码
```
<<< @/.vitepress/config.js{2}
```

<<< @/.vitepress/config.js{2}

# 在md中使用vue
[more](https://vitepress.vuejs.org/guide/using-vue)
## 指令
```vue
<div style="background-color: #e67e22;" v-for="i of 3">{{ i }}</div>
```
<div style="background-color: #e67e22;" v-for="i of 3">{{ i }}</div>

# 跳转页面
- [跳转到首页](/)
- [跳转到about](/about)
- [跳转到文档首页](/guide/)
