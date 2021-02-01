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
    selected:String
  },
  provide() {
      return { eventBus: this.eventBus };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted(){
    this.eventBus.$emit("update:selected",this.selected)
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
