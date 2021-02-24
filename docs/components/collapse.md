---
title: Collapse
---

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响
::: demo

```vue
<template>
  <div class="sources">
    <ik-collapse>
      <ik-collapse-item title="这里是标题 1" name="1"
        >假设这里有段文字 1</ik-collapse-item
      >
      <ik-collapse-item title="这里是标题 2" name="2"
        >假设这里有段文字 2</ik-collapse-item
      >
      <ik-collapse-item title="这里是标题 3" name="3"
        >假设这里有段文字 3</ik-collapse-item
      >
    </ik-collapse>
  </div>
</template>
```

:::

## 设置默认开启项

::: demo 通过 selected 属性来设置默认打开页。

```vue
<template>
  <div class="sources">
    <ik-collapse :selected.sync="selectedItem">
      <ik-collapse-item title="这里是标题 1" name="1"
        >假设这里有段文字 1</ik-collapse-item
      >
      <ik-collapse-item title="这里是标题 2" name="2"
        >假设这里有段文字 2</ik-collapse-item
      >
      <ik-collapse-item title="这里是标题 3" name="3"
        >假设这里有段文字 3</ik-collapse-item
      >
    </ik-collapse>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      selectedItem: ["1"],
    };
  },
};
</script>
```

:::

## 手风琴效果

每次只能展开一个面板
::: demo 通过 single 属性来设置是否以手风琴模式显示。

```vue
<template>
  <div class="sources">
    <ik-collapse single>
      <ik-collapse-item title="这里是标题 1" name="1"
        >假设这里有段文字 1</ik-collapse-item
      >
      <ik-collapse-item title="这里是标题 2" name="2"
        >假设这里有段文字 2</ik-collapse-item
      >
      <ik-collapse-item title="这里是标题 3" name="3"
        >假设这里有段文字 3</ik-collapse-item
      >
    </ik-collapse>
  </div>
</template>
```

:::

### Collapse Attributes

| 属性名   | 类型    | 默认值 | 可选值 | 说明           |
| :------- | :------ | :----- | :----- | :------------- |
| single   | Boolean | false  | ——     | 是否手风琴模式 |
| selected | Array   | ——     | ——     | 默认打开的标签 |

### CollapseItem Attributes

| 属性名 | 类型   | 默认值 | 可选值 | 说明                            |
| :----- | :----- | :----- | :----- | :------------------------------ |
| title  | String |        | ——     | 标题（必须）                    |
| name   | String | ——     | ——     | 名称，item 的唯一标识符（必须） |
