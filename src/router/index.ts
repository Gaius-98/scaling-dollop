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
    redirect: '/business/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/LoginView.vue'),
  },
  
  ...routersModules,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let cookieToken = getCookie('ev-token')
  if (!cookieToken && !to.meta.noLogin) {
    next({
      name: 'login',
    })
  } else next()
})

export default router