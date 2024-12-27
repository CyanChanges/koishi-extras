import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "More Koishi",
  description: "More things about Koishi",
  srcDir: "docs",
  cleanUrls: true,
  ignoreDeadLinks: 'localhostLinks',
  vite: {
    plugins: [
      UnoCSS(),
      Components({
        resolvers: [
          PrimeVueResolver()
        ]
      })
    ]
  },
  transformHead({ assets }) {
    const notoSansSC = assets.filter(file => /NotoSansSC-[\w0-9]+\.woff2/)
    const jetbrainsMono = assets.filter(file => /JetBrainsMono-[\w0-9]+\.woff2/)

    return [...notoSansSC, ...jetbrainsMono].map(file => [
      'link',
      {
        rel: 'preload',
        href: file,
        as: 'font',
        type: 'font/woff2',
        crossorigin: ''
      }
    ])
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginner', link: '/beginner' },
      { text: 'Advanced', link: '/advanced' }
    ],

    sidebar: {
      "/beginner": [{
        text: "Beginner",
        link: "/beginner",
        items: [{}]
      }, {
        text: "Use Boilerplate",
        link: "/beginner/boilerplate",
        items: [{
          text: "Setup Plugin",
          link: "/beginner/boilerplate/setup-plugin"
        }]
      }, {
        text: "As Dependency",
        link: "/beginner/as-dependency",
        items: [{
          text: "with Deno",
          link: "/beginner/as-dependency/deno"
        }, {
          text: "with Bun",
          link: "/beginner/as-dependency/bun"
        }]
      }],
      "/advanced": [{
        text: "Advanced",
        link: "/advanced"
      }],
      "/end-user": [{
        text: "End User",
        link: "/end-user",
        items: [{
          text: "Installation",
          link: "/end-user/installation"
        }, {
          text: "Configuration",
          link: "/end-user/configuration"
        }]
      }, {
        text: "WebUI",
        link: "/end-user/webui",
        items: [{
          text: "Open the Console",
          link: "/end-user/webui/open"
        }, {
          text: "Introduce the WebUI",
          link: "/end-user/webui/intro"
        }, {
          text: "With the Pre-installed",
          link: "/end-user/webui/builtins"
        }]
      }]
    },

    footer: {
      message: "All rights reserved for texts. <br/>All code within code blocks released under MIT License. ",
      copyright: "Copyright &copy; 2024-present Cyan Changes"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CyanChanges/' }
    ]
  }
})
