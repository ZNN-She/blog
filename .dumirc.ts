import { defineConfig } from 'dumi';

const year = new Date().getFullYear();

export default defineConfig({
  base: '/blog/',
  publicPath: '/blog/',          // 资源相对路径
  themeConfig: {
    name: '豆子',
    footer: `Copyright © ${year} | Powered by <a href='https://github.com/ZNN-She/blog'>豆子</a>`,
    logo: 'https://github.githubassets.com/favicons/favicon.png',
    // lastUpdated: true, // 启用最后更新时间 默认启动
    socialLinks: {
      github: 'https://github.com/ZNN-She/blog',
    },
    showLineNum: true,
    // nav: [
    //   {
    //     title: 'github',
    //     link: '/github/github-pages',
    //   },
    //   {
    //     title: 'other',
    //     link: '/other/mysql',
    //   },
    // ],
  },
  favicons: ['https://github.githubassets.com/favicons/favicon.png'],
});
