<template>
  <svg class="ik-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
import '../assets/iconFont/iconfont'
export default {
  name: "IkIcon",
  props: {
    name: {
      type: String,
      validator(value) {
        return typeof value == "string";
      },
    },
    color: {
      type: String,
      validator(value) {
        const rule = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g
        return typeof value === "string" && rule.test(value)
      },
    },
  },
  mounted(){
    this.color && (this.$el.style.fill = `${this.color}`)
  }
};
</script>

<style lang="scss">
svg path { fill: inherit !important }
.ik-icon {  width: 1em; height: 1em; fill: currentColor; }
</style>
