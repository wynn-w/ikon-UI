<template>
  <div class="source">
    <ul class="icon-list">
      <li
        v-for="(item, index) in iconList"
        :key="index"
      >
        <span class="box">
          <div class="icon-wrap">
            <ik-icon :name="`ik-icon-${item}`"></ik-icon>
          </div>
          <span class="ik-icon-name-wrap">{{ `ik-icon-${item}` }}</span>
        </span>
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        "download",
        "setting",
        "delete",
        "search",
        "edit",
        "share",
        "plus",
        "minus",
        "loading",
        "more",
        "success",
        "info",
        "error",
        "eye-open",
        "eye-close",
        "top",
        "right",
        "bottom",
        "left",
      ],
    };
  },
};
</script>

<style lang="scss">
.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  > li {
    > .box {
      line-height: normal;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, SimSun, sans-serif;
      color: #99a9bf;
      transition: color 0.15s linear;
      > .icon-wrap {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color 0.15s linear;
      }
      > .ik-icon-name {
        display: inline-block;
        padding: 0 3px;
        height: 1em;
      }
    }

    &:hover {
      > .box {
        color: #5cb6ff;
        > .icon-wrap {
          color: #5cb6ff;
        }
      }
    }
  }
}
.source > ul:not(.timeline) {
  margin: 10px 0;
  padding: 0 0 0 20px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2em;
}
.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
}
.clear {
  clear: both;
}
.icon-list li:after,
.icon-list li span {
  display: inline-block;
  vertical-align: middle;
}
</style>
