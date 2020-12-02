<template>
  <div>
    <button class="j-button f-box">
      <svg v-if="icon" class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "j-button",
  props: ["icon"],
  data() {
    return {};
  },
  mounted(){}
};
</script>

<style lang="scss">
.f-box{
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
    opacity: .8;
  }
  &:active {
    opacity: 1 !important;
    background: var(--border-color-active) !important;
    border: 0.1rem solid var(--border-color-active);
  }
  &:focus {
    opacity: .8;
    outline: none;
  }
}
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
