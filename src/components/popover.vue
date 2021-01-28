<template>
  <div class="ik-popover" @click="onClickPopover" ref="popover">
    <div
      class="ik-popover__content-wrapper"
      :class="{ [`position-${position}`]: true }"
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "right", "bottom", "left"].indexOf(value) > -1;
      },
    },
  },
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
      const {
        width,
        height,
        top,
        left,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === "top") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          top + height + window.scrollY + "px";
      } else if (this.position === "left") {
        let {
          height: contentHeight,
        } = this.$refs.contentWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          top + (height - contentHeight) / 2 + window.scrollY + "px";
      } else if (this.position === "right") {
        let {
          height: contentHeight,
        } = this.$refs.contentWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left =
          left + width + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          top + (height - contentHeight) / 2 + window.scrollY + "px";
      }
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

  padding: 0.5rem 1rem;
  border: 1px solid #dcdfe6;
  border-radius: 0.3571rem;
  background-color: #ffffff;
  filter: drop-shadow(0 0.1429rem 0.8571rem 0 #dcdfe6);
  &.position-top,
  &.position-bottom,
  &.position-left,
  &.position-right {
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
      max-width: 20em;
      // 中文无效
      word-break: break-all;
    }
  }
  &.position-top {
    left: 0;
    transform: translateY(-100%);
    margin-top: -0.8rem;
    &::before,
    &::after {
      left: 0.7143rem;
    }
    &::before {
      border-top: 0.5rem solid #dcdfe6;
      top: 100%;
    }
    &::after {
      border-top: 0.5rem solid #ffffff;
      top: calc(100% - 0.0929rem);
    }
  }
  &.position-bottom {
    left: 0;
    margin-top: 0.8rem;
    &::before,
    &::after {
      left: 0.7143rem;
    }
    &::before {
      border-bottom: 0.5rem solid #dcdfe6;
      bottom: 100%;
    }
    &::after {
      border-bottom: 0.5rem solid #ffffff;
      bottom: calc(100% - 0.0929rem);
    }
  }
  &.position-left {
    // left: 0;
    transform: translateX(-100%);
    margin-left: -0.8rem;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left: 0.5rem solid #dcdfe6;
      left: 100%;
    }
    &::after {
      border-left: 0.5rem solid #ffffff;
      left: calc(100% - 0.0929rem);
    }
  }
  &.position-right {
    margin-left: 0.8rem;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right: 0.5rem solid #dcdfe6;
      right: 100%;
    }
    &::after {
      border-right: 0.5rem solid #ffffff;
      right: calc(100% - 0.0929rem);
    }
  }
}
</style>
