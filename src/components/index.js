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
import Aside from './layout/aside/src/aside'
import Main from './layout/main/src/main'
import Footer from './layout/footer/src/footer'
import Header from './layout/header/src/header'
import Layout from './layout/layout/src/layout'
import Tabs from './tabs/tabs/src/tabs'
import TabsBody from './tabs/tabsBody/src/tabsBody'
import TabsHead from './tabs/tabsHead/src/tabsHead'
import TabsItem from './tabs/tabsItem/src/tabsItem'
import TabsPane from './tabs/tabsPane/src/tabsPane'

import ToastPlug from '../../src/plug/toast.plug'
const components = {
  Icon,
  Button,
  ButtonGroup,
  Toast,
  Popover,
  Input,
  Row,
  Col,
  Collapse,
  CollapseItem,
  Aside,
  Main,
  Footer,
  Header,
  Layout,
  Tabs,
  TabsBody,
  TabsHead,
  TabsItem, 
  TabsPane
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