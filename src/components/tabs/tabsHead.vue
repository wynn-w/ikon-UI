<template>
  <div :class="Classes">
    <div class="tabs-head__nav-wrapper">
      <slot></slot>
      <div class="tabs-head__actions-wrapper">
        <slot name="actions"></slot>
      </div>
      <div class="tabs-head__line" ref="tabsHeadLine"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IkTabsHead",
  inject: ["eventBus", "direction"],
  mounted() {
    this.eventBus.$on("updata:selected", (arg) => {
      const { left, top } = this.$el.getBoundingClientRect();
      if (this.direction === "vertical") {
        this.$refs.tabsHeadLine.style.height = `${arg[3]}px`;
        this.$refs.tabsHeadLine.style.transform = `translateY(${arg[4] -
          top}px)`;
      } else {
        this.$refs.tabsHeadLine.style.width = `${arg[1]}px`;
        this.$refs.tabsHeadLine.style.transform = `translateX(${arg[2] -
          left}px)`;
      }
    });
  },
  computed: {
    Classes() {
      return `tabs-head--${this.direction}`;
    },
  },
};
</script>

<style lang="scss">
$tabs-head-height: 3rem;
$line-color: #66b1ff;
.tabs-head--horizontal {
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  position: relative;
  > .tabs-head__nav-wrapper {
    display: flex;
    flex-direction: row;
    > .tabs-head__line {
      position: absolute;
      bottom: 0;
      height: 0;
      border-bottom: 0.1rem solid $line-color;
      transition: all 0.3s;
      z-index: 2;
    }
    > .tabs-head__actions-wrapper {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      margin-left: auto;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    box-sizing: border-box;
    border-bottom: 0.1rem solid #dddddd;
    z-index: 1;
  }
}
.tabs-head--vertical {
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  position: relative;
  > .tabs-head__nav-wrapper {
    display: flex;
    flex-direction: column;
    > .tabs-head__line {
      position: absolute;
      left: auto;
      width: 0.1rem;
      right: 0;
      height: 0;
      background-color: $line-color;
      transition: all 0.3s;
      z-index: 2;
    }
    .tabs-head__actions-wrapper {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      margin-left: auto;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    }
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 0.1rem;
    top: 0;
    height: 100%;
    background-color: #dddddd;
    z-index: 1;
  }
}
</style>
