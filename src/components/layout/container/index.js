import Container from './src/container'
Container.install = function (Vue) {
  Vue.component(Container.name, Container)
}
export default Container