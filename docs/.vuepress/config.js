module.exports = {
    title: 'ikon UI',
    description: '一个简单的 UI 框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [

            {
                title: '开发指南',
                children: ['/install/','/get-start/',],
            },
            {
                title: '组件',
                children: ['/components/icon'],
                //initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }

        ]
    }
}