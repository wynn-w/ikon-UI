<template>
  <div class="toast" :class="toastClasses">
    <div class="toast__message">
      <slot v-if="!enableHTML"></slot>
      <div v-else v-html="$slots.default[0]" class="innerHTML"></div>
    </div>
    <div class="division-line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickBtn">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "IkToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 2, // seconde
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
  methods: {
    close() {
      this.$el.remove();
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
      this.autoClose &&
        setTimeout(() => {
          this.close();
          this.autoClose = false;
        }, this.autoCloseDelay * 1000);
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
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8em;
  background-color: $toast-bg-color;
  color: $toast-color;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
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
  }
  &.position-top{
    top: 0; 
  }
  &.position-middle{
    top: 50%;
    transform: translate(-50%, -50%); 
  }
  &.position-bottom{
    bottom: 0; 
  }
}
</style>
