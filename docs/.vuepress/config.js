module.exports = {
    base: '/ikon-UI/',
    title: 'ikon UI',
    description: '一个基于 Vue 2.0的 UI 框架,持续学习更新中...',
    plugins: ['demo-container',

    ],
    themeConfig: {
        search: true,
        locales: [
            {
                "lang": "zh-CN",
                "demo-block": {
                    "hide-text": "隐藏代码",
                    "show-text": "显示代码",
                    "copy-text": "复制代码",
                    "copy-success": "复制成功"
                }
            }
        ],
        nav: [
            { text: '主页', link: '/' },
            { text: 'Github', link: 'https://github.com/wynn-w/' },
            { text: '欢迎 star', link: 'https://github.com/wynn-w/ikon-UI' },
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/introduce/',
                ],
            },
            {
                title: '开发指南',
                collapsable: false,
                children: ['/install/',],
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/layout',
                    '/components/tabs',
                    '/components/collapse',
                    '/components/grid',
                    '/components/toast',
                    '/components/popover'],
                //initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }

        ]
    }
}