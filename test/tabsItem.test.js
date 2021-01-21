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

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', (done) => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  // how to catch async error
  describe('props', () => {
    let vm, testDiv
    const Constructor = Vue.extend(TabsItem)
    testDiv = document.createElement('div')
    document.body.appendChild(testDiv)
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置 name ', () => {
        vm = new Constructor({
            propsData:{
                name: 'setName'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-ItemName')).to.eq('setName')
    })
    it('可以设置 disable ', () => {
        vm = new Constructor({
            propsData:{
                disable: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disable')).to.be.true
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
  })
})