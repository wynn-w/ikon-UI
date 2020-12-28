<!--
 * @Description: ik-button组件容器
 * @Author: wynn-w
 * @Date: 2020-12-03 20:41:33
 * @Do not edit: 2020-12-03 21:10:00
 * @LastEditors: wynn-w
-->
<template>
  <div class="ik-button-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "g-button-group",
    mounted(){
     for(const node of this.$el.children){
       const name = node.nodeName.toLowerCase()
       name != "button" && console.warn(`ik-button-group组件内的子元素存在 ${name} 标签,必须全为 button 标签！`)
     }
    }
}
</script>

<style lang="scss">
.ik-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .ik-button {
    border-radius: 0;
    &:not(:last-child){
      border-top: 0;
      border-bottom: 0;
      border-right: .1em solid rgba(255,255,255,.9);
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

  }
}
</style>