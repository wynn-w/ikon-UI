import Vue from 'vue';
import App from './App.vue';
import Button from './components/button'

// Vue.component('j-button', Button)
new Vue({
    render: h => h(App)
}).$mount('#app')