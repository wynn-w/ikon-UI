<template>
  <svg class="ik-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
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
  created() {
    // 服务器环境下不导入 iconfont，避免打包报错："window is not define"
    let fecha = this.$isServer
      ? { format: function() {}, parse: function() {} }
      : require("../../../assets/iconFont/iconfont");
    let fechaModel = fecha;
    if (!this.$isServer && !fecha.format) {
      fechaModel = window.fecha;
    }
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
