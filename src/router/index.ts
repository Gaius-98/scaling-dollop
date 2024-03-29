import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getCookie } from '@/utils/cookie'

const modules = import.meta.glob('./modules/*.ts', { eager: true })
const routersModules = []
for (const path in modules) {
  const module:any = await modules[path]
  routersModules.push(...module.default)
}
const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  ...routersModules,
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, form, next) => {
  if (to.path == '/login' || to.path.includes('view')) {
    next()
  } else if (getCookie('gaiusToken')) {
    next()
  } else {
    next({ path: '/login' })
  }
})
export default router