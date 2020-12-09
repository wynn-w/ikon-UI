<!--
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-03 10:54:15
 * @LastEditTime: 2020-12-09 17:16:55
 * @LastEditors: wynn-w
-->

<template>
  <button
    class="j-button f-box"
    :class="[
      { [`icon-${iconPosition}`]: true },
      {
        circle: circle,
      },
    ]"
    @click="$emit('show', showLoading)"
  >
    <j-icon :name="icon" v-if="icon && !loading" class="_icon"></j-icon>
    <j-icon name="loading" v-if="loading" class="_icon loading"></j-icon>
    <div class="content" v-if="!circle">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from 'vue'
import Icon from "./icon";
export default {
  name: "j-button",
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
    "j-icon": Icon,
  },
  data() {
    return {
      showLoading: this.loading,
    };
  },
  methods: {},
  // computed:{}
  mounted() {
    const _className = this.$el.className;
    const _classList = this.$el.classList
    _className.match(/circle/g) &&
      (() => {
        _classList.remove(_className.match(/icon-(left|right)/g));
        _classList.add("padding-0");
        const farther = this.$el
        const child = this.$el.children[0]
        child.style.setProperty("margin", "0")
        farther.style.setProperty("width", "32px")
        farther.style.setProperty("height", "32px")
      })();
  },
};
</script>

<style lang="scss">
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

.j-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1rem;
  border-radius: var(--border-radius);
  border: 0.1rem solid var(--border-color);
  background: var(--button-bg);
  color: var(--button-color);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1 !important;
    background: var(--border-color-active) !important;
    border: 0.1rem solid var(--border-color-active);
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
