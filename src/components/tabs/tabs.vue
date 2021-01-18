<template>
  <div class="tabs">
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
    return { eventBus: this.eventBus };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    // Get the left,width of the selected element by default
    for (const vm of this.$children) {
      if (vm.$options.name) {
        for (const item of vm.$children) {
          if (item.$options.name === 'IkTabsItem' && item.name === this.selected) {
            const {left,width} = item.$el.getBoundingClientRect()
            return this.eventBus.$emit("updata:selected", [this.selected,width,left]);
          }
        }
      }
    }
  },
};
</script>

<style></style>
