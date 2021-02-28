import Vue from 'vue'
import TabsBody from "../src/components/tabs/tabsBody/src/tabsBody";

Vue.component("ik-tabs-body", TabsBody)

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsBody', () => {
  it('存在.', () => {
    expect(TabsBody).to.exist
  })
})