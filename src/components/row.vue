<template>
  <div class="row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkRow",
  props: {
    gutter: {
      type: [String, Number],
    },
    align: {
      type: String,
      validator(value){
        return ['left','right','center','space-between','space-around'].includes(value)
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
        paddingLeft: `${-GUTTER / 2}px`,
        paddingRight: `${-GUTTER / 2}px`,
      };
    },
    rowClass(){
      return this.align && `align-${this.align}`
    }
  },
};
</script>

<style lang="scss">
.row {
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
