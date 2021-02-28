---
title: 选项卡 - Tabs
---

# 选项卡 - Tabs

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。
::: demo

```vue
<template>
  <ik-tabs :selected.sync="activeName">
    <ik-tabs-head>
      <ik-tabs-item name="1">
        用户管理
      </ik-tabs-item>
      <ik-tabs-item name="2">
        配置管理
      </ik-tabs-item>
      <ik-tabs-item name="3">
        角色管理
      </ik-tabs-item>
      <ik-tabs-item name="4">
        定时任务补偿
      </ik-tabs-item>
    </ik-tabs-head>
    <ik-tabs-pane name="1">用户管理</ik-tabs-pane>
    <ik-tabs-pane name="2">配置管理</ik-tabs-pane>
    <ik-tabs-pane name="3">角色管理</ik-tabs-pane>
    <ik-tabs-pane name="4">定时任务补偿</ik-tabs-pane>
  </ik-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "2",
    };
  },
};
</script>
```

:::



## 禁用

可以在 item 上 disbabled 禁用标签
::: demo

```vue
<template>
  <ik-tabs :selected.sync="activeName">
    <ik-tabs-head>
      <ik-tabs-item name="1">
        用户管理
      </ik-tabs-item>
      <ik-tabs-item name="2">
        配置管理
      </ik-tabs-item>
      <ik-tabs-item name="3" disabled>
        角色管理
      </ik-tabs-item>
      <ik-tabs-item name="4">
        定时任务补偿
      </ik-tabs-item>
    </ik-tabs-head>
    <ik-tabs-pane name="1">用户管理</ik-tabs-pane>
    <ik-tabs-pane name="2">配置管理</ik-tabs-pane>
    <ik-tabs-pane name="3">角色管理</ik-tabs-pane>
    <ik-tabs-pane name="4">定时任务补偿</ik-tabs-pane>
  </ik-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "2",
    };
  },
};
</script>
```

:::



## 位置

可以通过 direction 设置标签的位置
::: demo

```vue
<template>
  <ik-tabs :selected.sync="activeName" direction="left">
    <ik-tabs-head>
      <ik-tabs-item name="1">
        用户管理
      </ik-tabs-item>
      <ik-tabs-item name="2">
        配置管理
      </ik-tabs-item>
      <ik-tabs-item name="3" disable>
        角色管理
      </ik-tabs-item>
      <ik-tabs-item name="4">
        定时任务补偿
      </ik-tabs-item>
    </ik-tabs-head>
    <ik-tabs-pane name="1">
      <div class="item-content">
        用户管理
      </div>
    </ik-tabs-pane>
    <ik-tabs-pane name="2"
      ><div class="item-content">
        配置管理
      </div></ik-tabs-pane
    >
    <ik-tabs-pane name="3"
      ><div class="item-content">
        角色管理
      </div></ik-tabs-pane
    >
    <ik-tabs-pane name="4"
      ><div class="item-content">
        定时任务补偿
      </div></ik-tabs-pane
    >
  </ik-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "2",
    };
  },
};
</script>
<style>
.ik-tabs .item-content {
  margin-left: 10px;
}
</style>
```

:::



### Tabs Attributes

| 属性名    | 类型   | 默认值 | 可选值                | 说明                                 |
| :-------- | :----- | :----- | :-------------------- | :----------------------------------- |
| selected  | String |        |                       | 默认选择项（必须）                   |
| direction | String | top    | left/right/top/bottom | head 组件的位置                      |
| height    | String | 150px  |                       | pane 组件的高度（建议使用 css 替代） |
| width     | String | 150px  |                       | pane 组件的宽度（建议使用 css 替代） |

### TabsItem Attributes

| 属性名   | 类型    | 默认值 | 可选值     | 说明                                        |
| :------- | :------ | :----- | :--------- | :------------------------------------------ |
| name     | String  |        |            | item 组件名称，且与 pane 组件名对应（必须） |
| disabled | Boolean | false  | true/false | 是否禁用                                    |

### TabsItem Attributes

| 属性名   | 类型    | 默认值 | 可选值     | 说明                                      |
| :------- | :------ | :----- | :--------- | :---------------------------------------- |
| name     | String  |        |            | pane 组件名称，且与 item 组件名对应（必须） |
| disabled | Boolean | false  | true/false | 是否禁用                                  |
