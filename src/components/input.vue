<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" :disabled="disabled" type="text" />
  </div>
</template>

<script>
export default {
  name: "IkInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      defalut: false
    },
    readonly: {
      type: Boolean,
      defalut: false
    },
    error:{
        type: String
    }
  },
};
</script>

<style lang="scss" scoped>
$height: 2.6667em;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 0.3333em;
$font-size: 1em;
$box-shadoww-color: rgba(0, 0, 0, 0.5);
$red: #F1453E;
.wrapper {
  font-size: $font-size;
  display: inline-block;
  &.error{
      > input{
          border-color: $red;
      }
  }
  > input {
    height: $height;
    border: 0.0833em solid $border-color;
    border-radius: 0.3333em;
    padding: 0 0.6667em;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadoww-color;
    }
    &[disabled],
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
}
</style>
