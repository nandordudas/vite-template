import ui from '@nuxt/ui/vue-plugin'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

function main() {
  const pinia = createPinia()
  const app = createApp(App as Component)

  const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes: [
      { path: '/', component: async () => import('./pages/index.vue') as Promise<Component> },
    ],
  })

  app.use(router)
  app.use(pinia)
  app.use(ui)

  app.mount('#app')
}

main()
