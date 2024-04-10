import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Blog',
  description: 'create blog by vitePress ',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Test',
        link: '/package/test/test',
        activeMatch: '/package/test',
      },
      {
        text: '阅读记录',
        items: [{ text: 'vue.js设计与实现', link: '/read-note' }],
      },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
      '/package/test/': {
        base: '/package/test/',
        items: [
          {
            text: '简介',
            collapsed: false,
            items: [
              { text: '快速开始', link: 'test copy' },
              { text: '什么是 VitePress？', link: 'test' },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Acupen/Acupen.github.io' },
    ],
  },
});
