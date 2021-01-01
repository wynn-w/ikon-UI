<template>
  <div class="col" :class="colClasses" :style="colStyle">
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
  computed: {
    colClasses() {
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`,
      ];
    },
    colStyle() {
      const GUTTER = this.gutter
      return {
        paddingLeft: `${GUTTER / 2}px`,
        paddingRight: `${GUTTER / 2}px`,
      };
    },
  },
};
</script>

<style lang="scss">
.col {
  min-height: 36px;
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
