---
title: 按钮 - Button
---

# 按钮 - Button

常用的操作按钮

## 基础用法

::: demo

```vue
<template>
  <div class="sources">
    <ik-row>
      <ik-button>默认按钮</ik-button>
      <ik-button type="primary">主要按钮</ik-button>
      <ik-button type="success">成功按钮</ik-button>
      <ik-button type="warning">警告按钮</ik-button>
      <ik-button type="danger">危险按钮</ik-button>
      <ik-button type="info">提示按钮</ik-button>
    </ik-row>
    <ik-row>
      <ik-button plain>朴素按钮</ik-button>
      <ik-button plain type="primary">主要按钮</ik-button>
      <ik-button plain type="success">成功按钮</ik-button>
      <ik-button plain type="warning">警告按钮</ik-button>
      <ik-button plain type="danger">危险按钮</ik-button>
      <ik-button plain type="info">提示按钮</ik-button>
    </ik-row>
    <ik-row>
      <ik-button round>圆角按钮</ik-button>
      <ik-button round type="primary">主要按钮</ik-button>
      <ik-button round type="success">成功按钮</ik-button>
      <ik-button round type="warning">警告按钮</ik-button>
      <ik-button round type="danger">危险按钮</ik-button>
      <ik-button round type="info">提示按钮</ik-button>
    </ik-row>

    <ik-row>
      <ik-button circle icon="ik-icon-setting"></ik-button>
      <ik-button circle icon="ik-icon-edit" type="primary"></ik-button>
      <ik-button circle icon="ik-icon-success" type="success"></ik-button>
      <ik-button circle icon="ik-icon-loading" type="warning"></ik-button>
      <ik-button circle icon="ik-icon-delete" type="danger"></ik-button>
      <ik-button circle icon="ik-icon-top" type="info"></ik-button>
    </ik-row>
  </div>
</template>

<style>
.ik-row {
  margin-top: 10px;
}
.ik-row > .ik-button {
  margin: 4px 4px 0;
}
</style>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
::: demo

```vue
<template>
  <div class="sources">
    <ik-row>
      <ik-button icon="ik-icon-share"></ik-button>
      <ik-button icon="ik-icon-search">搜索</ik-button>
      <ik-button icon="ik-icon-setting" iconPosition="right">设置</ik-button>
    </ik-row>
  </div>
</template>

<style>
.ik-row {
  margin-top: 10px;
}
.ik-row > .ik-button {
  margin-right: 4px;
}
</style>
```

:::

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。
::: demo

```vue
<template>
  <div class="sources">
    <ik-row>
      <ik-button :loading="true" iconPosition="right">设置</ik-button>
      <ik-button
        :loading="isLoding1"
        iconPosition="right"
        @click="isLoding1 = !isLoding1"
        title="点击出现/隐藏loading"
        >点击切换</ik-button
      >
    </ik-row>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isLoding1: true,
    };
  },
};
</script>
```

:::

## 文字按钮

没有边框和背景色的按钮
::: demo

```vue
<template>
  <div class="sources">
    <ik-row>
      <ik-button type="text">文字按钮</ik-button>
    </ik-row>
  </div>
</template>
```

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作

::: demo

```vue
<template>
  <div class="sources">
    <ik-button-group>
      <ik-button icon="ik-icon-left">上一页</ik-button>
      <ik-button>更多</ik-button>
      <ik-button icon="ik-icon-right" iconPosition="right">下一页</ik-button>
    </ik-button-group>
  </div>
</template>
```

:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
::: demo

```vue
<template>
  <ik-row class="sources">
    <ik-button>正常按钮</ik-button>
    <ik-button size="medium">中等按钮</ik-button>
    <ik-button size="small">小型按钮</ik-button>
    <ik-button size="mini">迷你按钮</ik-button>
  </ik-row>
</template>
```

:::

### Attributes

通过设置 Button 的属性来产生不同的按钮样式

| 属性名       | 类型    | 默认值 | 可选值                                           | 说明           |
| :----------- | :------ | :----- | :----------------------------------------------- | :------------- |
| icon         | String  |        | 参考 icon                                        | 页设置显示图标 |
| iconPosition | String  | left   | left/right                                       | 图标位置       |
| loading      | Boolean | false  |                                                  | 是否为加载状态 |
| circle       | Boolean | false  |                                                  | 是否圆形按钮   |
| round        | Boolean | false  |                                                  | 是否圆角按钮   |
| plain        | Boolean | false  |                                                  | 是否朴素按钮   |
| size         | String  |        | medium/small/mini                                | 按钮尺寸       |
| type         | String  |        | default/primary/success/warning/danger/info/text | 按钮类型       |
