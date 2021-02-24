<template>
  <div class="ik-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-container",
};
</script>

<style lang="scss">
.container {
  flex-grow: 1;
}
</style>
