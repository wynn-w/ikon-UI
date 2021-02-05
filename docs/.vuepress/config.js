module.exports = {
  base: '/ikon-UI/',
  title: 'ikon UI',
  description: '一个基于 Vue 2.0的 UI 框架,持续学习更新中...',
  themeConfig: {
      nav: [
          { text: '主页', link: '/' },
          { text: 'Github', link: 'https://github.com/wynn-w/' },
          { text: '欢迎 star', link: 'https://github.com/wynn-w/ikon-UI' },
      ],
      sidebar: [
          {
              title: '开发指南',
              children: ['/install/', '/get-start/',],
          },
          {
              title: '组件',
              collapsable: false,
              children: ['/components/icon'],
              //initialOpenGroupIndex: -1 // 可选的, 默认值是 0
          }

      ]
  }
}