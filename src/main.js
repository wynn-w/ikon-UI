/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-03 10:51:31
 * @LastEditTime: 2020-12-16 23:18:55
 * @LastEditors: wynn-w
 */
import Vue from 'vue';
import App from './App.vue';
import Button from "./components/button";
import ButtonGoup from "./components/buttonGroup";
Vue.component("j-button", Button)
Vue.component("j-button-group", ButtonGoup)
new Vue({
    render: h => h(App)
}).$mount('#app')