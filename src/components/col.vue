<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: `${gutter / 2}px`, paddingRight: `${gutter / 2}px` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkCol",
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
  },
  data() {
    return {
      gutter: null,
    };
  },
};
</script>

<style lang="scss">
.col {
  min-height: 36px;
  width: 50%;
  border-radius: 0.2em;
  $class-prefix: col-;
  @for $num from 1 through 24 {
    &.#{$class-prefix}#{$num} {
      width: $num / 24 * 100%;
    }
  }
  $class-prefix: offset-;
  @for $num from 1 through 24 {
    &.#{$class-prefix}#{$num} {
      margin-left: $num / 24 * 100%;
    }
  }
}
</style>
