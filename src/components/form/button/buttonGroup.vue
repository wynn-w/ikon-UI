<template>
  <div class="ik-button-group">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ik-button-group",
  mounted() {
    for (const node of this.$el.children) {
      const name = node.nodeName.toLowerCase();
      if (name != "button") {
        throw Error(`ik-button-group 组件内的子元素存在 ${name} 标签,其子组件必须全为 ik-button 标签！`);
      }
    }
  },
};
</script>

<style lang="scss">
$border-radius : 5.6px;
.ik-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .ik-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover,
    &:focus,
    &:active {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
