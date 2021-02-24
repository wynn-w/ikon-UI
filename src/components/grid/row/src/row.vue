<template>
  <div class="ik-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-row",
  props: {
    gutter: {
      type: [String, Number],
    },
    align: {
      type: String,
      validator(value){
        return ['left','right','center','space-between','space-around'].indexOf(value) > -1
      }
    },
  },
  mounted() {
    for (const child of this.$children) {
      child.gutter = this.gutter;
    }
  },
  computed: {
    rowStyle() {
      const GUTTER = this.gutter
      return {
        marginLeft: `${-GUTTER / 2}px`,
        marginRight: `${-GUTTER / 2}px`,
      };
    },
    rowClass(){
      return this.align && `align-${this.align}`
    }
  },
};
</script>

<style lang="scss">
.ik-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &.align-center{
    justify-content: center;
  }
  &.align-left{
     justify-content: flex-start;
  }
  &.align-right{
     justify-content: flex-end;
  }
  &.align-between{
     justify-content: space-between;
  }
  &.align-around{
     justify-content: space-around;
  }
}
</style>
