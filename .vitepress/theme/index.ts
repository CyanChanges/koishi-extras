// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './layouts/Layout.vue'
import Banner from './components/Banner.vue'
import Message from 'primevue/message'
import PrimeVue from 'primevue/config'
import Ripple from 'primevue/ripple';
import Card from 'primevue/card'
import Fluid from 'primevue/fluid'
import Preset from './preset'
import 'virtual:uno.css'
import './style.scss'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      banner: () => h(Banner)
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(PrimeVue, {
      theme: {
        preset: Preset,
        options: {
          darkModeSelector: '.dark'
        }
      },
      ripple: true
    })
    app.directive('ripple', Ripple);
    app.component("Card", Card);
    app.component("Fluid", Fluid);
  }
} satisfies Theme
