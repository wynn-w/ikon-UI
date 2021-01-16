<template>
  <div class="tabs-item" :class="classes" @click="emitPorpsName" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkTabsItem",
  props: {
    disable: {
      type: Boolean,
      dafault: false,
    },
    name: {
      type: [String,Number],
      required: true,
    },
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("updata:selected", (name) => {
      console.log("item");
      console.log(name);
    });
  },
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
    }
  },
};
</script>

<style lang="scss">
$active-color: #66b1ff;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    color: $active-color;
  }
}
</style>
