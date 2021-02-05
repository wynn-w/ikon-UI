<template>
  <div class="icon-box-wrapper">
    <div class="sourse">
      <div class="icon-show-wrapper">
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="ik-setting" color="#66b1ff"></ik-icon>
          </div>
        </div>
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="ik-delete" color="#fc5531"></ik-icon>
          </div>
        </div>
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="ik-edit" color="#3eaf7c"></ik-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "../../../src/components/icon";
export default {
  components: {
    "ik-icon": Icon
  }
};
</script>

<style lang="scss">
.icon-show-wrapper {
  min-height: 46px;
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
    > .icon-wrapper {
      > svg {
        transform: scale(2);
      }
    }
  }
}
</style>
