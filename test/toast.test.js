const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast.vue'
Vue.config.productionTip = false
Vue.config.devtools = false
describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {
    let vm, testDiv
    const Constructor = Vue.extend(Toast)
    testDiv = document.createElement('div')
    document.body.appendChild(testDiv)
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置 autoClose.', (done) => {
      vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(testDiv)
      vm.$on('beforeClose', () => {
        expect(document.body.contains(vm.$el)).to.be.false
        done()
      })
    })
    it('可以设置 closeButton.', () => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          text: "关关",
          callback
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.be.eq("关关")
      closeButton.click()
      expect(callback).to.have.called
    })
  })
})