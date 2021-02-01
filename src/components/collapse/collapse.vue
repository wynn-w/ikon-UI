<template>
  <div class="ik-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ikCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: Array,
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    this.selected && this.eventBus.$emit("update:selected", this.selected);
    let [..._selected] = [...(this.selected || [])];
    this.addEvent(_selected);
    this.removeEvent(_selected);

  },
  methods: {
    addEvent(_selected) {
      this.eventBus.$on("update:addSelected", name => {
        if (this.single) {
          _selected = [name];
        } else {
          _selected.push(name);
        }
        this.eventBus.$emit("update:selected", _selected);
        this.$emit("update:selected", _selected);
      });
    },
    removeEvent(_selected) {
      this.eventBus.$on("update:removeSelected", name => {
        const index = _selected.indexOf(name);
        _selected.splice(index, 1);
        this.eventBus.$emit("update:selected", _selected);
        this.$emit("update:selected", _selected);
      });
    },
  },
};
</script>

<style lang="scss">
.ik-collapse {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.0714rem solid #ddd;
  border-bottom: 0.0714rem solid #ddd;
}
</style>
