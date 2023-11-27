import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KazooTTT的书签",
  description: "一些我常用的网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '图标库', link: '/icons' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kazoottt/bookmarks' }
    ]
  }
})
