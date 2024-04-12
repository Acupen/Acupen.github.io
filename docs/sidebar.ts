const sidebar = {
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
  '/stereotyped-writing/': {
    base: '/stereotyped-writing/',
    items: [
      {
        text: '看看就好',
        collapsed: false,
        items: [
          { text: 'html', link: 'html' },
          { text: 'css', link: 'css' },
          { text: 'js', link: 'js' },
        ],
      },
    ],
  },
  '/interview-record/': {
    base: '/interview-record/',
    items: [
      {
        text: '面试记录',
        collapsed: false,
        items: [{ text: '2024-04-12', link: '4-12' }],
      },
    ],
  },
};
export default sidebar;
