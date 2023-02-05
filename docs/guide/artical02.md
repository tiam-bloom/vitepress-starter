---
layout: doc
title: md扩展语法
editLink: true
---

# {{ $frontmatter.title }}


## 符号表情
- `:tada:` =>  :tada:
- `:100:`  =>  :100:
- [更多表情↗](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 状态提示框
语法:
````md
::: [tip|info|warning|danger|detail] [标题]
This is a tip
:::
````

::: tip 小提示
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

### 可折叠
::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

::: details
This is a details block.
:::


## 重点高亮代码行
- [more...](https://vitepress.vuejs.org/guide/markdown#line-highlighting-in-code-blocks)
- 指定一行
````md
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
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```


指定范围
````md
```js{3-5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````
```js{3-5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
## 代码备注 `// ![code xxx]`

[参考](https://vitepress.vuejs.org/guide/markdown#focus-in-code-blocks)
### 代码高亮
- 输入: 
````md
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]  (将[!code  hl] 之间的空格减为一个后生效)
    }
  }
}
```
````
- 渲染: 
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```
### 聚焦代码
- `// [!code focus]`
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```
## 加减代码
- `// [!code --]`
- `// [!code --]`
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```
## 代码错误提示
- ` // [!code error]`
- `// [!code warning]`
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

::: tip 小提示
注意`[!code ++]` 之间的空格只有一个, 否则会失效
:::


## 代码标签页
- 输入: 
````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```
:::
````

- 渲染: 

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

## 引入其他md文件中的内容

- 语法: `<!--@include: [文件路径]-->`
- [跳转文档主页](./index)
- 渲染: 
 
<!--@include: ./index.md-->