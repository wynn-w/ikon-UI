const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/form/input/src/input.vue'
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
          expect(vm.value).to.equal('value')
        })
    
        it('可以设置disabled', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              disabled: true
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.disabled).to.equal(true)
        })
    
        it('可以设置readonly', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              readonly: true
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.readOnly).to.equal(true)
        })
    
        it('可以设置 type.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              type: 'password'
            }
          }).$mount()
          // 好像不和情理了
          expect(vm.currentType).to.equal('password')
        })
    
        it('可以设置 size.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              size: 'medium',
            }
          }).$mount()
          const useElement = vm.$el
          expect(useElement.classList.contains("ik-input--medium")).is.true
        })
        it('可以设置 showPassword，且图标初始状态为 ik-icon-eye-close.', (done) => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              showPassword: true,
            }
          }).$mount()
          const iconWrapper = vm.$el.querySelector('.ik-input__icon-wrapper__eye')
          const input = vm.$el.getElementsByTagName('input')[0]
          const icon = vm.$el.querySelector('use')
          expect(icon.getAttribute('xlink:href')).to.equal('#ik-icon-eye-close')
          expect(vm.currentType).to.equal('password')
          iconWrapper.click()
          setTimeout(() => {
            expect(icon.getAttribute('xlink:href')).to.equal('#ik-icon-eye-open')
            expect(input.type).to.equal('text')
            done()
          })
        })
        it('可以设置 clearable，且点击后 value 会被清空', (done) => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              clearable: true,
            }
          }).$mount()
          const iconWrapper = vm.$el.querySelector('.ik-input__icon-wrapper__clear')
          const icon = vm.$el.querySelector('use')
          expect(icon.getAttribute('xlink:href')).to.equal('#ik-icon-error')
          expect(vm.value).to.equal('value')
          iconWrapper.click()
          setTimeout(() => {
            expect(vm.value).to.equal('')
            done()
          })
        })
        it('可以设置 size.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              id: 'id1',
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.id).to.equal("id1")
        })
        it('可以设置 name.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              name: 'name',
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.name).to.equal("name")
        })
        it('可以设置 placeholder.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              placeholder: 'placeholder',
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.placeholder).to.equal("placeholder")
        })
        it('可以设置 step.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              step: '2',
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.step).to.equal("2")
        })
        it('可以设置 maxlength.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              maxlength: '9',
            }
          }).$mount()
          expect(vm.currentMaxLength).to.equal("9")
        })
        it('可以设置 step.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              min: '2',
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.min).to.equal("2")
        })
        it('可以设置 max.', () => {
          vm = new Constructor({
            propsData: {
              value: 'value',
              max: '2',
            }
          }).$mount()
          const useElement = vm.$el.querySelector('input')
          expect(useElement.max).to.equal("2")
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
        vm = new Constructor({propsData: {
            value: 'value'
          }}).$mount()
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
      vm = new Constructor({propsData: {
        value: 'value'
      }}).$mount()
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