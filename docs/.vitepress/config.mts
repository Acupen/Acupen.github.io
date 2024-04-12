import { defineConfig } from 'vitepress';

import sidebar from '../sidebar';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Noctis',
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
        text: '面试',
        items: [
          { text: '八股文', link: '/stereotyped-writing/html' },
          { text: '面试记录', link: '/interview-record/4-12' },
        ],
      },
      {
        text: '阅读记录',
        items: [{ text: 'vue.js设计与实现', link: '/read-note' }],
      },
    ],
    sidebar,
    outline: {
      label: '页面导航',
      level: [1, 4],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Acupen/Acupen.github.io' },
    ],
  },
});
