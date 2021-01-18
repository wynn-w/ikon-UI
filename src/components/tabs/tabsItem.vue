<template>
  <div class="tabs-item" :class="classes" @click="onClick" >
    <slot></slot>
  </div>
</template>

<script>
export default {       

  name: "IkTabsItem",
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String,Number],
      required: true,
    },
    disable:{
      type: Boolean,
      default: false
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
      return [{ 'active': this.active }, {'disable':this.disable}];
    },
  },
  created(){
    this.eventBus.$on("updata:selected",(arg)=>{
      return this.active = arg[0] === this.name
    })
  },
  methods: {
    onClick() {
      if(this.disable){ return }
      const {left,width} = this.$el.getBoundingClientRect()
      return this.eventBus.$emit("updata:selected", [this.name,width,left]);
    }
  },
};
</script>

<style lang="scss">
$active-color: #66b1ff;
$disable-color: #999; // no 996!
.tabs-item {
  display: flex;
  flex-shrink: 0;
  padding: 0 1em;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $active-color; 
  }
  &.disable{
    color: $disable-color;
    cursor: not-allowed;
  }
}
</style>
