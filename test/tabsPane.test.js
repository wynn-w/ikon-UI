import Vue from 'vue'
import TabsPane from "../src/components/tabs/tabsPane/src/tabsPane";

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPane', () => {
  it('存在.', () => {
    expect(TabsPane).to.exist
  })
})