/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-03 10:51:31
 * @LastEditTime: 2020-12-07 23:35:07
 * @LastEditors: wynn-w
 */
import Vue from 'vue';
import App from './App.vue';
// import ButtonTest from "./test/testButton"
import Button from "./components/button";
import ButtonGoup from "./components/buttonGroup";
Vue.component("j-button", Button)
Vue.component("j-button-group", ButtonGoup)
new Vue({
    render: h => h(App)
}).$mount('#app')
// 单元测试
import chai from 'chai'
let expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: "download",
        }
    })
    button.$mount()
    const href = button.$el.querySelector("use").getAttribute('xlink:href')
    expect(href).to.eq("#i-download");
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: "download",
            circle: true
        }
    })
    button.$mount("#test")
    const href = button.$el.querySelector("use").getAttribute('xlink:href')
    expect(href).to.eq("#i-download");
    const ariaHidden = button.$el.querySelector("svg").getAttribute('aria-hidden'); 
    expect(ariaHidden).to.eq("true");
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            circle: true,
            loading: true
        }
    })
    button.$mount("#test")
    const alignItems = button.$el.querySelector("svg").getAttribute('align-items'); 
    expect(alignItems).to.eq(null);
}

