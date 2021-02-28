<template>
  <div
    class="ik-tabs-pane"
    :class="classes"
    v-if="active"
    :data-paneName="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ik-tabs-pane",
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  inject: ["eventBus", "height", "direction", "width"],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      const isTrue = this.direction() == "left" || this.direction() == "right";
      return [
        { active: this.active },
        { [`ik-tabs-pane--has-direction`]: isTrue },
      ];
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("updata:select", arg => {
        const { selected } = arg;
        return (this.active = selected === this.name);
      });
    }
  },
  mounted() {
    this.eventBus && this.$nextTick(() => {
        if(this.active)
          this.height && this.$el.style.setProperty(`height`, `${this.height}`);
          this.width && this.$el.style.setProperty(`width`, `${this.width}`);
      });
  },
};
</script>

<style lang="scss">
.ik-tabs-pane {
  overflow: auto;
  &.ik-tabs-pane--vertical {
    height: 150px;
  }
}
</style>
