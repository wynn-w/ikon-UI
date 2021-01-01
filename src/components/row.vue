<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IkRow",
  props: {
    gutter: {
      type: [String, Number],
    },
  },
  mounted() {
    for (const child of this.$children) {
      child.gutter = this.gutter;
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: `${-this.gutter / 2}px`,
        marginRight: `${-this.gutter / 2}px`,
      };
    },
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
