---
title: "icon"
---

# Icon 图标

提供了一套常用的图标集合。

### 基本用法
<ClientOnly>
<icons-show />
</ClientOnly>

::: details 点击查看源码
```vue
<div>
  <ik-icon name="setting"></ik-icon>
  <ik-icon name="delete"></ik-icon>
  <ik-button :loading="true"> 加载中</ik-button>
</div>

<script>
import Icon from "../../../src/components/icon";
import Button from "../../../src/components/form/button/button";
export default {
  components: {
    "ik-icon": Icon,
    "ik-button": Button,
  },
  data() {
    return {
      names: [
        ["ik-bottom", "ik-top", "ik-left", "ik-right"],
        ["ik-setting", "ik-loading", "ik-download", "ik-delete"],
        ["ik-edit", "ik-Shapex", "ik-success"],
      ],
    };
  },
};
</script>
```
:::

### 自定义图标颜色
<ClientOnly>
<icons-showColor />
</ClientOnly>

::: details 点击查看源码
```vue
<div>
  <ik-icon name="i-setting" color="#66b1ff"></ik-icon>
  <ik-icon name="i-delete" color="#fc5531"></ik-icon>
  <ik-icon name="ik-edit" color="#3eaf7c"></ik-icon>
</div>

<script>
import Icon from "../../../src/components/icon";
export default {
  components: {
    "ik-icon": Icon
  }
};
</script>
```
:::

### 图标集合
       
       
<ClientOnly>
<icons-list />
</ClientOnly>

### API

| 属性名  | 默认值  | 说明                                |
| :-----: | :-----: | :---------------------------------- |
| `name`  |         | 设置显示图标                        |
| `color` | #ffffff | 自定义图标颜色（三/六位 16 进制值） |
