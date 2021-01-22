<template>
  <div class="ik-popover" @click.stop>
    <div class="ik-popover__content-wrapper" v-if="visiable" >
      <slot name="content"></slot>
    </div>
    <div class="ik-popover__controller-wrapper" @click.stop="onClickHandle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IkPopover",
  data() {
    return {
      visiable: false,
    };
  },
  methods: {
    onClickHandle() {
      this.visiable = !this.visiable;
      if (this.visiable) {
        this.$nextTick(() => {
          document.addEventListener("click", this.removeClickEvent);
        });
      }
    },
    removeClickEvent() {
      this.visiable = false;
      document.removeEventListener("click", this.removeClickEvent);
    },
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
    box-shadow: 0 0.1429rem 0.8571rem 0 #dcdfe6;
  }
}
</style>
