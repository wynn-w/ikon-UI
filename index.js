// import Input from "./components/form/input";
// import Button from "./src/components/form/button/button"
// import ButtonGroup from "./src/components/form/button/buttonGroup"
// import Col from "./src/components/grid/col"
// import Row from "./src/components/grid/row"
// import Icon from "./src/components/icon"
// import Popover from "./src/components/popover"
// import Toast from "./src/components/toast"
// export { Button, ButtonGroup, Icon, Popover,Toast,Col,Row}
import Icon from './src/components/icon/src/icon'
import Button from './src/components//form/button/src/button'
import ButtonGroup from './src/components//form/buttonGroup/src/buttonGroup'
import Input from './src/components//form/input/src/input'
import Toast from './src/components//toast/src/toast'
import Popover from './src/components//popover/src/popover'
import Col from './src/components//grid/col/src/col'
import Row from './src/components//grid/row/src/row'
import Collapse from './src/components//collapse/collapse/src/collapse'
import CollapseItem from './src/components//collapse/collapseItem/src/collapseItem'
import Aside from './src/components//layout/aside/src/aside'
import Main from './src/components//layout/main/src/main'
import Footer from './src/components//layout/footer/src/footer'
import Header from './src/components//layout/header/src/header'
import Layout from './src/components//layout/layout/src/layout'
import Tabs from './src/components//tabs/tabs/src/tabs'
import TabsBody from './src/components//tabs/tabsBody/src/tabsBody'
import TabsHead from './src/components//tabs/tabsHead/src/tabsHead'
import TabsItem from './src/components//tabs/tabsItem/src/tabsItem'
import TabsPane from './src/components//tabs/tabsPane/src/tabsPane'

import ToastPlug from './src/plug/toast.plug'
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