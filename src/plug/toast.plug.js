import Toast from '../components/toast/src/toast'
function creatToast(Vue, { message, propsData, onClose }) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({ propsData })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('beforeClose', onClose)
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast
export default {
    install(Vue) {
        Vue.prototype.$toast = (message = 'this is toast', toastProps) => {
            currentToast && currentToast.close()
            currentToast = creatToast(
                Vue, {
                message, propsData: toastProps, onClose() {
                    currentToast = null
                }
            })
        }
    }
}