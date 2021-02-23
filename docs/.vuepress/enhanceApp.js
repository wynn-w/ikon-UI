import Icon from "../../src/components/icon"
import Button from "../../src/components/form/button/button"
import ButtonGroup from "../../src/components/form/button/buttonGroup"
import Input from "../../src/components/form/input"
// import Collapse from "../../src/components/collapse/collapse"
// import CollapseItem from "../../src/components/collapse/collapseItem"
import Col from "../../src/components/grid/col"
import Row from "../../src/components/grid/row"
// import Popover from "../../src/components/popover"
// import Toast from "../../src/components/toast"
// import Tabs from "../../src/components/tabs/tabs"
// import TabsBody from "../../src/components/tabs/tabsBody"
// import TabsHead from "../../src/components/tabs/tabsHead"
// import TabsItem from "../../src/components/tabs/tabsItem"
// import TabsPane from "../../src/components/tabs/tabsPane"
// import Aside from "../../src/components/layout/aside"
// import Container from "../../src/components/layout/container"
// import Footer from "../../src/components/layout/footer"
// import Header from "../../src/components/layout/header"
// import Layout from "../../src/components/layout/layout"
export default ({
    Vue
}) => {
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Input.name, Input)
    // Vue.component(CollapseItem.name, CollapseItem)
    // Vue.component(Collapse.name, Collapse)
    Vue.component(Col.name, Col)
    Vue.component(Row.name, Row)
}