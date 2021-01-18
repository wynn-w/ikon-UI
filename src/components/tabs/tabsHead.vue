<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="tabs-head__actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="tabs-head__line" ref="tabsHeadLine"></div>
  </div>
</template>

<script>
export default {
  name: "IkTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("updata:selected", (arg) => {
      const { left } = this.$el.getBoundingClientRect();
        this.$refs.tabsHeadLine.style.width = `${arg[1]}px`;
        this.$refs.tabsHeadLine.style.transform = `translateX(${arg[2] -
          left}px)`;
    });
  },
};
</script>

<style lang="scss">
$tabs-head-height: 3rem;
$line-color: #66b1ff;
.tabs-head {
  height: $tabs-head-height;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  position: relative;

  > .tabs-head__line {
    position: absolute;
    bottom: 0;
    height: 0;
    border-bottom: 0.1rem solid $line-color;
    transition: all 0.3s;
    z-index: 2;
  }
  &::before {
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
</style>
