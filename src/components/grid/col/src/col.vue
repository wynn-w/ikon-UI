<template>
  <div class="ik-col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let flag = true;
  const key = Object.keys(value);
  for (const keyValue of key) {
    !["span", "offset"].indexOf(keyValue) > -1 && (flag = false);
  }
  return flag;
};
export default {
  name: "ik-col",
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    ipad: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: null,
    };
  },
  methods: {
    createClasses(propObj, devName = "") {
      let array = [];
      if (!propObj) {
        return [];
      }
      propObj.span && array.push(`ik-col-${devName}${propObj.span}`);
      propObj.offset && array.push(`offset-${devName}${propObj.offset}`);
      return array;
    },
  },
  computed: {
    colClasses() {
      const { span, offset, ipad, pc, narrowPc, widePc } = this;
      const createClasses = this.createClasses;
      return [
        ...createClasses({ span, offset }),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(narrowPc, "narrow-pc-"),
        ...createClasses(pc, "pc-"),
        ...createClasses(widePc, "wide-pc-"),
      ];
    },
    colStyle() {
      const GUTTER = this.gutter;
      if (GUTTER) {
        const res = `${GUTTER / 2}px`
        return {
          paddingLeft: res,
          paddingRight: res,
        };
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss">
.ik-col {
  min-height: 36px;
  border-radius: 0.2em;
  $class-prefix: col-;
  $calcVal: 1 / 24 * 100%;
  @for $num from 1 through 24 {
    &.#{$class-prefix}#{$num} {
      width: $num * $calcVal;
    }
  }
  $class-prefix: offset-;
  @for $num from 1 through 24 {
    &.#{$class-prefix}#{$num} {
      margin-left: $num * $calcVal;
    }
  }
  @media (min-width: 568px) and (max-width: 768px) {
    $class-prefix: ik-col-ipad-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        width: $num * $calcVal;
      }
    }
    $class-prefix: offset-ipad-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num * $calcVal;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: ik-col-narrow-pc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        width: $num * $calcVal;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num * $calcVal;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    @for $num from 1 through 24 {
      $class-prefix: ik-col-pc-;
      &.#{$class-prefix}#{$num} {
        width: $num * $calcVal;
      }
    }
    $class-prefix: offset-pc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num * $calcVal;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: ik-col-wide-pc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        width: $num * $calcVal;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num * $calcVal;
      }
    }
  }
}
</style>
