<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IkTabsHead",
};
</script>

<style lang="scss">
$tabs-head-height: 3em;
.tabs-head {
  display: flex;
  height: $tabs-head-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #996;
  > .actions-wrapper{
    margin-left: auto;
    margin-right: 1em;
  }
}
</style>
