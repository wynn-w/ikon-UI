/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-03 10:51:31
 * @LastEditTime: 2020-12-28 23:21:37
 * @LastEditors: wynn-w
 */
import Vue from 'vue';
import App from './App.vue';
import Button from "./components/button";
import ButtonGoup from "./components/buttonGroup";
Vue.component("ik-button", Button)
Vue.component("ik-button-group", ButtonGoup)
new Vue({
    render: h => h(App)
}).$mount('#app')