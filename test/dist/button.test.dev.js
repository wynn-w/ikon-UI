"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _button = _interopRequireDefault(require("../src/components/button.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-09 14:50:05
 * @LastEditTime: 2020-12-09 23:46:11
 * @LastEditors: wynn-w
 */
var expect = chai.expect;
_vue["default"].config.productionTip = false;
_vue["default"].config.devtools = false; // describe('A spec suite', function() {
//   it('isNum() should work fine.', function() {
//     expect(isNum(1)).toBe(true)
//     expect(isNum('1')).toBe(false)
//   })
// });

describe('Button', function () {
  // it('存在.', () => {
  //   expect(Button).to.exist
  // })
  it('可以设置icon.', function () {
    var Constructor = _vue["default"].extend(_button["default"]);

    var vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount();
    var useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-seteddtings');
    vm.$destroy();
  });
  it('可以设置loading.', function () {
    var Constructor = _vue["default"].extend(_button["default"]);

    var vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    }).$mount();
    var useElements = vm.$el.querySelectorAll('use');
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading');
    vm.$destroy();
  });
  it('icon 默认的 order 是 1', function () {
    var div = document.createElement('div');
    document.body.appendChild(div);

    var Constructor = _vue["default"].extend(_button["default"]);

    var vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount(div);
    var icon = vm.$el.querySelector('svg');
    expect(getComputedStyle(icon).order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
  });
  it('设置 iconPosition 可以改变 order', function () {
    var div = document.createElement('div');
    document.body.appendChild(div);

    var Constructor = _vue["default"].extend(_button["default"]);

    var vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div);
    var icon = vm.$el.querySelector('svg');
    expect(getComputedStyle(icon).order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
  });
  it('点击 button 触发 click 事件', function () {
    var Constructor = _vue["default"].extend(_button["default"]);

    var vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount();
    var callback = sinon.fake();
    vm.$on('click', callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
});