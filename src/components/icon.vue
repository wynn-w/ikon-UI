<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "IkIcon",
  props: {
    name: {
      type: String,
      validator(value) {
        return typeof value == "string";
      },
    },
  },
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
}
</style>
