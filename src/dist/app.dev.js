"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _button = _interopRequireDefault(require("./components/button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].component('j-button', _button["default"]);

new _vue["default"]({
  el: "#app"
});