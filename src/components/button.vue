<template>
  <div>
    <button class="j-button f-box" >
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
  props: ["icon","circle"],
  data() {
    return {};
  },
  mounted(){
    // console.log('circle: '+this.circle)
  }
};
</script>

<style lang="scss">
.f-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.circle{
  border-radius: 50%;
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
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
