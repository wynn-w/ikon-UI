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
    justify: {
      type: String,
      validator(value) {
        return (
          [
            "start",
            "end",
            "center",
            "space-between",
            "space-around",
            "space-evenly",
          ].indexOf(value) > -1
        );
      },
    },
    align: {
      type: String,
      validator(value) {
        return ["stretch", "center", "start", "end"].indexOf(value) > -1;
      },
    },
  },
  mounted() {
    this.isOpenWrap();
    for (const child of this.$children) {
      if (child.$options.name == "ik-col") {
        child.gutter = this.gutter;
      }
    }
  },
  computed: {
    rowStyle() {
      if (
        this.gutter &&
        this.$children.some(child => $options.name != "ik-col")
      ) {
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
      return this.justify && `ik-row--justify-${this.justify}`;
    },
  },
  methods: {
    // 加载时，仅在手机设备上开启 wrap
    isOpenWrap() {
      this.$children.some(child => {
        return child.ipad || child.pc || child.narrowPc || child.widePc;
      }) &&
        window.outerWidth <= 375 &&
        this.$el.style.setProperty("flex-wrap", "wrap");
    },
  },
};
</script>

<style lang="scss">
.ik-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-items: baseline;
  &.ik-row--justify-center {
    justify-content: center;
  }
  &.ik-row--justify-start {
    justify-content: flex-start;
  }
  &.ik-row--justify-end {
    justify-content: flex-end;
  }
  &.ik-row--justify-space-between {
    justify-content: space-between;
  }
  &.ik-row--justify-space-around {
    justify-content: space-around;
  }
  &.ik-row--justify-space-evenly {
    justify-content: space-evenly;
  }
  &.ik-row--align-center {
    align-items: center;
  }
  &.ik-row--align-start {
    align-items: start;
  }
  &.ik-row--align-end {
    align-items: end;
  }
}
</style>
