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
    const childrens = this.$children;
    for (const child of childrens) {
      child.$options.name === "IkAside" &&
        (this.layoutClass["has-aside"] = true);
    }
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
