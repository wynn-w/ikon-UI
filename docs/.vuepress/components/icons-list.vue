<template>
  <div class="icon-box-wrapper">
    <div class="sourse">
      <div class="icon-box">
        <ik-row v-for="(item, index) in names" :key="index" class="assa">
          <ik-col
            span="6"
            v-for="(iconName, iconIndex) in item"
            :key="iconIndex"
          >
            <div class="icon-box__item">
              <div class="icon-box__item__icon">
                <ik-icon :name="iconName" color="#000"></ik-icon>
              </div>
              <span class="icon-box__item__icon-name">{{ iconName }}</span>
            </div>
          </ik-col>
        </ik-row>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "../../../src/components/icon";
import Row from "../../../src/components/grid/row";
import Col from "../../../src/components/grid/col";
export default {
  components: {
    "ik-icon": Icon,
    "ik-row": Row,
    "ik-col": Col,
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
.icon-box {
  width: auto;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .icon-box__item {
    min-width: 6em;
    min-height: 6em;
    border: 1px solid #faa;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    line-height: 0;
    &:first-child{
      margin-left: -1px;
      margin-bottom: -1px;
    }
    > .icon-box__item__icon {
      padding-top: 1em;
      padding-bottom: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      > svg {
        transform: scale(2);
      }
    }
    > .icon-box__item__icon-name {
      text-align: center;
    }
  }
  
}
</style>
