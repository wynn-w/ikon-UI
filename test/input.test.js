const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/form/input.vue'
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
    afterEach(() => {
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
    const eventList = ['change', 'focus', 'blur']
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    for (const eventName of eventList) {
      it(`可以触发 ${eventName} 事件`, () => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        const callback1 = sinon.fake();
        vm.$on(eventName, callback, callback1)
        const event = new Event(eventName)
        const useElement = vm.$el.querySelector('input')
        Object.defineProperty(
          event, 'target', {
          value: { value: '通过' },
          enumerable: true
        }
        )
        useElement.dispatchEvent(event)
        expect(callback, callback1).to.have.been.calledWith(event, '通过')
      })
    }
    it(`可以触发 input 事件`, () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake();
      vm.$on('input', callback)
      const event = new Event('input')
      const useElement = vm.$el.querySelector('input')
      Object.defineProperty(
        event, 'target', {
        value: { value: '通过' },
        enumerable: true
      }
      )
      useElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('通过')
    })
  })
})