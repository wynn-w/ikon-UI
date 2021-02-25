<template>
  <div class="ik-aside">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-aside",
  props: {
    width: String,
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
    this.$el.style.setProperty("width", `${this.width}`);
  },
};
</script>

<style></style>
