<template>
  <div class="ik-tabs" :class="Classes" @click="handle">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ik-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "top",
      validator(value) {
        return ["left", "right", "top", "bottom"].indexOf(value) > -1;
      },
    },
    height: {
      type: [Number, String],
    },
    width: {
      type: [Number, String],
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
      direction: () => this.direction,
      height: this.height,
      width: this.width,
    };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  created() {
    this.$nextTick(() => {
      this.getDefaultItemRect();
    });
  },
  mounted() {
    this.hasChildren();
  },
  computed: {
    Classes() {
      return `ik-tabs--${this.direction}`;
    },
  },
  watch: {
    direction(newValue, oldValue) {
      this.getDefaultItemRect();
    },
  },
  methods: {
    hasChildren() {
      if (this.$children.length === 0) {
        return console.warn(
          "期待 ikTabs 的子组件为 ikTabsHead 和 ikTabsItem，但是你并没有写入子组件"
        );
      }
    },
    // Get the left,width of the selected element by default
    getDefaultItemRect() {
      for (const vm of this.$children) {
        if (vm.$options.name === "ik-tabs-head") {
          for (const item of vm.$children) {
            if (
              item.$options.name === "ik-tabs-item" &&
              item.name === this.selected
            ) {
              const {
                left,
                width,
                top,
                height,
              } = item.$el.getBoundingClientRect();
              return this.eventBus.$emit("updata:select", {
                selected: this.selected,
                width,
                left,
                height,
                top,
              });
            }
          }
        }
      }
    },
    handle(event) {
      if (event.target.classList.contains("ik-tabs-item")) {
        this.eventBus.$on("upload:name", value => {
          this.eventBus.$off("upload:name");
          this.$emit("update:selected", value);
        });
      }
    },
  },
};
</script>

<style lang="scss">
.ik-tabs {
  display: flex;
  flex-direction: column;
  &.ik-tabs--vertical {
    flex-direction: row;
  }
  &.ik-tabs--left {
    flex-direction: row;
  }
  &.ik-tabs--right {
    flex-direction: row-reverse;
  }
  &.ik-tabs--top {
  }
  &.ik-tabs--bottom {
    flex-direction: column-reverse;
  }
}
</style>
