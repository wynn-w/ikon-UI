import Toast from '../components/toast'
export default {
    install(Vue) {
        Vue.prototype.$toast = (message = 'this is toast', toastProps) => {
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData: toastProps
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}