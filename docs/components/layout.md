---
title: 布局 - Layout
---

# 布局 - Layout

用于布局的容器组件，方便快速搭建页面的基本结构：
\<ik-layout> ：外层容器。当子元素中包含 \<ik-aside>时，全部子元素会水平左右排列，否则会垂直上下排列。

\<ik-header> ：顶栏容器。

\<ik-aside> ：侧边栏容器。

\<ik-main> ：主要区域容器。

\<ik-footer> ：底栏容器
::: tip 提示
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外， \<ik-layout> 的子元素只能是后四者，后四者的父元素也只能是 \<ik-layout> 。
:::

## 常见页面布局

::: demo

```vue
<template>
  <div>
    <ik-layout>
      <ik-header>Header</ik-header>
      <ik-main>Main</ik-main>
    </ik-layout>

    <ik-layout>
      <ik-header>Header</ik-header>
      <ik-main>Main</ik-main>
      <ik-footer>Footer</ik-footer>
    </ik-layout>

    <ik-layout>
      <ik-aside width="200px">Aside</ik-aside>
      <ik-main>Main</ik-main>
    </ik-layout>

    <ik-layout>
      <ik-header>Header</ik-header>
      <ik-layout>
        <ik-aside width="200px">Aside</ik-aside>
        <ik-main>Main</ik-main>
      </ik-layout>
    </ik-layout>

    <ik-layout>
      <ik-header>Header</ik-header>
      <ik-layout>
        <ik-aside width="200px">Aside</ik-aside>
        <ik-layout>
          <ik-main>Main</ik-main>
          <ik-footer>Footer</ik-footer>
        </ik-layout>
      </ik-layout>
    </ik-layout>

    <ik-layout>
      <ik-aside width="200px">Aside</ik-aside>
      <ik-layout>
        <ik-header>Header</ik-header>
        <ik-main>Main</ik-main>
      </ik-layout>
    </ik-layout>
    <ik-layout>
      <ik-aside width="200px">Aside</ik-aside>
      <ik-layout>
        <ik-header>Header</ik-header>
        <ik-main>Main</ik-main>
        <ik-footer>Footer</ik-footer>
      </ik-layout>
    </ik-layout>
  </div>
</template>
<style>
.ik-header,
.ik-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.ik-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.ik-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .ik-layout {
  margin-bottom: 40px;
}

.ik-layout:nth-child(5) .ik-aside,
.ik-layout:nth-child(6) .ik-aside {
  line-height: 260px;
}

.ik-layout:nth-child(7) .ik-aside {
  line-height: 320px;
}
</style>
```

:::

### Header Attributes

| 属性名 | 类型   | 默认值 | 可选值 | 说明     |
| :----- | :----- | :----- | :----- | :------- |
| height | String | 60px   |       | 顶栏高度 |

### Aside Attributes

| 属性名 | 类型   | 默认值 | 可选值 | 说明     |
| :----- | :----- | :----- | :----- | :------- |
| width  | String | 60px   |       | 顶栏高度 |

### Footer Attributes

| 属性名 | 类型   | 默认值 | 可选值 | 说明     |
| :----- | :----- | :----- | :----- | :------- |
| height | String | 60px   |       | 顶栏高度 |
