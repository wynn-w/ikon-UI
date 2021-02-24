import Icon from './icon/src/icon'
import Button from './form/button/src/button'
import ButtonGroup from './form/buttonGroup/src/buttonGroup'
import Input from './form/input/src/input'
import Toast from './toast/src/toast'
import Popover from './popover/src/popover'
import Col from './grid/col/src/col'
import Row from './grid/row/src/row'
import Collapse from './collapse/collapse/src/collapse'
import CollapseItem from './collapse/collapseItem/src/collapseItem'

import ToastPlug from '../../src/plug/toast.plug'
const components = {
  Icon, Button, ButtonGroup, Toast, Popover, Input, Row, Col, Collapse, CollapseItem
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
  Vue.use(ToastPlug)
}

export default {
  install,
  Icon, Button, ButtonGroup, Toast, Popover, Input, Row, Col
}