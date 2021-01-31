<template>
  <div class="ik-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ikCollapse",
};
</script>

<style lang="scss">
    .ik-collapse{
        border: 0.0714rem solid #ddd;
        border-radius: 0.2857rem;
    }
</style>
