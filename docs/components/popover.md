---
title: 气泡卡片 - Popover
---

# 气泡卡片 - Popover

常用于展示鼠标 hover/active/focus 时的提示信息

## 基础用法

在这里我们提供 4 种不同方向的展示方式，可以通过以下示例来理解，选择你要的效果。（点击激活）
::: demo

```vue
<template>
  <div class="source popover-center-box">
    <ik-row justify="center">
      <ik-popover position="top" content="顶部文字">
        <ik-button>顶部 </ik-button>
      </ik-popover>
    </ik-row>
    <ik-row justify="space-between">
      <ik-popover position="left" content="左部文字">
        <ik-button>左部</ik-button>
      </ik-popover>
      <ik-popover position="right" content="右部文字">
        <ik-button>右部</ik-button>
      </ik-popover>
    </ik-row>
    <ik-row justify="center">
      <ik-popover position="bottom" content="底部文字"
        ><ik-button>底部</ik-button>
      </ik-popover>
    </ik-row>
  </div>
</template>
<style>
.popover-center-box {
  display: flex;
  flex-direction: column;
  margin: 0 20%;
}
</style>
```

:::

## 激活方式

::: demo 通过 trigger 设置激活方式

```vue
<template>
  <div class="source ">
    <ik-row>
      <ik-popover position="top" trigger="click" content="click 激活提示文字">
        <ik-button>click 激活 </ik-button>
      </ik-popover>
      <ik-popover position="top" trigger="hover" content="hover 激活提示文字">
        <ik-button>hover 激活</ik-button>
      </ik-popover>
      <ik-popover position="top" trigger="focus" content="focus 激活提示文字">
        <ik-button>focus 激活</ik-button>
      </ik-popover>
    </ik-row>
  </div>
</template>
<style>
.ik-row > .ik-popover {
  margin: 4px 4px 0;
}
</style>
```

:::

## 自定义 content

::: demo 通过 template 自定义内容

```vue
<template>
  <div class="source ">
    <ik-row>
      <ik-popover position="top" trigger="click">
        <template slot="content">
          <div>
            <a href="https://github.com/wynn-w/ikon-UI" align="center"
              ><span>项目地址</span></a
            >
          </div>
        </template>
        <ik-button>click 激活 </ik-button>
      </ik-popover>
    </ik-row>
  </div>
</template>
```

:::

### Attributes

| 属性名   | 类型   | 默认值 | 可选值                | 说明       |
| :------- | :----- | :----- | :-------------------- | :--------- |
| position | String | top    | top/right/bottom/left | 出现位置   |
| trigger  | String | click  | click/hover/focus     | 触发方式   |
| width    | String |       | 示例： width="80px"   | 弹出框宽度 |
| content  | String |       |                      | 弹出框内容 |
