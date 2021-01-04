<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
        // span, offset is exist or not
        let flag = true
        const key = Object.keys(value)
        for (const keyValue of key) {
          !["span", "offset"].includes(keyValue) && (flag = false)
        }
        return flag
      }
export default {
  name: "IkCol",
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    ipad: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    },
  },
  data() {
    return {
      gutter: null,
    };
  },
  computed: {
    colClasses() {
      const {span, offset, phone, ipad, pc, narrowPc, widePc} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [ipad.span && `col-ipad-${ipad.span}`, ipad.offset && `offset-ipad-${ipad.offset}`]: []),
        ...(pc ? [pc.span && `col-pc-${pc.span}`, pc.offset && `offset-pc-${pc.offset}`]: []),
        ...(narrowPc ? [narrowPc.span && `col-narrowPc-${narrowPc.span}`, narrowPc.offset && `offset-narrowPc-${narrowPc.offset}`]: []),
        ...(widePc ? [widePc.span && `col-widePc-${widePc.span}`, widePc.offset && `offset-widePc-${widePc.offset}`]: []),
      ];
    },
    colStyle() {
      const GUTTER = this.gutter;
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
  @media (min-width: 568px) and (max-width: 768px){
    $class-prefix: col-ipad-;
    @for $num from 1 through 24 {
        &.#{$class-prefix}#{$num} {
          width: $num / 24 * 100%;
        }
      }
    $class-prefix: offset-ipad-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num / 24 * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px){
    @for $num from 1 through 24 {
        $class-prefix: col-pc-;
        &.#{$class-prefix}#{$num} {
          width: $num / 24 * 100%;
        }
      }
    $class-prefix: offset-pc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num / 24 * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px){
    @for $num from 1 through 24 {
        $class-prefix: col-narrowPc-;
        &.#{$class-prefix}#{$num} {
          width: $num / 24 * 100%;
        }
      }
    $class-prefix: offset-narrowPc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num / 24 * 100%;
      }
    }
  }
  @media (min-width: 1201px){
    @for $num from 1 through 24 {
        $class-prefix: col-widePc-;
        &.#{$class-prefix}#{$num} {
          width: $num / 24 * 100%;
        }
      }
    $class-prefix: offset-widePc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num / 24 * 100%;
      }
    }
  }
  
}
</style>
