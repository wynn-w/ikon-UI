import Vue from 'vue'
import Tabs from '../src/components/tabs/tabs.vue'
import TabsBody from "../src/components/tabs/tabsBody";
import TabsHead from "../src/components/tabs/tabsHead";
import TabsItem from "../src/components/tabs/tabsItem";
import TabsPane from "../src/components/tabs/tabsPane";

Vue.component("ik-tabs", Tabs)
Vue.component("ik-tabs-pane", Tabs)
Vue.component("ik-tabs-body", TabsBody)
Vue.component("ik-tabs-head", TabsHead)
Vue.component("ik-tabs-item", TabsItem)
Vue.component("ik-tabs-pane", TabsPane)

const expect = chai.expect
const should = require('chai').should()

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', (done) => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  // how to catch async error
  describe('props', () => {
    let vm, testDiv
    const Constructor = Vue.extend(Tabs)
    testDiv = document.createElement('div')
    document.body.appendChild(testDiv)
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置 selected ', (done) => {
      testDiv.innerHTML =
        `
      <ik-tabs selected="headItem1">
                <ik-tabs-head>
                  <ik-tabs-item name="headItem1">headItem1</ik-tabs-item>
                  <ik-tabs-item name="headItem2">headItem2</ik-tabs-item>
                  <ik-tabs-item name="headItem3">headItem3</ik-tabs-item>
                </ik-tabs-head>
                <ik-tabs-body>
                  <ik-tabs-pane name="headItem1" >pane1</ik-tabs-pane>
                  <ik-tabs-pane name="headItem2" >pane2</ik-tabs-pane>
                  <ik-tabs-pane name="headItem3" >pane3</ik-tabs-pane>
                </ik-tabs-body>
              </ik-tabs>
      `
      vm = new Vue({
        el: testDiv
      })
      vm.$nextTick(() => {
        const headItem = vm.$el.querySelector(`.tabs-item[data-itemName='headItem1']`)
        const bodyPane = vm.$el.querySelector(`.tabs-pane[data-paneName='headItem1']`)
        expect(headItem.classList.contains('active')).to.be.true
        expect(bodyPane.classList.contains('active')).to.be.true
        done()
      })
    })
    it('可以设置 direction ', () => {
      testDiv.innerHTML =
        `
      <ik-tabs selected="headItem1" direction="vertical">
                <ik-tabs-head>
                  <ik-tabs-item name="headItem1">headItem1</ik-tabs-item>
                  <ik-tabs-item name="headItem2">headItem2</ik-tabs-item>
                  <ik-tabs-item name="headItem3">headItem3</ik-tabs-item>
                </ik-tabs-head>
                <ik-tabs-body>
                  <ik-tabs-pane name="headItem1" >pane1</ik-tabs-pane>
                  <ik-tabs-pane name="headItem2" >pane2</ik-tabs-pane>
                  <ik-tabs-pane name="headItem3" >pane3</ik-tabs-pane>
                </ik-tabs-body>
              </ik-tabs>
      `
      vm = new Vue({
        el: testDiv
      })
      const hasTabsVertical = vm.$el.querySelector(`.tabs--vertical`)
      const hasTabsHeadVertical = vm.$el.querySelector(`.tabs-head--vertical`)
      should.exist(hasTabsVertical)
      should.exist(hasTabsHeadVertical)
    })
  })
})