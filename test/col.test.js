const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/components/grid/col/src/col.vue'
Vue.config.productionTip = false
Vue.config.devtools = false
describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
  describe('props', () => {
    let vm, testDiv
    const Constructor = Vue.extend(Col)
    testDiv = document.createElement('div')
    document.body.appendChild(testDiv)
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置 span.', () => {
      vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(testDiv)
      const rowEle = vm.$el
      expect(rowEle.classList.contains('ik-col--1')).to.be.true
    })
    it('可以设置 offset.', () => {
      vm = new Constructor({
        propsData: {
          offset: 1
        }
      }).$mount(testDiv)
      const rowEle = vm.$el
      expect(rowEle.classList.contains('ik-col--offset-1')).to.be.true
    })
    it('可以设置 ipad.', () => {
      vm = new Constructor({
        propsData: {
          ipad: {span: 24, offset: 1}
        }
      }).$mount(testDiv)
      const rowEle = vm.$el
      expect(rowEle.classList.contains('ik-col--ipad-24')).to.be.true
      expect(rowEle.classList.contains('ik-col--offset-ipad-1')).to.be.true
    })
    it('可以设置 ipad.', () => {
      vm = new Constructor({
        propsData: {
          ipad: {span: 24, offset: 1}
        }
      }).$mount(testDiv)
      const rowEle = vm.$el
      expect(rowEle.classList.contains('ik-col--ipad-24')).to.be.true
      expect(rowEle.classList.contains('ik-col--offset-ipad-1')).to.be.true
    })
    it('可以设置 pc.', () => {
      vm = new Constructor({
        propsData: {
          pc: {span: 24, offset: 1}
        }
      }).$mount(testDiv)
      const rowEle = vm.$el
      expect(rowEle.classList.contains('ik-col--pc-24')).to.be.true
      expect(rowEle.classList.contains('ik-col--offset-pc-1')).to.be.true
    })
    it('可以设置 narrowPc.', () => {
      vm = new Constructor({
        propsData: {
          narrowPc: {span: 24, offset: 1}
        }
      }).$mount(testDiv)
      const rowEle = vm.$el
      expect(rowEle.classList.contains('ik-col--narrow-pc-24')).to.be.true
      expect(rowEle.classList.contains('ik-col--offset-narrow-pc-1')).to.be.true
    })
    it('可以设置 widePc.', () => {
      vm = new Constructor({
        propsData: {
          widePc: {span: '24', offset: '1'}
        }
      }).$mount(testDiv)
      const rowEle = vm.$el
      expect(rowEle.classList.contains('ik-col--wide-pc-24')).to.be.true
      expect(rowEle.classList.contains('ik-col--offset-wide-pc-1')).to.be.true
    })
  })
})