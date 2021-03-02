const expect = chai.expect;
import Vue from 'vue'
import ButtonGroup from '../src/components/form/buttonGroup/src/buttonGroup'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('ButtonGroup', () => {
  it('存在.', () => {
    expect(ButtonGroup).to.exist
  })
})