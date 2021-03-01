<template>
  <div class="ik-tabs-head" :class="headDirection">
    <div class=" ik-tabs-head__nav-wrapper">
      <slot></slot>
      <div class=" ik-tabs-head__actions-wrapper">
        <slot name="actions"></slot>
      </div>
      <div class=" ik-tabs-head__line" ref="tabsHeadLine"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ik-tabs-head",
  inject: ["eventBus", "direction"],
  computed: {
    headDirection() {
      return `ik-tabs-head--${this.direction()}`;
    },
  },
  watch: {
    headDirection(newValue, old) {
      this.setHandLineProperty();
    },
  },
  created() {
    const parentName = this.$parent.$options.name;
    if (parentName !== "ik-tabs") {
      return console.warn(
        `ik-tabs-head 组件当前的父组件为: ${parentName}，期待父组件为 ik-tabs`
      );
    }
    this.setHandLineProperty();
  },
  methods: {
    cb(arg) {
      const { left: headLeft, top: headTop } = this.$el.getBoundingClientRect();
      const {
        width: itemWidth,
        left: itemLeft,
        height: itemHeight,
        top: itemTop,
      } = arg;
      const isTrue =
        ["ik-tabs-head--left", "ik-tabs-head--right"].indexOf(
          this.headDirection
        ) > -1;
      if (isTrue) {
        this.$refs.tabsHeadLine.style.height = `${itemHeight}px`;
        // this.$refs.tabsHeadLine.style.width != "2px" &&
        //   (this.$refs.tabsHeadLine.style.width = `2px`);
        this.$refs.tabsHeadLine.style.transform = `translateY(${itemTop -
          headTop}px)`;
      } else {
        this.$refs.tabsHeadLine.style.width = `${itemWidth}px`;
        // this.$refs.tabsHeadLine.style.height != "2px" &&
        //   (this.$refs.tabsHeadLine.style.height = `2px`);
        this.$refs.tabsHeadLine.style.transform = `translateX(${itemLeft -
          headLeft}px)`;
      }
    },
    setHandLineProperty() {
      if (this.eventBus) {
        this.eventBus.$on("updata:select", arg => this.cb(arg));
        this.eventBus.$off("updata:select", arg => this.cb(arg));
      }
    },
  },
};
</script>

<style lang="scss">
$tabs-head-height: 3rem;
$font-size: 14px;
$line-color: #66b1ff;
.ik-tabs-head {
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  position: relative;
  > .ik-tabs-head__nav-wrapper {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    > .ik-tabs-head__line {
      position: absolute;
      background-color: $line-color;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      z-index: 2;
    }
    > .ik-tabs-head__actions-wrapper {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      margin-left: auto;
      justify-content: center;
      align-items: center;
      padding: 0 14px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #dddddd;
    z-index: 1;
  }
}
.ik-tabs-head--left {
  flex-direction: column;
  > .ik-tabs-head__nav-wrapper {
    > .ik-tabs-head__line {
      width: 2px;
      right: 0;
      height: 0;
    }
  }
  &::after {
    right: 0;
    width: 2px;
    top: 0;
    height: 100%;
  }
}
.ik-tabs-head--top {
  margin-bottom: 14px;
  > .ik-tabs-head__nav-wrapper {
    flex-direction: row;
    > .ik-tabs-head__line {
      position: absolute;
      bottom: 0;
      height: 0;
      border-bottom: 2px solid $line-color;
      z-index: 2;
    }
  }
  &::after {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
}
.ik-tabs-head--bottom {
  > .ik-tabs-head__nav-wrapper {
    flex-direction: row;
    > .ik-tabs-head__line {
      position: absolute;
      bottom: 0;
      height: 0;
      border-bottom: 2px solid $line-color;
      z-index: 2;
    }
  }
  &::after {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
}
.ik-tabs-head--right {
  > .ik-tabs-head__nav-wrapper {
    flex-direction: column;
    > .ik-tabs-head__line {
      position: absolute;
      left: auto;
      width: 2px;
      left: 0;
      height: 0;
      background-color: $line-color;
      z-index: 2;
    }
  }
  &::after {
    left: 0;
    width: 2px;
    top: 0;
    height: 100%;
  }
}
</style>
