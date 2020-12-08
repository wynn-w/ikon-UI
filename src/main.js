/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-03 10:51:31
 * @LastEditTime: 2020-12-08 23:17:26
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
import spies from 'chai-spies'
chai.use(spies)
let expect = chai.expect
{
    const div = document.createElement("div")
    const test = document.getElementById("test")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: "download"
        }
    })
    button.$mount(div)
    const href = button.$el.querySelector("use").getAttribute('xlink:href')
    expect(href).to.eq("#i-download");
    const ariaHidden = button.$el.querySelector("svg").getAttribute('aria-hidden');
    expect(ariaHidden).to.eq("true");
    button.$el.remove()
    button.$destroy()

}
{
    const div = document.createElement("div")
    const test = document.getElementById("test")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: "delete",
            circle: true
        }
    })
    button.$mount(div)
    const [ClassName] = button.$el.querySelector("svg").parentNode.className.match(/circle/g)
    expect(ClassName).to.equal("circle");
    button.$el.remove()
    button.$destroy()

}

{
    const div = document.createElement("div")
    const test = document.getElementById("test")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            loading: true,
            circle: true
        }
    })
    button.$mount(div)
    const [ClassName] = button.$el.querySelector("svg").className.baseVal.match(/loading/g)
    // console.log(ClassName);
    expect(ClassName).to.equal("loading");
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement("div")
    const test = document.getElementById("test")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            loading: true,
        }
    })
    button.$mount(div)
    // 引入spies做间谍函数并监听它，如果被调用则说明点击测试通过
    const spy = chai.spy(function () { })
    button.$on('click', spy())
    button.$el.click()
    expect(spy).to.have.been.called();
    button.$el.remove()
    button.$destroy()
}

