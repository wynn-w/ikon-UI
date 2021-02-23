<template>
  <div class="ik-input" :class="[classSize, classSuffix]">
    <input
      :id="id"
      :name="name"
      :value="currentValue"
      :disabled="disabled"
      :readonly="readonly"
      :type="currentType"
      :step="step"
      :min="min"
      :max="max"
      :size="size"
      :showPassword="showPassword"
      :clearable="clearable"
      :maxlength="currentMaxLength"
      :placeholder="placeholder"
      @change="$emit('change', $event, $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event, $event.target.value)"
      @blur="$emit('blur', $event, $event.target.value)"
    />
    <div class="ik-input__icon-wrapper" ref="ikIputIcon">
      <div
        v-if="clearable && currentValue != ''"
        class="ik-input__icon-wrapper__clear"
        @click="clearValue"
      >
        <ik-icon name="ik-icon-error"></ik-icon>
      </div>
      <div
        v-if="showPassword"
        @click="changeEye"
        class="ik-input__icon-wrapper__eye"
      >
        <ik-icon :name="icon"></ik-icon>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../icon";
export default {
  name: "ik-input",
  components: {
    [Icon.name]: Icon,
  },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
    readonly: {
      type: Boolean,
      defalut: false,
    },
    type: {
      type: String,
      defalut: "text",
      validator(value) {
        return ["number", "text", "password"].indexOf(value) > -1;
      },
    },
    size: {
      type: String,
      validator(value) {
        return ["mini", "medium", "small"].indexOf(value) > -1;
      },
    },
    showPassword: {
      type: Boolean,
      defalut: false,
    },
    clearable: {
      type: Boolean,
      defalut: false,
    },
    id: String,
    name: String,
    placeholder: String,
    step: {
      type: [Number, String],
      validator(value) {
        if (value - 0 == value && !isNaN(value)) {
          return value;
        } else {
          return console.warn(
            `值 “${value}” 类型为 ${typeof value}，step 的期待值类型为 Number `
          );
        }
      },
    },
    maxlength: {
      type: [Number, String],
      validator(value) {
        if (value - 0 == value && !isNaN(value)) {
          return value;
        } else {
          return console.warn(
            `值 “${value}” 类型为 ${typeof value}，maxlength 的期待值类型为 Number `
          );
        }
      },
    },
    min: {
      type: [Number, String],
      validator(value) {
        if (value - 0 == value && !isNaN(value)) {
          return value;
        } else {
          return console.warn(
            `值 “${value}” 类型为 ${typeof value}，min 的期待值类型为 Number `
          );
        }
      },
    },
    max: {
      type: [Number, String],
      validator(value) {
        if (value - 0 == value && !isNaN(value)) {
          return value;
        } else {
          return console.warn(
            `值 “${value}” 类型为 ${typeof value}，max 的期待值类型为 Number `
          );
        }
      },
    },
  },
  computed: {
    getValue() {
      return this.changeValue();
    },
    // getType() {
    //   return this.changeType();
    // },
    classSize() {
      return this.size ? `ik-input--${this.size}` : "";
    },
    classSuffix() {
      return this.clearable || this.showPassword ? `ik-input--suffix` : "";
    },
  },
  data() {
    return {
      icon: `ik-icon-eye-close`,
      currentType: null,
      currentValue: null,
      currentMaxLength: null,
    };
  },
  mounted() {
    this.hasVModel();
    this.localtedPorps();
    this.setIconWrapperProperty();
  },
  methods: {
    hasVModel() {
      if (this.value === undefined) {
        this.currentMaxLength = 0;
        return console.warn(`组件 ${this.$options.name} 未绑定 v-model`);
      }
    },
    setIconWrapperProperty() {
      this.$refs.ikIputIcon.style.setProperty(
        "height",
        `${this.$el.scrollHeight}px`
      );
      if (this.readonly || this.disabled) {
        this.$refs.ikIputIcon.style.setProperty("z-index", -1);
      }
    },
    localtedPorps() {
      this.value && this.changeValue(this.value);
      this.type && (this.currentType = this.type);
      this.showPassword && (this.currentType = "password");
      this.maxlength && (this.currentMaxLength = this.maxlength);
    },
    clearValue() {
      this.changeValue("");
      // 通知外部
      this.$emit("change", this.currentValue);
      this.$emit("input", this.currentValue);
      this.$emit("focus", this.currentValue);
      this.$emit("blur", this.currentValue);
    },
    // changeMaxLength(value) {
    //   this.currentMaxLength = value === 0 ? value : this.maxlength;
    //   return this.currentMaxLength;
    // },
    changeValue(value) {
      this.currentValue = value === "" ? value : this.value;
      return this.currentValue;
    },
    // changeType(type) {
    //   this.currentType = type ? type : this.type;
    //   return this.currentType;
    // },
    changeEye() {
      if (this.icon === "ik-icon-eye-open") {
        this.icon = "ik-icon-eye-close";
        this.currentType = "password";
      } else {
        this.icon = "ik-icon-eye-open";
        this.size
          ? (this.currentType = this.size)
          : (this.currentType = "text");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 36px;
$height-medium: 34px;
$height-small: 32px;
$height-mini: 28px;
$border-color: #dcdfe6;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: #9edbff;
$red: #f1453e;
.ik-input {
  font-size: $font-size;
  display: inline-flex;
  flex-direction: row;
  height: $height;
  outline: none;
  font-size: $font-size;
  transition: all 0.1s;
  position: relative;
  cursor: pointer;

  &.ik-input--medium {
    height: $height-medium;
  }
  &.ik-input--small {
    height: $height-small;
  }
  &.ik-input--mini {
    height: $height-mini;
  }
  &.ik-input--suffix {
    > input {
      padding-right: 44px;
    }
  }
  > input {
    padding: 0 12px;
    border: 1px solid $border-color;
    border-radius: 4.6662px;
    color: #606266;
    background: #ffffff;
    outline: none;
    flex: 1;
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      border-color: #409eff;
      outline: none;
      box-shadow: 0 0 3.5px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
}
.ik-input__icon-wrapper {
  position: absolute;
  height: 100%;
  right: 5px;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > .ik-input__icon-wrapper__clear,
  .ik-input__icon-wrapper__eye {
    margin: 0 4px;
    transition: all 0.1s;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c0c4cc;
    &:hover,
    &:focus {
      color: #909399;
    }
  }
}
</style>
