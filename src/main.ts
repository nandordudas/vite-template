import ui from '@nuxt/ui/vue-plugin'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

function main() {
  const pinia = createPinia()
  const app = createApp(App)

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: () => import('./pages/index.vue') },
    ],
  })

  app.use(router)
  app.use(pinia)
  app.use(ui)

  app.mount('#app')
}

main()
