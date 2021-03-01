---
title: 栅栏式布局 - Grid
---

# 栅栏式布局 - Grid

通过基础的 24 分栏，迅速简便地创建布局。
::: tip 提示
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。
:::

## 基础布局

使用单一分栏创建基础的栅格布局。
::: demo 通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```vue
<template>
  <ik-row>
    <ik-col :span="24"><div class="grid-content bg-purple-dark"></div></ik-col>
  </ik-row>
  <ik-row>
    <ik-col :span="12"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="12"><div class="grid-content bg-purple-light"></div></ik-col>
  </ik-row>
  <ik-row>
    <ik-col :span="8"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="8"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="8"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
  <ik-row>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
  </ik-row>
  <ik-row>
    <ik-col :span="4"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="4"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="4"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="4"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="4"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="4"><div class="grid-content bg-purple-light"></div></ik-col>
  </ik-row>
</template>
<style>
.ik-row {
  margin-bottom: 20px;
}

.ik-row:last-child {
  margin-bottom: 0;
}
.ik-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

# 分栏间隔

分栏之间存在间隔。

::: demo Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```vue
<template>
  <ik-row gutter="20">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
</template>
<style>
.ik-row {
  margin-bottom: 20px;
}
.ik-row:last-child {
  margin-bottom: 0;
}
.ik-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

# 对齐方式

通过 justify 布局来对分栏进行灵活的对齐。

::: demo 通过制定 Col 组件的 通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```vue
<template>
  <ik-row class="row-bg">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
  <ik-row class="row-bg" justify="center">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
  <ik-row class="row-bg" justify="end">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
  <ik-row class="row-bg" justify="space-between">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
  <ik-row class="row-bg" justify="space-around">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
  <ik-row class="row-bg" justify="space-evenly">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple-light"></div></ik-col>
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
  </ik-row>
</template>
<style>
.ik-row {
  margin-bottom: 20px;
}
.ik-row:last-child {
  margin-bottom: 0;
}
.ik-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

# 分栏偏移

支持偏移指定的栏数。

::: demo 通过制定 Col 组件的 offset 属性可以指定分栏偏移的栏数。

```vue
<template>
  <ik-row :gutter="20">
    <ik-col :span="6"><div class="grid-content bg-purple"></div></ik-col>
    <ik-col :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
  </ik-row>
  <ik-row :gutter="20">
    <ik-col :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
    <ik-col :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
  </ik-row>
  <ik-row :gutter="20">
    <ik-col :span="12" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
  </ik-row>
</template>
<style>
.ik-row {
  margin-bottom: 20px;
}
.ik-row:last-child {
  margin-bottom: 0;
}
.ik-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

# 响应式支持

预设了五中设备的响应尺寸：phone(默认)、ipad、narrowPc、pc 和 widePc。

::: demo 可通过制定 Col 组件的 预设设备名 适配设备。

```vue
<template>
  <ik-row gutter="20" class="response">
    <ik-col
      :ipad="{ span: 12, offset: 3 }"
      :narrowPc="{ span: 4, offset: 2 }"
      :pc="{ span: 8, offset: 2 }"
      :widePc="{ span: 1, offset: 1 }"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
    <ik-col
      :ipad="{ span: 2, offset: 1 }"
      :narrowPc="{ span: 4, offset: 2 }"
      :pc="{ span: 5, offset: 1 }"
      :widePc="{ span: 2, offset: 1 }"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
    <ik-col
      :ipad="{ span: 2, offset: 1 }"
      :narrowPc="{ span: 4, offset: 2 }"
      :pc="{ span: 2, offset: 2 }"
      :widePc="{ span: 5, offset: 1 }"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
    <ik-col
      :ipad="{ span: 2, offset: 1 }"
      :narrowPc="{ span: 4, offset: 2 }"
      :pc="{ span: 1, offset: 3 }"
      :widePc="{ span: 10, offset: 1 }"
      ><div class="grid-content bg-purple"></div
    ></ik-col>
  </ik-row>
</template>
<style>
.ik-row {
  margin-bottom: 20px;
}
.ik-row:last-child {
  margin-bottom: 0;
}
.ik-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.response > .ik-col {
  margin: 4px 4px 0;
}
</style>
```

:::

## Row Attributes

| 属性名  | 类型   | 默认值 | 可选值                                                          | 说明                      |
| :------ | :----- | :----- | :-------------------------------------------------------------- | :------------------------ |
| gutter  | Number | 0      |                                                                 | 页设置显示图标            |
| justify | String |        | start/end/center/space-between/space-around/ space-evenly/right | flex 布局下的水平排列方式 |
| align   | String |        | stretch/center/start/end                                        | flex 布局下的垂直排列方式 |

## Col Attributes

| 属性名   | 类型   | 默认值 | 可选值                                      | 说明                                 |
| :------- | :----- | :----- | :------------------------------------------ | :----------------------------------- |
| span     | Number |        | 0 ~ 24                                      | 栅格占据的列数                       |
| offset   | Number |        | 0 ~ 24                                      | 栅格左侧的间隔格数                   |
| ipad     | String |        | number/object (例如： {span: 4, offset: 4}) | <768px 响应式栅格数或者栅格属性对象  |
| narrowPc | String |        | number/object (例如： {span: 4, offset: 4}) | ≥992px 响应式栅格数或者栅格属性对象  |
| pc       | String |        | number/object (例如： {span: 4, offset: 4}) | ≥1200px 响应式栅格数或者栅格属性对象 |
| widePc   | String |        | number/object (例如： {span: 4, offset: 4}) | ≥1920px 响应式栅格数或者栅格属性对象 |
