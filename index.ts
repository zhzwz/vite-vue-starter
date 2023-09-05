import { createApp } from 'vue'
import { createRouter, createWebHistory, setupDataFetchingGuard } from 'vue-router/auto'

import 'uno.css'
import './index.css'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    console.groupCollapsed('[router] routes')
    console.debug(routes)
    console.groupEnd()
    return routes
  },
})
setupDataFetchingGuard(router)
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
