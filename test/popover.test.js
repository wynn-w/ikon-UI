const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/components/popover/index'
Vue.use(Popover)
Vue.config.productionTip = false
Vue.config.devtools = false
describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  describe('props', () => {
    let vm, testDiv
    const Constructor = Vue.extend(Popover)
    testDiv = document.createElement('div')
    document.body.appendChild(testDiv)
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置 position.', (done) => {
      testDiv.innerHTML =
        `
        <ik-popover position="top" content="顶部文字">
          <button>顶部 <button>
        </ik-popover>
      `
      vm = new Vue({
        el: testDiv
      })
      const button = vm.$el.querySelector(`button`)
      button.click()
      setTimeout(() => {
        const popover = document.body.querySelector(`.position-top`)
        expect(popover.innerText).to.eq("顶部文字")
        done()
      })
    })
    // 剩下的有空再来
  })
})