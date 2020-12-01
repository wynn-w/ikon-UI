<template>
  <div>
    <input type="button" value="设置" class="j-button" />
  </div>
</template>

<script>
export default {
  name: "j-button",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.j-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1rem;
  border-radius: var(--border-radius);
  border: 0.1rem solid var(--border-color);
  background: var(--button-bg);
  color: var(--button-color);
  &:hover {
    background: var(--button-bg-hover);
    border: 0.1rem solid var(--border-color);
  }
  &:active {
    background-color: var(--button-bg-active);
    border: 0.1rem solid var(--border-color-active);
  }
  &:focus {
    outline: none;
  }
}
</style>
