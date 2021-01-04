const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/row.vue'
import Col from '../src/components/col.vue'
Vue.component("ik-row", Row)
Vue.component("ik-col", Col)
Vue.config.productionTip = false
Vue.config.devtools = false
describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  let vm, testDiv
  beforeEach(() => {
      const colConstructor = Vue.extend(Col)
      const rowConstructor = Vue.extend(Row)
      testDiv = document.createElement('div')
    })
  
  it('可以设置 gutter.', (done) => {
    document.body.appendChild(testDiv)
    testDiv.innerHTML = ` 
            <ik-row gutter="10" >
              <ik-col span="20"></ik-col>
              <ik-col span="4"></ik-col>
            </ik-row>`
    vm = new Vue({
        el: testDiv
      })
      setTimeout(() => {
        const row = vm.$el.querySelector('.row')
        const cols = vm.$el.querySelectorAll('.col')
        console.log(row.outerHTML);
        // expect(getComputedStyle(row).maringLeft).to.equal('-5px')
        // expect(getComputedStyle(row).maringRight).to.equal('-5px')
        expect(getComputedStyle(cols[0]).paddingRight).to.equal('5px')
        expect(getComputedStyle(cols[1]).paddingLeft).to.equal('5px')
        vm.$destroy()
        done()
      }, 0);
  })
  it('可以设置 align.', (done) => {
    document.body.appendChild(testDiv)
    testDiv.innerHTML = ` 
            <ik-row align="center" >
              <ik-col span="20"></ik-col>
              <ik-col span="4"></ik-col>
            </ik-row>`
    vm = new Vue({
        el: testDiv
      })
      setTimeout(() => {
        const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(row).justifyContent).to.equal('center')
        vm.$destroy()
        done()
      }, 0);
  })
})