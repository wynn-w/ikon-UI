import Toast from '../components/toast'
export default {
    install (Vue) {
        Vue.prototype.$toast = (message) => {
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}