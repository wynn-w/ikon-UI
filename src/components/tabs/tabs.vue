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
    }
  }, 
  mounted(){
    this.eventBus.$emit('updata:selected',this.selected)
  }
};
</script>

<style></style>
