<!--
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-01 22:10:50
 * @LastEditTime: 2020-12-28 23:18:51
 * @LastEditors: wynn-w
-->
<template>
  <div id="app">
    <div class="btn-box">
      <div class="btn-box_simple">
        <p>普通按钮</p>
        <div class="btn-box_show">
          <div class="btn-box_show-item">
            <ik-button>按钮</ik-button>
          </div>
          <div class="btn-box_show-item">
            <ik-button>按钮</ik-button>
          </div>
        </div>
      </div>
      <div class="btn-box_icon">
        <p>带图标按钮</p>
        <div class="btn-box_show">
          <div class="btn-box_show-item">
            <ik-button icon="setting">设置</ik-button>
          </div>
          <div class="btn-box_show-item">
            <ik-button icon="setting" iconPosition="right">设置</ik-button>
          </div>
          <div class="btn-box_show-item">
            <ik-button :loading="true" iconPosition="left">设置</ik-button>
          </div>
          <div class="btn-box_show-item">
            <ik-button :loading="true" iconPosition="right">设置</ik-button>
          </div>
        </div>
      </div>
      <div class="btn-box_icon">
        <p>点击切换加载按钮</p>
        <div class="btn-box_show">
          <div class="btn-box_show-item">
            <ik-button
              :loading="isLoding1"
              iconPosition="right"
              @click="isLoding1 = !isLoding1"
              title="点击出现/隐藏loading"
              >设置</ik-button
            >
          </div>
          <div class="btn-box_show-item">
            <ik-button
              icon="setting"
              :loading="isLoding2"
              iconPosition="right"
              @click="isLoding2 = !isLoding2"
              title="点击出现/隐藏loading"
              >设置</ik-button
            >
          </div>
        </div>
      </div>
      <div class="btn-box_icon">
        <p>成组按钮</p>
        <div class="btn-box_show">
          <div class="btn-box_show-item">
            <ik-button-group>
              <ik-button icon="left">上一页</ik-button>
              <ik-button>更多</ik-button>
              <ik-button icon="right" iconPosition="right">下一页</ik-button>
            </ik-button-group>
          </div>
        </div>
      </div>
      <div class="btn-box_icon">
        <p>圆型按钮</p>
        <div class="btn-box_show">
          <div class="btn-box_show-item">
              <ik-button icon="edit" circle></ik-button>
          </div>
          <div class="btn-box_show-item">
              <ik-button icon="delete" circle></ik-button>
          </div>
        </div>
      </div>
    </div>
    <div id="test" ></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isLoding1: true,
      isLoding2: false,
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
