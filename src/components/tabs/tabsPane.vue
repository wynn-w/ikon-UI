<template>
  <div class="tabs-pane" :class="classes" v-if="active">
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
    this.eventBus.$on("updata:selected",(name)=>{
      return this.active = name === this.name
    })
  },
  methods: {
    emitPorpsName() {
      return this.eventBus.$emit("updata:selected", this.name);
    },
  },
};
</script>

<style></style>
