<!--
 * @Author: your name
 * @Date: 2020-12-01 22:10:50
 * @LastEditTime: 2020-12-02 16:07:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ikon-UI\src\App.vue
-->
<template>
  <div id="app">
    <div class="btn-box">
      <div class="btn-box_simple">
        <p>普通按钮</p>
        <div class="btn-box_show">
          <j-button class="right">按钮</j-button>
          <j-button>按钮</j-button>
        </div>
      </div>
      <div class="btn-box_icon">
        <p>带图标按钮</p>
        <div class="btn-box_show">
          <j-button icon="setting">设置</j-button>
        </div>
      </div>
    </div>
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

<style lang="scss">
.btn-box {
  display: flex;
  flex-direction: column;
  .btn-box_simple {
    margin: 1em;
  }
  .btn-box_icon {
    margin: 1em;
  }
  .btn-box_show{
    display: flex;
    flex-direction: row;
    margin-top: .5em;
  }
}
.right{
  margin-right: 1em;
}
</style>
