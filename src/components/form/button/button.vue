<template>
  <button
    class="ik-button"
    :class="[`ik-button--${type}`, classSize, { circle, round, plain }]"
    @click="$emit('click')"
  >
    <span
      class="ik-button__content"
      :class="`${classIconPosition} ${classHasIcon}`"
    >
      <ik-icon :name="icon" v-if="icon && !loading"></ik-icon>
      <ik-icon name="ik-icon-loading" v-if="loading" class="loading"></ik-icon>
      <span
        class="ik-button__content__text"
        v-if="!circle && this.$slots.default !== undefined"
      >
        <!-- 补充：在默认插槽为空时候显示 -->
        <slot></slot>
      </span>
    </span>
  </button>
</template>

<script>
import Vue from "vue";
import Icon from "../../icon";
export default {
  name: "ik-button",
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      },
    },
    loading: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    size: {
      type: String,
      validator(value) {
        return ["medium", "small", "mini"].indexOf(value) > -1;
      },
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        return (
          [
            "default",
            "primary",
            "success",
            "warning",
            "danger",
            "info",
            "text",
          ].indexOf(value) > -1
        );
      },
    },
  },
  // 样式相关
  computed: {
    classIconPosition() {
      return this.iconPosition === "right"
        ? `ik-icon--${this.iconPosition}`
        : "";
    },
    classHasIcon() {
      return !!(this.icon || this.loading) ? "has-icon" : "";
    },
    classSize() {
      return this.size && `ik-button--${this.size}`;
    },
  },
  components: {
    [Icon.name]: Icon,
  },
  methods: {
    /**
     * @description: 接收到 circle 值时，设置按钮的宽高
     * @param {*}
     * @return {*}
     */
    handleIsCircle() {
      const vm = this.$el;
      const sizies = new Map()
        .set("mini", `28px`)
        .set("small", `32px`)
        .set("medium", `34px`);
      if (vm.classList.contains("circle")) {
        vm.classList.add("padding-0");
        const value = this.size ? sizies.get(this.size) : "36px";
        vm.style.setProperty("width", value);
        vm.style.setProperty("height", value);
      }
    },
  },
  mounted() {
    this.handleIsCircle();
  },
};
</script>

<style lang="scss">
$button-height: 32px;
$font-size-default: 14px;
$font-size-small: 12px;
$border-radius: 0.2857em;

$primary: #409eff;
$success: #67c23a;
$info: #909399;
$warning: #e6a23c;
$danger: #f56c6c;
@mixin primary {
  background-color: $primary;
  border-color: $primary;
  color: #fff;
}
@mixin success {
  color: #fff;
  background-color: $success;
  border-color: $success;
}
@mixin info {
  color: #fff;
  background-color: $info;
  border-color: $info;
}
@mixin warning {
  color: #fff;
  background-color: $warning;
  border-color: $warning;
}
@mixin danger {
  color: #fff;
  background-color: $danger;
  border-color: $danger;
}
@mixin text {
  color: $primary;
  background: none;
  border: none;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
// 初始样式
.ik-button {
  line-height: 1;
  font-size: $font-size-default;
  padding: 10px 18px;
  border-radius: $border-radius;
  border: 1px solid #dcdfe6;
  background: #ffffff;
  color: #606266;
  line-height: $font-size-default;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.1s;
  .ik-button__content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    &.has-icon {
      > .ik-button__content__text {
        margin-left: 0.3571em;
        word-break: keep-all;
      }
      &.ik-icon--right {
        > .ik-button__content__text {
          margin-left: 0;
          order: 1;
        }
        > .ik-icon {
          margin-left: 0.3571em;
          order: 2;
        }
      }
    }
  }
  &:focus,
  &:hover {
    opacity: 0.8;
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    opacity: 1;
    border: 1px solid $primary;
    color: $primary;
  }
  &:focus {
    outline: none;
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
// 混入样式
.ik-button--primary {
  @include primary;
  &:focus,
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #ffffff;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #ffffff;
  }
  &.plain {
    color: $primary;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:focus,
    &:hover {
      @include primary;
    }
  }
}
.ik-button--success {
  @include success;
  &:focus,
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #ffffff;
  }
  &.plain {
    color: $success;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:focus,
    &:hover {
      @include success;
    }
  }
}
.ik-button--warning {
  @include warning;
  &:focus,
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #ffffff;
  }
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #ffffff;
  }
  &.plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:focus,
    &:hover {
      @include warning;
    }
  }
}
.ik-button--danger {
  @include danger;
  &:focus,
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #ffffff;
  }
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #ffffff;
  }
  &.plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:focus,
    &:hover {
      @include danger;
    }
  }
}
.ik-button--info {
  @include info;
  &:focus,
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #ffffff;
  }
  &:active {
    background: #82848a;
    border-color: #82848a;
    color: #ffffff;
  }
  &.plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:focus,
    &:hover {
      @include info;
    }
  }
}
.ik-button--text {
  @include text;
  &:focus,
  &:hover {
    background: none;
    border: none;
    color: #66b1ff;
  }
  &:active {
    background: none;
    border: none;
    color: #3a8ee6;
  }
}

.ik-button--medium {
  padding: 9px 18px;
}
.ik-button--small {
  padding: 8px 12px;
  .ik-button__content__text {
    font-size: $font-size-small;
  }
}
.ik-button--mini {
  padding: 6px 12px;
  .ik-button__content__text {
    font-size: $font-size-small;
  }
}
// 特殊样式
.circle {
  width: 14px;
  border-radius: 50%;
}
.round {
  border-radius: 20px;
}
.plain {
  &:focus,
  &:hover {
    background-color: transparent;
  }
}

.padding-0 {
  padding: 0;
}
</style>
