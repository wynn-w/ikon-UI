import Toast from './src/toast'
import ToastPlug from './src/plug/toast.plug.js'
Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
  Vue.use(ToastPlug)
}
export default Toast