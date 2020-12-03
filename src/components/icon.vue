<!--
 * @Author: your name
 * @Date: 2020-12-03 11:28:11
 * @LastEditTime: 2020-12-03 11:43:34
 * @LastEditors: Please set LastEditors
 * @Description: 将SVG抽出来，方便后面复用，以及简化使用代码
 * @FilePath: \ikon-UI\src\components\icon.vue
-->
<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "j-icon",
  props: {
    name: {
      type: String,
      validator(value) {
        return typeof value == "string";
      },
    },
  },
};
</script>

<style>
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
