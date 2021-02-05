<template>
  <button
    class="ik-button f-box"
    :class="[{ [`icon-${iconPosition}`]: true }, { circle }]"
    @click="$emit('click')"
  >
    <ik-icon :name="icon" v-if="icon && !loading" class="_icon"></ik-icon>
    <ik-icon name="ik-loading" v-if="loading" class="_icon loading"></ik-icon>
    <div class="content" v-if="!circle">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from "vue";
import Icon from "../../icon";
export default {
  name: "IkButton",
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    circle: { type: Boolean, default: false },
  },
  components: {
    "ik-icon": Icon,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const _className = this.$el.className;
    const _classList = this.$el.classList;
    _className.match(/circle/g) &&
      (() => {
        _classList.remove(_className.match(/icon-(left|right)/g));
        _classList.add("padding-0");
        const farther = this.$el;
        const child = this.$el.children[0];
        child.style.setProperty("margin", "0");
        farther.style.setProperty("width", "32px");
        farther.style.setProperty("height", "32px");
      })();
  },
};
</script>

<style lang="scss">
$button-height: 32px;
$font-size: 14px;
$button-color: #fff;
$button-bg: #409eff;
$button-bg-focus: #3a8ee6;
$border-radius: 0.4rem;
$border-color: #409eff;
$border-color-active: #3a8ee6;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.f-box {
  display: inline-flex;
  vertical-align: middle;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.ik-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1rem;
  border-radius: $border-radius;
  border: 0.1rem solid $border-color;
  background: $button-bg;
  color: $button-color;
  line-height: $font-size;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1 !important;
    background: $border-color-active !important;
    border: 0.1rem solid $border-color-active;
  }
  &:focus {
    opacity: 0.8;
    outline: none;
  }
  > ._icon {
    display: flex;
    align-items: center;
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > ._icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
}
.circle {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.padding-0 {
  padding: 0;
}
</style>
