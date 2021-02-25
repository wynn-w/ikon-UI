<template>
  <div class="ik-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-row",
  props: {
    gutter: {
      type: [String, Number],
    },
    align: {
      type: String,
      validator(value) {
        return (
          ["left", "right", "center", "space-between", "space-around"].indexOf(
            value
          ) > -1
        );
      },
    },
  },
  mounted() {
    for (const child of this.$children) {
      if (child.$options.name == "ik-col") {
        child.gutter = this.gutter;
      }
    }
  },
  computed: {
    rowStyle() {
      if (!this.$children.some(child => $options.name != "ik-col")) {
        return console.warn(`使用 gutter 属性需要 ik-row 的子组件全为 ik-col!`);
      } else {
        const GUTTER = this.gutter;
        return {
          marginLeft: `${-GUTTER / 2}px`,
          marginRight: `${-GUTTER / 2}px`,
        };
      }
    },
    rowClass() {
      return this.align && `align-${this.align}`;
    },
  },
};
</script>

<style lang="scss">
.ik-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  &.align-center {
    justify-content: center;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-between {
    justify-content: space-between;
  }
  &.align-around {
    justify-content: space-around;
  }
}
</style>
