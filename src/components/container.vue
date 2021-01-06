<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkContainer",
};
</script>

<style lang="scss">
.container {
  flex-grow: 1;
}
</style>
