<template>
  <div class="ik-popover" @click="onClickPopover" ref="popover">
    <div
      class="ik-popover__content-wrapper"
      ref="contentWrapper"
      v-if="visible"
    >
      <slot name="content"></slot>
    </div>
    <span class="ik-popover__trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "IkPopover",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onClickPopover(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        this.visible ? this.close() : this.open();
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.setContentPosition();
        document.addEventListener("click", this.eventHandler);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
    },
    setContentPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      const { top, left } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    eventHandler(e) {
      if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        this.$refs.contentWrapper.contains(e.target)
      ) {
        return;
      }
      this.close();
    },
  },
};
</script>

<style lang="scss">
.ik-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.ik-popover__content-wrapper {
  display: inline-block;
  position: absolute;
  left: 0;
  padding: 0.5rem 1rem;
  margin-top: -0.8rem;
  border: 1px solid #dcdfe6;
  border-radius: 0.3571rem;
  box-shadow: 0 0.1429rem 0.8571rem 0 #dcdfe6;
  transform: translateY(-100%);
  &::before,
  &::after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    //兼容性
    font-size: 0;
    line-height: 0;
    border: 0.5rem dashed transparent;
    //
    position: absolute;
    left: 10%;
  }
  &::before {
    border-top: 0.5rem solid #dcdfe6;
    top: 100%;
  }
  &::after {
    border-top: 0.5rem solid #ffffff;;
    top: calc(100% - 0.0929rem);
  }
}
</style>
