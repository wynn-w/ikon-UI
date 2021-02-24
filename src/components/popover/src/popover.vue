<template>
  <div class="ik-popover" ref="popover">
    <transition name="slide-fade">
      <div
        class="ik-popover__content-wrapper"
        :class="{ [`position-${position}`]: true }"
        ref="contentWrapper"
        v-if="visible"
      >
        <slot name="content">{{ content }}</slot>
      </div>
    </transition>

    <span class="ik-popover__trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "ik-popover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "right", "bottom", "left"].indexOf(value) > -1;
      },
    },
    width: {
      type: [Number, String],
      validator(value) {
        const rule = /^[0-9]+.?[0-9]*/;
        return rule.test(value - 0);
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover", "focus"].includes(value) > -1;
      },
    },
    content: String,
  },
  computed: {
    slideFade() {
      return `fade-${this.position}`;
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.addPopoverListeners();
  },
  updated() {
    if (this.trigger === "hover" && this.$refs.contentWrapper) {
      this.addContentListeners();
    }
  },
  destroyed() {
    this.emoveAllListeners();
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
        document.addEventListener("click", this.eventHandler, true);
      });
    },
    close() {
      this.visible = false;
      document.emoveEventListener("click", this.eventHandler);
    },
    setContentPosition() {
      const contentWrapper = this.$refs.contentWrapper;
      document.body.appendChild(contentWrapper);
      this.setContentWidth();
      this.calcContentStyle();
    },
    setContentWidth() {
      if (this.width) {
        const _width = this.width;
        const _min = 150;
        const _max = window.innerWidth ? window.innerWidth : 1920;
        let elementWidth = this.$refs.contentWrapper.style.width;
        if (_width < _min) {
          elementWidth = `${_min}px`;
        } else if (_width > _max) {
          elementWidth = `${_max}px`;
        } else {
          elementWidth = `${_width}px`;
        }
      }
    },
    calcContentStyle() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      const {
        width,
        height,
        top,
        left,
      } = triggerWrapper.getBoundingClientRect();
      const { height: contentHeight } = contentWrapper.getBoundingClientRect();
      const postions = new Map()
        .set("top", {
          left: `${left + window.scrollX}px`,
          top: `${top + window.scrollY}px`,
        })
        .set("bottom", {
          left: `${left + window.scrollX}px`,
          top: `${top + height + window.scrollY}px`,
        })
        .set("left", {
          left: `${left + window.scrollX}px`,
          top: `${top + (height - contentHeight) / 2 + window.scrollY}px`,
        })
        .set("right", {
          left: `${left + width + window.scrollX}px`,
          top: `${top + (height - contentHeight) / 2 + window.scrollY}px`,
        });
      contentWrapper.style.left = postions.get(`${this.position}`).left;
      contentWrapper.style.top = postions.get(`${this.position}`).top;
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
    addPopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.addEventListener("click", this.onClickPopover);
      } else if (this.trigger === "hover") {
        this.$refs.popover.addEventListener("mouseenter", this.open);
        this.$refs.popover.addEventListener("mouseleave", this.close);
      } else if (this.trigger === "focus") {
        {
          this.$refs.popover.addEventListener("mousedown", this.open);
          this.$refs.popover.addEventListener("mouseup", this.close);
        }
      }
    },
    addContentListeners() {
      this.$refs.contentWrapper.addEventListener("mouseenter", this.open);
      this.$refs.contentWrapper.addEventListener("mouseleave", this.close);
    },
    emoveAllListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.emoveEventListener("click", this.onClickPopover);
      } else if (this.trigger === "hover") {
        this.$refs.popover.emoveEventListener("mouseenter", this.open);
        this.$refs.popover.emoveEventListener("mouseleave", this.close);
        this.$refs.contentWrapper.emoveEventListener("mouseenter", this.open);
        this.$refs.contentWrapper.emoveEventListener("mouseleave", this.close);
      } else {
        this.$refs.popover.emoveEventListener("mousedown", this.open);
        this.$refs.popover.emoveEventListener("mouseup", this.close);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
.ik-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  font-size: $font-size;

}
.ik-popover__content-wrapper {
  display: inline-block;
  box-sizing: content-box;
  position: absolute;
  padding: 0.5em 0.7em;
  border: 0.0714em solid #dcdfe6;
  border-radius: 0.3571em;
  background-color: #ffffff;
  @supports (filter: drop-shadow()) {
    filter: drop-shadow(0 0.1429em 0.8571em 0 #dcdfe6);
  }
  @supports not (filter: drop-shadow()) {
    box-shadow: (0 0.1429em 0.8571em 0 #dcdfe6);
  }
  // 中文无效
  word-break: break-all;
  max-width: 20em;
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
      border: 0.5em dashed transparent;
      //
      position: absolute;
    }
  }
  &.position-top {
    left: 0;
    transform: translateY(-100%);
    margin-top: -0.8em;
    &::before,
    &::after {
      left: 0.7143em;
    }
    &::before {
      border-top: 0.5em solid #dcdfe6;
      top: 100%;
    }
    &::after {
      border-top: 0.5em solid #ffffff;
      top: calc(100% - 0.0929em);
    }
  }
  &.position-bottom {
    left: 0;
    margin-top: 0.8em;
    &::before,
    &::after {
      left: 0.7143em;
    }
    &::before {
      border-bottom: 0.5em solid #dcdfe6;
      bottom: 100%;
    }
    &::after {
      border-bottom: 0.5em solid #ffffff;
      bottom: calc(100% - 0.0929em);
    }
  }
  &.position-left {
    // left: 0;
    transform: translateX(-100%);
    margin-left: -0.8em;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left: 0.5em solid #dcdfe6;
      left: 100%;
    }
    &::after {
      border-left: 0.5em solid #ffffff;
      left: calc(100% - 0.0929em);
    }
  }
  &.position-right {
    margin-left: 0.8em;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right: 0.5em solid #dcdfe6;
      right: 100%;
    }
    &::after {
      border-right: 0.5em solid #ffffff;
      right: calc(100% - 0.0929em);
    }
  }
}
// 过渡动画
.slide-fade-enter-active {
  transition: opacity 0.5s ease;
}
.slide-fade-leave-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
