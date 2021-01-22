<template>
  <div class="ik-popover">
    <div class="ik-popover__content-wrapper" v-if="visiable">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkPopover",
  data() {
    return {
      visiable: true,
    };
  },
};
</script>

<style lang="scss">
.ik-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  > .ik-popover__content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid #dcdfe6;
    border-radius: 0.3571rem;
    box-shadow: 0 0.1429rem 0.8571rem 0 #dcdfe6
  }
}
</style>
