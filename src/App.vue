<template>
  <div id="app">
    <j-button></j-button>
  </div>
</template>

<script>
import jButton from "./components/button";
export default {
  name: "app",
  components: {
    "j-button": jButton,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
