<template>
  <div class="row" :style="{marginLeft: `${-gutter / 2}px`,marginRight:`${-gutter / 2}px`}">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "IkRow",
    props:{
      gutter:{
        type:[String, Number]
      }
    },
    mounted(){
     for (const child of this.$children) {
       child.gutter = this.gutter
     }
    }
}
</script>

<style lang="scss">
.row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

</style>