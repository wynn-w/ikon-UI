<template>
  <div class="tabs" :class="Classes">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "IkTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) > -1;
      },
    },
  },
  provide() {
    return { eventBus: this.eventBus, direction: this.direction };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    this.hasChildren();
    this.getDefaultItemRect();
  },
  computed: {
    Classes() {
      if (this.direction === "vertical")
        return `tabs--${this.direction}`;
    },
  },
  methods: {
    hasChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            "期待 ikTabs 的子组件为 ikTabsHead 和 ikTabsItem，但是你并没有写入子组件"
          );
      }
    },
    // Get the left,width of the selected element by default
    getDefaultItemRect() {
      for (const vm of this.$children) {
        if (vm.$options.name) {
          for (const item of vm.$children) {
            if (
              item.$options.name === "IkTabsItem" &&
              item.name === this.selected
            ) {
              const {
                left,
                width,
                top,
                height,
              } = item.$el.getBoundingClientRect();
              return this.eventBus.$emit("updata:selected", [
                this.selected,
                width,
                left,
                height,
                top,
              ]);
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
.tabs {
  &.tabs--vertical {
    display: flex;
    flex-direction: row;
  }
}
</style>
