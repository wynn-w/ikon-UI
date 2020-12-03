<!--
 * @Author: your name
 * @Date: 2020-12-01 22:10:50
 * @LastEditTime: 2020-12-04 00:40:00
 * @LastEditors: wynn-w
 * @Description: In User Settings Edit
 * @FilePath: \ikon-UI\src\App.vue
-->
<template>
  <div id="app">
    <div class="btn-box">
      <div class="btn-box_simple">
        <p>普通按钮</p>
        <div class="btn-box_show">
          <div class="btn-box_show-item">
            <j-button>按钮</j-button>
          </div>
          <div class="btn-box_show-item">
            <j-button>按钮</j-button>
          </div>
        </div>
      </div>
      <div class="btn-box_icon">
        <p>带图标按钮</p>
        <div class="btn-box_show">
          <div class="btn-box_show-item">
            <j-button icon="setting">设置</j-button>
          </div>
          <div class="btn-box_show-item">
            <j-button icon="setting" iconPosition="right">设置</j-button>
          </div>
          <div class="btn-box_show-item">
            <j-button :loading="true" iconPosition="left">设置</j-button>
          </div>
          <div class="btn-box_show-item">
            <j-button :loading="true" iconPosition="right">设置</j-button>
          </div>
          <div class="btn-box_show-item">
            <j-button
              :loading="isLoding1"
              iconPosition="right"
              @show="isLoding1 = !isLoding1"
              >设置</j-button
            >
          </div>
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
    return {
      isLoding1: true,
    };
  },
  methods: {},
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
  .btn-box_show {
    display: flex;
    flex-direction: row;
    margin-top: 0.5em;
  }
}
.btn-box_show-item {
  margin-right: 0.5em;
}
</style>
