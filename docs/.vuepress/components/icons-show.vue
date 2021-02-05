<template>
  <div class="icon-box-wrapper">
    <div class="sourse">
      <div class="icon-show-wrapper">
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="ik-setting"></ik-icon>
          </div>
        </div>
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="ik-delete"></ik-icon>
          </div>
        </div>
        <div class="show-icon">
          <ik-button :loading="true"> 加载中</ik-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "../../../src/components/icon";
import Button from "../../../src/components/form/button/button";
export default {
  components: {
    "ik-icon": Icon,
    "ik-button": Button,
  },
  data() {
    return {
      names: [
        ["ik-bottom", "ik-top", "ik-left", "ik-right"],
        ["ik-setting", "ik-loading", "ik-download", "ik-delete"],
        ["ik-edit", "ik-Shapex", "ik-success"],
      ],
    };
  },
};
</script>

<style lang="scss">
.icon-show-wrapper {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  .show-icon {
    display: flex;
    // justify-content: center;
    align-items: center;
    margin: 0.5em 2em 0.5em 0;
    &:first-child {
      margin-left: 1rem;
    }
    > .icon-wrapper{
      > svg{
        transform: scale(2);
      }
    }
  }
}
</style>
