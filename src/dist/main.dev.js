"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _button4 = _interopRequireDefault(require("./components/button"));

var _buttonGroup = _interopRequireDefault(require("./components/buttonGroup"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiSpies = _interopRequireDefault(require("chai-spies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_vue["default"].component("j-button", _button4["default"]);

_vue["default"].component("j-button-group", _buttonGroup["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app'); // 单元测试

_chai["default"].use(_chaiSpies["default"]);

var expect = _chai["default"].expect;

try {
  {
    var div = document.createElement("div");
    var test = document.getElementById("test");
    document.body.appendChild(div);

    var Constructor = _vue["default"].extend(_button4["default"]);

    var button = new Constructor({
      propsData: {
        icon: "download"
      }
    });
    button.$mount(div);
    var href = button.$el.querySelector("use").getAttribute('xlink:href');
    expect(href).to.eq("#i-download");
    var ariaHidden = button.$el.querySelector("svg").getAttribute('aria-hidden');
    expect(ariaHidden).to.eq("true");
    button.$el.remove();
    button.$destroy();
  }
  {
    var _div = document.createElement("div");

    var _test = document.getElementById("test");

    document.body.appendChild(_div);

    var _Constructor = _vue["default"].extend(_button4["default"]);

    var _button = new _Constructor({
      propsData: {
        icon: "delete",
        circle: true
      }
    });

    _button.$mount(_div);

    var _button$$el$querySele = _button.$el.querySelector("svg").parentNode.className.match(/circle/g),
        _button$$el$querySele2 = _slicedToArray(_button$$el$querySele, 1),
        ClassName = _button$$el$querySele2[0];

    expect(ClassName).to.equal("circle");

    _button.$el.remove();

    _button.$destroy();
  }
  {
    var _div2 = document.createElement("div");

    var _test2 = document.getElementById("test");

    document.body.appendChild(_div2);

    var _Constructor2 = _vue["default"].extend(_button4["default"]);

    var _button2 = new _Constructor2({
      propsData: {
        loading: false,
        icon: "delete"
      }
    });

    _button2.$mount(_div2);

    var _ClassName = _button2.$el.querySelector("svg").classList.contains("loading");

    expect(_ClassName).to.equal(false);

    _button2.$el.remove();

    _button2.$destroy();
  }
  {
    var _div3 = document.createElement("div");

    var _test3 = document.getElementById("test");

    document.body.appendChild(_div3);

    var _Constructor3 = _vue["default"].extend(_button4["default"]);

    var _button3 = new _Constructor3({
      propsData: {
        loading: true
      }
    });

    _button3.$mount(_div3); // 引入spies做间谍函数并监听它，如果被调用则说明点击测试通过


    var spy = _chai["default"].spy(function () {});

    _button3.$on('click', spy());

    _button3.$el.click();

    expect(spy).to.have.been.called();

    _button3.$el.remove();

    _button3.$destroy();
  }
} catch (error) {
  window.errors = [error];
} finally {
  window.errors && console.error(window.errors[0].message);
}