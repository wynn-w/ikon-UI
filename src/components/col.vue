<template>
  <div class="col" :class="colClasses" :style="colStyle ">
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
  methods:{
    createClasses(propObj, devName = ''){
      let array = []
      if(!propObj){return []}
      propObj.span && array.push(`col-${devName}${propObj.span}`)
      propObj.offset && array.push(`offset-${devName}${propObj.offset}`)
      return array
    }
  },
  computed: {
    colClasses() {
      const {span, offset, ipad, pc, narrowPc, widePc} = this
      const createClasses = this.createClasses
      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ];
    },
    colStyle() {
      const GUTTER = this.gutter;
      if(GUTTER){  
        return {
          paddingLeft: `${GUTTER / 2}px`,
          paddingRight: `${GUTTER / 2}px`,
        };
      }
      else{
        return ;
      }
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
  @media (min-width: 993px) and (max-width: 1200px){
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
  @media (min-width: 1201px){
    @for $num from 1 through 24 {
        $class-prefix: col-widePc-;
        &.#{$class-prefix}#{$num} {
          width: $num / 24 * 100%;
        }
      }
    $class-prefix: offset-wide-pc-;
    @for $num from 1 through 24 {
      &.#{$class-prefix}#{$num} {
        margin-left: $num / 24 * 100%;
      }
    }
  }
  
}
</style>
