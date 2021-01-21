<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkTabsBody",
  created() {
    const parentComponentName = this.$parent.$options.name;
    if (parentComponentName !== "IkTabs") {
      console &&
        console.warn &&
        console.warn(
          `ikTabsBody 的父组件必须为 ikTabs，但是当前 ikTabsBody 的父组件为 ${parentComponentName}`
        );
    }
  },
};
</script>

<style></style>
