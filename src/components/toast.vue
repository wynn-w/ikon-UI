<template>
  <div class="toast">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'IkToast'
}
</script>

<style lang="scss">
    $font-size: 14px;
    $toast-height: 1.8;
    $toast-bg-color: rgba(0,0,0,.75);
    $toast-color:#ffffff;
    .toast{
        font-size: $font-size;
        line-height: $toast-height;
        background-color: $toast-bg-color;
        color: $toast-color;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .5);
        padding: 0 16px;
        border-radius: 4px;
        align-items: center;
        position: fixed;
        top:0;
        left: 50%;
        transform: translateX(-50%);
    }
</style>