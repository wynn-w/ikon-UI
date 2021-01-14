<template>
  <div class="toast-wrapper" :class="toastClasses">
    <div class="toast">
      <div class="toast__message">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]" class="innerHTML"></div>
      </div>
      <div class="division-line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="onClickBtn">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IkToast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 2000,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHTML: {
      type: Boolean,
      dafault: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      timer: "",
      _delayTime: 2000,
    };
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("beforeClose");
      clearTimeout(this.timer);
      this.$destroy();
    },
    onClickBtn() {
      this.close();
      if (
        this.closeButton.callback &&
        typeof this.closeButton.callback === "function"
      ) {
        this.closeButton.callback(this);
      }
    },
    updateStyle() {
      this.$refs.line.style.height = `${
        this.$refs.line.parentNode.getBoundingClientRect().height
      }px`;
    },
    execCloseDelay() {
      if (this.autoClose) {
        typeof this.autoClose === "boolean" && (this.autoClose = 2000)
        this.timer = setTimeout(() => {
          this.close();
          this.autoClose = false;
        }, this.autoClose);
      }
    },
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.updateStyle();
    });
    this.execCloseDelay();
  },
};
</script>

<style lang="scss">
$font-size: 14px;
$toast-min-height: 2em;
$toast-bg-color: rgba(0, 0, 0, 0.75);
$toast-color: #ffffff;
@keyframes fade-in {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@keyframes fade-up {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translateY(0%);
  }
}
@keyframes fade-down {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translateY(0%);
  }
}
.toast-wrapper {
  position: fixed;
  left: 50%;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: fade-down 300ms;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%);
    .toast {
      animation: fade-in 300ms;
    }
  }
  &.position-bottom {
    bottom: 0;
    transform: translate(-50%);
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: fade-up 300ms;
    }
  }
}
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8em;
  background-color: $toast-bg-color;
  color: $toast-color;
  box-shadow: 0 0 0.3em 0 rgba(0, 0, 0, 0.5);
  padding: 0 1em;
  border-radius: 0.3em;
  display: flex;
  align-items: center;
  .toast__message {
    padding: 0.8em 0;
  }
  .division-line {
    height: 100%;
    border-left: 0.1em solid #666;
    margin-left: 1em;
  }
  .close {
    padding-left: 1em;
    flex-shrink: 0;
    cursor: default;
  }
}
</style>
