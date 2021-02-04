---
title: "icon"
---

# Icon 图标

提供了一套常用的图标集合。

### 使用方法

通过设置属性 name 为 ik-iconName 来使用即可。例如：
<ClientOnly>
<icons-show />
</ClientOnly>

```html
<div>
  <ik-icon name="setting"></ik-icon>
  <ik-icon name="delete"></ik-icon>
  <ik-button :loading="true"> 加载中</ik-button>
</div>
```

通过设置属性 color 为 16 进数值 来自定义图标颜色。例如：
<ClientOnly>
<icons-showColor />
</ClientOnly>

```html
<div>
  <ik-icon name="i-setting" color="#66b1ff"></ik-icon>
  <ik-icon name="i-delete" color="#fc5531"></ik-icon>
  <ik-button :loading="true" color="#3eaf7c"> 加载中</ik-button>
</div>
```

### 图标集合

所有图标展示
<ClientOnly>
<icons-list />
</ClientOnly>

### API

| 属性名  | 默认值  | 说明                                |
| :-----: | :-----: | :---------------------------------- |
| `name`  |         | 设置显示图标                        |
| `color` | #ffffff | 自定义图标颜色（三/六位 16 进制值） |
