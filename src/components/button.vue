<!--
 * @Author: your name
 * @Date: 2020-12-03 08:07:58
 * @LastEditTime: 2020-12-03 10:02:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ikon-UI\src\components\button.vue
-->
<template>
  <div>
    <button class="j-button f-box" :class="{ [`icon-${iconPosition}`]: true }">
      <div class="_icon">
        <svg v-if="icon" class="icon" aria-hidden="true">
          <use :xlink:href="`#i-${icon}`"></use>
        </svg>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "j-button",
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value){
        return !(value !== "left" && value !== "right")
      }
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss">
.f-box {
  display: flex;
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
}
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
