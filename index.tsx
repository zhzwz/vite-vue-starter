import { createApp } from 'vue'
import { createRouter, createWebHistory, setupDataFetchingGuard } from 'vue-router/auto'

import 'uno.css'
import './index.css'

const App = defineComponent({
  render() {
    return <>
      <RouterView />
    </>
  },
})
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
router.beforeEach((to, from, next) => {
  console.groupCollapsed(`[router] beforeEach: from=${from.fullPath} to=${to.fullPath}`)
  console.debug(from)
  console.debug(to)
  console.groupEnd()
  // 手动为 path 解码，以便支持中文路径
  if (to.path !== decodeURIComponent(to.path)) {
    return next({
      path: decodeURIComponent(to.path),
      query: to.query,
      params: to.params,
      replace: true,
    })
  }
  next()
})
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
