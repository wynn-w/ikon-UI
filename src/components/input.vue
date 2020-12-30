<template>
  <div class="wrapper" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
      @change="$emit('change', $event, $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event, $event.target.value)"
      @blur="$emit('blur', $event,   $event.target.value)"
    />
    <template v-if="error">
      <p class="message">{{ error }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "IkInput",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
    readonly: {
      type: Boolean,
      defalut: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 2.6667em;
$border-color: #999;
$border-color-hover: #409eff;
$border-radius: 0.3333em;
$font-size: 1em;
$box-shadow-color: #9edbff;
$red: #f1453e;
.wrapper {
  font-size: $font-size;
  display: inline-block;
  > input {
    outline: none;
    height: $height;
    border: 0.0833em solid $border-color;
    border-radius: 0.3333em;
    padding: 0 0.6667em;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      border-color: $border-color-hover;
      box-shadow: 0 0 0.25em $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
      &:focus {
        box-shadow: 0 0 0.25em $red;
      }
    }
  }
  .message {
    font-size: 0.8333rem;
    color: $red;
  }
}
</style>
