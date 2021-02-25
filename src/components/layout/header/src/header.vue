<template>
  <div class="ik-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-header",
  props: {
    height: String,
  },
  created() {
    const parentName = this.$parent.$options.name;
    if (parentName != "ik-layout") {
      return console.warn(
        `ik-aside 组件当前的父组件为:${parentName}，期待父组件为 ik-layout`
      );
    }
  },
  mounted() {
    this.$el.style.setProperty("height", `${this.height}`);
  },
};
</script>

<style></style>
