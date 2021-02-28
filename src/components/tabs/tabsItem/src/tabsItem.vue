<template>
  <div
    class="ik-tabs-item"
    :class="classes"
    @click="onClick"
    :data-itemName="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-tabs-item",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return [{ active: this.active }, { disabled: this.disabled }];
    },
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("updata:select", arg => {
        const { selected } = arg;
        return (this.active = selected === this.name);
      });
    
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      if (this.eventBus) {
        const { left, width, height, top } = this.$el.getBoundingClientRect();
        const emitALL = () => {
          this.eventBus.$emit("updata:select", {
            selected: this.name,
            width,
            left,
            height,
            top,
          });
          // 避免 tabs 里的 $on 无法监听到第一次 upload 事件触发
          setTimeout(() => {
            this.eventBus.$emit("upload:name", this.name);
          });
        };
        return emitALL();
      }
    },
  },
};
</script>

<style lang="scss">
$active-color: #66b1ff;
$disabled-color: #999; // no 996!
.ik-tabs-item {
  display: flex;
  flex-shrink: 0;
  padding: 0.5em 1em;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $active-color;
  }
  &.disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style>
