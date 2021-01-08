import Toast from '../components/toast'
function creatToast(Vue,message,propsData) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({ propsData })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast
export default {
    install(Vue) {
        Vue.prototype.$toast = (message = 'this is toast', toastProps) => {
            console.log(currentToast);
            if(currentToast){
            currentToast.close()
            currentToast.$destroy()
            }    
            currentToast =  creatToast(Vue,message , toastProps)
        }
    }
}