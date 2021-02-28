import Vue from 'vue'
import Tabs from '../src/components/tabs/tabs/src/tabs'
import TabsBody from "../src/components/tabs/tabsBody/src/tabsBody";
import TabsHead from "../src/components/tabs/tabsHead/src/tabsHead";
import TabsItem from "../src/components/tabs/tabsItem/src/tabsItem";
import TabsPane from "../src/components/tabs/tabsPane/src/tabsPane";

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

describe('Tabs', () => {
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
      setTimeout(() => {
        const headItem = vm.$el.querySelector(`.ik-tabs-item[data-itemName='headItem1']`)
        const bodyPane = vm.$el.querySelector(`.ik-tabs-pane[data-paneName='headItem1']`)
        expect(headItem.classList.contains('active')).to.be.true
        expect(bodyPane.classList.contains('active')).to.be.true
        done()
      })
    })
    it('可以设置 direction ', () => {
      testDiv.innerHTML =
        `
      <ik-tabs selected="headItem1" direction="left">
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
      const hasTabsLeft = vm.$el.querySelector(`.ik-tabs--left`)
      const hasTabsHeadLeft = vm.$el.querySelector(`.ik-tabs-head--left`)
      should.exist(hasTabsLeft)
      should.exist(hasTabsHeadLeft)
    })
    // it('可以设置 width. ', (done) => {
    //   testDiv.innerHTML =
    //     `
    //   <ik-tabs selected="headItem1" direction="left" width="150px">
    //             <ik-tabs-head>
    //               <ik-tabs-item name="headItem1">headItem1</ik-tabs-item>
    //               <ik-tabs-item name="headItem2">headItem2</ik-tabs-item>
    //               <ik-tabs-item name="headItem3">headItem3</ik-tabs-item>
    //             </ik-tabs-head>
    //             <ik-tabs-body>
    //               <ik-tabs-pane name="headItem1" >pane1</ik-tabs-pane>
    //               <ik-tabs-pane name="headItem2" >pane2</ik-tabs-pane>
    //               <ik-tabs-pane name="headItem3" >pane3</ik-tabs-pane>
    //             </ik-tabs-body>
    //           </ik-tabs>
    //   `
    //   vm = new Vue({
    //     el: testDiv
    //   })
    //   vm.$nextTick(() => {
    //     setTimeout(() => {
    //       const hasTabsVertical = vm.$el.querySelector(`.ik-tabs-body >.active`)
    //       console.log(hasTabsVertical.style);
    //       done()
    //     }, 1000)
    //   })
      // const hasTabsHeadVertical = vm.$el.querySelector(`.ik-tabs-head--left`)
      // should.exist(hasTabsVertical)
      // should.exist(hasTabsHeadVertical)
    // })
  })
})