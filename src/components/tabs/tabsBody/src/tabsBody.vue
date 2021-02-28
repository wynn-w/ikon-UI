<template>
  <div class="ik-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-tabs-body",
  created() {
    const parentName = this.$parent.$options.name;
    if (parentName !== "ik-tabs") {
      return console.warn(
        `ik-tabs-body 组件当前的父组件为: ${parentName}，期待父组件为 ik-tabs`
      );
    }
  },
};
</script>

<style>
.ik-tabs-body {
  flex: 1;
}
</style>
