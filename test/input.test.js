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
  describe('props',()=>{
    it('可以设置value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: 'value'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.value).to.equal('value')
      vm.$destroy()
    })
  
    it('可以设置disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.disabled).to.equal(true)
      vm.$destroy()
    })
    
    it('可以设置readonly', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.readOnly).to.equal(true)
      vm.$destroy()
    })
    
    it('可以设置 error 样式', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: "错误"
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      const useElementP = vm.$el.querySelector('p')
      const useElementParent = useElement.parentNode
      expect(useElementParent.classList.contains('error')).to.equal(true)
      expect(useElementP.textContent).to.equal('错误')
      vm.$destroy()
    })
  })
})