const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/input.vue'
import { describe } from 'mocha';

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('可以设置value', () => {
      vm = new Constructor({
        propsData: {
          value: 'value'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.value).to.equal('value')
    })

    it('可以设置disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.disabled).to.equal(true)
    })

    it('可以设置readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.readOnly).to.equal(true)
    })

    it('可以设置 error 样式', () => {
      vm = new Constructor({
        propsData: {
          error: "错误"
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      const useElementP = vm.$el.querySelector('p')
      const useElementParent = useElement.parentNode
      expect(useElementParent.classList.contains('error')).to.equal(true)
      expect(useElementP.textContent).to.equal('错误')
    })
  })
  describe('event', () => {
    const Constructor = Vue.extend(Input)
    const eventList = ['change', 'input', 'focus', 'blur']
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    for (const eventName of eventList) {
      it(`可以触发 ${eventName} 事件`, () => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on(eventName, callback)
        const event = new Event(eventName)
        const useElement = vm.$el.querySelector('input')
        useElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })
    }
  })
})