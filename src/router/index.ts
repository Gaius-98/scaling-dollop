import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getCookie } from '@/utils/cookie'
import { business } from './modules/business'

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
  ...business,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let cookieToken = getCookie('ev-token')
  if (!cookieToken && to.name !== 'login' && to.name !== 'register') {
    next({
      name: 'login',
    })
  } else next()
})

export default router