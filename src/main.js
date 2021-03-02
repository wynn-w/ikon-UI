import Vue from 'vue';
import App from './App.vue';
// import Icon from "./components/icon";
// import Popover from "./components/popover";
// import Toast from "./components/toast";
// import Icon from "./components/icon";
// import Input from "./components/form/input";
// import Button from "./components/form/button/button";
// import ButtonGoup from "./components/form/button/buttonGroup";
// Vue.component(Icon.name, Icon)
// Vue.component(Popover.name, Popover)
// Vue.component(Toast.name, Toast)
// Vue.component(Input.name, Input)
// Vue.component("ik-button", Button)
// Vue.component("ik-button-group", ButtonGoup)

import ikonUI from './components/index'
Vue.use(ikonUI)

Vue.config.errorHandler = function (err, vm, info) {
    console.error(`Error: ${err.toString()}\nInfo: ${info}`);
}

Vue.config.warnHandler = function (msg, vm, trace) {
    console.warn(`Warn: ${msg}\nTrace: ${trace}`);
}
new Vue({
    render: h => h(App)
}).$mount('#app')