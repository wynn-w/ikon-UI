<template>
  <div class="ik-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ikCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    if (this.single) {
      return { eventBus: this.eventBus };
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.ik-collapse {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.0714rem solid #ddd;
  border-bottom: 0.0714rem solid #ddd;
}
</style>
