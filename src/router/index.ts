import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getCookie, setCookie } from '@/utils/cookie'

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
  const evToken = to.params['ev-token'] || to.query['ev-token']
  if (evToken) {
    setCookie('ev-token', evToken as string)
  }
  let token = getCookie('ev-token')
  if (token) {
    next()
  } else {
    next({
      name: 'login',
    })
  }
})

export default router