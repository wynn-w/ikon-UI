<template>
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
  top: 0;
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
  }
}
</style>
