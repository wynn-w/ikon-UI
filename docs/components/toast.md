---
title: 弹窗 - Toast
---

# 弹窗 - Toast

显示提示信息

## 基础用法

在这里我们提供 3 种不同方向的展示方式，可以通过以下示例来理解，选择你要的效果。
::: demo 通过设置 \$toast 方法里的 position 属性可选择弹窗出现位置，默认顶部出现。

```vue
<template>
  <div class="source">
    <ik-row>
      <ik-button @click="showToastTop">顶部弹窗</ik-button>
      <ik-button @click="showToastMiddle">中间弹窗</ik-button>
      <ik-button @click="showToastBottom">底部弹窗</ik-button>
    </ik-row>
  </div>
</template>
<script>
export default {
  name: "app",

  methods: {
    showToastTop() {
      this.showToast("top");
    },
    showToastMiddle() {
      this.showToast("middle");
    },
    showToastBottom() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast("这是 toast 弹窗信息", {
        position: position,
      });
    },
  },
};
</script>
<style>
.ik-row > .ik-button {
  margin: 4px 4px 0;
}
</style>
```

:::

## 自动关闭

::: demo 通过设置 \$toast 方法里的 autoClose 属性可选择弹窗自动关闭。

```vue
<template>
  <div class="source">
    <ik-row>
      <ik-button @click="$toast('会自动关闭的弹窗', { autoClose: 2000 })"
        >顶部弹窗</ik-button
      >
    </ik-row>
  </div>
</template>
```

:::

## 自定义 toast

::: demo 可通过 enableHTML 属性支持 HTML

```vue
<template>
  <div class="source">
    <ik-row>
      <ik-button @click="defineContent">有回调的弹窗</ik-button>
      <ik-button @click="useHTML">开启HTML</ik-button>
    </ik-row>
  </div>
</template>
<script>
export default {
  name: "app",

  methods: {
    defineContent() {
      this.$toast("滚滚长江东逝水", {
        closeButton: {
          text: "下联",
          callback(toast) {
            console.log("%c 浪花淘尽英雄", "color:#f00;font-size:20px;");
          },
        },
      });
    },
    useHTML() {
      this.$toast("<h1>找回自我</h1>", {
        closeButton: {
          text: "Dear John",
        },
        enableHTML: true,
      });
    },
  },
};
</script>
<style>
.ik-row > .ik-button {
  margin: 4px 4px 0;
}
</style>
```

:::

### Attributes

| 属性名      | 类型            | 默认值 | 可选值                                                  | 说明                                    |
| :---------- | :-------------- | :----- | :------------------------------------------------------ | :-------------------------------------- |
| autoClose   | Boolean, Number | false  | 值为 true 时，默认 2000ms                               | 是否自动关闭以及延时时间（默认单位 ms） |
| position    | String          | top    | top/middle/bottom                                       | 弹出位置                                |
| closeButton | Object          |        | 参考：closeButton：{text : "text",callback(toast) {...} | 关闭按钮类容                            |
| enableHTML  | Boolean         | false  |                                                         | 支持 HTML                               |
