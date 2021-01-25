<template>
  <div class="ik-popover" @click="onClickPopover" ref="popover">
    <div
      class="ik-popover__content-wrapper"
      ref="contentWrapper"
      v-if="visiable"
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
      visiable: false,
    };
  },
  methods: {
    onClickPopover(e) {
      this.visiable = !this.visiable;
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visiable) {
          this.onVisiable();
        }
      }
    },
    setContentPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      const {
        width,
        height,
        top,
        left,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.transform = `translate(${left +
        window.scrollX}px,${top + window.scrollY}px)`;
    },
    toListenDocument() {
      const eventHandler = (e) => {
        if (this.$refs.contentWrapper && !this.$refs.contentWrapper.contains(e.target)) {
          this.visiable = false;
          document.removeEventListener("click", eventHandler);
          clearTimeout(popoverTimer)
        }
      };
      document.addEventListener("click", eventHandler);
    },
    onVisiable() {
       const popoverTimer = setTimeout(() => {
        this.setContentPosition();
        this.toListenDocument();
      });
      return popoverTimer
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
  position: absolute;
  bottom: 100%;
  left: 0;
  border: 1px solid #dcdfe6;
  border-radius: 0.3571rem;
  box-shadow: 0 0.1429rem 0.8571rem 0 #dcdfe6;
}
</style>
