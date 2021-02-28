import Vue from 'vue'
import TabsHead from "../src/components/tabs/tabsHead/src/tabsHead";

Vue.component("ik-tabs-body", TabsHead)

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsHead', () => {
  it('存在.', () => {
    expect(TabsHead).to.exist
  })
})