<template>
  <div class="icon-box-wrapper">
    <div class="sourse">
      <div class="icon-show-wrapper">
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="i-setting" color="#66b1ff"></ik-icon>
          </div>
        </div>
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="i-delete" color="#fc5531"></ik-icon>
          </div>
        </div>
        <div class="show-icon">
          <div class="icon-wrapper">
            <ik-icon name="i-edit" color="#3eaf7c"></ik-icon>
          </div>
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
        ["i-bottom", "i-top", "i-left", "i-right"],
        ["i-setting", "i-loading", "i-download", "i-delete"],
        ["i-edit", "i-Shapex", "i-success"],
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
    > .icon-wrapper {
      > svg {
        transform: scale(2);
      }
    }
  }
}
</style>
