---
title: 安装 - Installation
---
# 安装 - Installation

:::danger 警告
ikon-UI 处于未成熟阶段，仅供测试、学习请勿用于生产环境中。
:::

##  下载
```
npm install ikon-ui
```
## 使用
全局引入
```
import ikonUI from 'ikon-ui';
Vue.use(ikonUI);
```
按需引入
```
import {Button} from 'ikon-ui';
Vue.component(Button.name, Button)
/* 或写为
 * Vue.use(Button)
 */
```

