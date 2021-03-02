const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/components/form/button/src/button'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Button', () => {

  it('存在.', () => {
    expect(Button).to.exist
  })

  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#ik-icon-setting')
    vm.$destroy()
  })

  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#ik-icon-loading')
    vm.$destroy()
  })

  it('icon 默认 order 是 1 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })

  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
      }
    }).$mount()

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
    vm.$destroy()
  })
  // 新增
  it('可以设置 circle.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
        circle:true
      }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).borderRadius).to.eq('50%')
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以设置 round.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
        round: true
      }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).borderRadius).to.eq('20px')
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以设置 plain.', () => {
    // hover这种状态不知道怎么测，且 plain 依赖 size。
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
        plain: true,
        type: "primary"
      }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).backgroundColor).to.eq('rgb(236, 245, 255)')
    expect(getComputedStyle(vm.$el).borderColor).to.eq('rgb(179, 216, 255)')
    expect(getComputedStyle(vm.$el).color).to.eq('rgb(64, 158, 255)')
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以设置 size.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'ik-icon-setting',
        size: "mini"
      }
    }).$mount(div);
    expect(getComputedStyle(vm.$el).padding).to.eq('6px 12px')
    vm.$el.remove()
    vm.$destroy()
  })
})