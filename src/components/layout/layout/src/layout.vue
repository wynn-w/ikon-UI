<template>
  <div class="ik-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-layout",
  data() {
    return {
      layoutClass: {
        ["has-aside"]: false,
      },
    };
  },
  mounted() {
    this.hasOther();
    // 检测子组件是否包含 ik-aside，包含则组件水平布局反之垂直布局
    this.$children.some(child => child.$options.name === "ik-aside") &&
      (this.layoutClass["has-aside"] = true);
  },
  methods: {
    // 检测是否只含指定组件
    hasOther() {
      let target = [
        "ik-layout",
        "ik-header",
        "ik-main",
        "ik-footer",
        "ik-aside",
      ];
      const isTrue = !this.$children.some(
        child => target.indexOf(child.$options.name) > -1
      );
      if (isTrue) {
        return console.warn(
          `ik-layout 组件的子元素只能是 ik-layout, ik-header, ik-main, ik-footer, ik-aside`
        );
      }
    },
  },
};
</script>

<style lang="scss">
.ik-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.has-aside {
    flex-direction: row;
  }
}
</style>
