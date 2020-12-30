<template>
  <div class="row" >
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "IkRow"
}
</script>

<style lang="scss">
.row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}

</style>