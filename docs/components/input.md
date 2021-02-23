---
title: input
---

# Input 输入框

通过鼠标或键盘输入内容

## 基础用法

::: demo

```vue
<template>
  <div class="sources">
    <ik-row class="_row">
      <ik-input v-model="input1" placeholder="请输入内容"></ik-input>
    </ik-row>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      input1: "",
    };
  },
};
</script>
```

:::

## 禁用/只读状态

::: demo 通过 disabled/readonly 属性指定是否禁用/只读 input 组件

```vue
<template>
  <div class="sources">
    <ik-row class="_row">
      <ik-input v-model="input2" placeholder="请输入内容" disabled></ik-input>
      <ik-input v-model="input3" placeholder="请输入内容" readonly></ik-input>
    </ik-row>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      input2: "",
      input3: "",
    };
  },
};
</script>
<style>
._row {
  margin-top: 10px;
}
._row > .ik-input {
  margin-right: 4px;
}
</style>
```

:::

## 可清空

::: demo 使用 clearable 属性即可得到一个可清空的输入框

```vue
<template>
  <div class="sources">
    <ik-row class="_row">
      <ik-input v-model="input4" placeholder="请输入内容" clearable></ik-input>
    </ik-row>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      input4: "",
    };
  },
};
</script>
```

:::

## 密码框

::: demo 使用 showPassword 属性即可得到一个可切换显示隐藏的密码框

```vue
<template>
  <div class="sources">
    <ik-row class="_row">
      <ik-input v-model="input5" placeholder="基础密码框"></ik-input>
      <ik-input
        v-model="input6"
        placeholder="请输入内容"
        showPassword
      ></ik-input>
    </ik-row>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      input5: "",
      input6: "",
    };
  },
};
</script>
<style>
._row {
  margin-top: 10px;
}
._row > .ik-input {
  margin-right: 4px;
}
</style>
```

:::

<!-- ## 尺寸
::: demo 可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium、small 和 mini 三种尺寸。

```vue
<template>
  <div class="sources">
    <div class="__row">
      <ik-input v-model="input7" placeholder="默认输入框" ></ik-input>
      <ik-input v-model="input8" placeholder="中等输入框"  ></ik-input>
      <ik-input v-model="input9" placeholder="小型输入框"  ></ik-input>
      <ik-input v-model="input10" placeholder="迷你输入框"  ></ik-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      input7: '',
      input8: '',
      input9: '',
      input10: '',
    };
  },
};
</script>
<style>
.__row {
  margin-top: 10px;
}
.__row > .ik-input {
  margin-top: 4px;
  margin-right: 4px;
}
</style>
```

::: -->

### Attributes

| 属性名       | 类型          | 默认值 | 可选值               | 说明                     |
| :----------- | :------------ | :----- | :------------------- | :----------------------- |
| type         | String        | ——     | number/text/password | 类型                     |
| value        | String/Number | ——     | ——                   | 绑定值                   |
| disabled     | Boolean       | false  | ——                   | 页设置显示图标           |
| readonly     | Boolean       | false  | ——                   | 图标位置                 |
| clearable    | Boolean       | false  | ——                   | 是否可清空               |
| showPassword | Boolean       | false  | ——                   | 是否显示切换密码图标     |
| size         | String        | text   | mini/small/medium    | 尺寸                     |
| id           | String        | ——     | ——                   | 原生属性，id             |
| name         | String        | ——     | ——                   | 原生属性，name           |
| placeholder  | String        | ——     | ——                   | 原生属性，输入框占位文本 |
| step  | Number        | ——     | ——                   | 原生属性，步长 |
| maxlength  | Number        | ——     | ——                   | 原生属性，最大输入长度 |
| min  | Number        | ——     | ——                   | 原生属性，最小输入值 |
| max  | Number        | ——     | ——                   | 原生属性，最大输入值 |
