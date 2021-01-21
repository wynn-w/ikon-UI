<template>
  <div class="tabs-pane" :class="classes" v-if="active" :data-paneName="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkTabsPane",
  props: {
    name: {
      type: [String,Number],
      required: true,
    }
  },
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return [{ 'active': this.active }];
    },
  },
  created(){
    this.eventBus && 
    this.eventBus.$on("updata:selected",(arg)=>{
      return this.active = arg[0] === this.name
    })
  },
};
</script>

<style></style>
