---
title: 图标 - Icon
---

# 图标 - Icon

提供了一套 ikon UI 用到过的图标集合。

## 使用方法

直接通过 name 属性可使用期望的样式。例如
::: demo

```vue
<template>
  <div class="source">
    <ik-row>
      <ik-icon name="ik-icon-success"></ik-icon>
      <ik-icon name="ik-icon-loading"></ik-icon>
      <ik-icon name="ik-icon-share"></ik-icon>
    </ik-row>
  </div>
</template>
<style>
.ik-row > .ik-icon {
  margin: 4px 8px;
}
</style>
```

:::

## 图标集合

<icon/>

### Attributes

| 属性名 | 类型   | 默认值 | 可选值       | 说明       |
| :----- | :----- | :-----: | :----------- | :--------- |
| name   | String | ——     | 参考图标集合 | 设置图标名 |
