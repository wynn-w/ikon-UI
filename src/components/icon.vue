<template>
  <svg class="ik-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
import "../assets/iconFont/iconfont";
export default {
  name: "ik-icon",
  props: {
    name: {
      type: String,
      validator(value) {
        return typeof value == "string";
      },
    },
  },
};
</script>

<style lang="scss">
svg path {
  fill: inherit !important;
}
.ik-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
