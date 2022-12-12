import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getCookie } from '@/utils/cookie'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/LoginView.vue'),
  }, {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/HomeView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let cookieToken = getCookie('ev-token')
  console.log(cookieToken)
  if (!cookieToken && to.name !== 'login' && to.name !== 'register') {
    next({
      name: 'login',
    })
  } else next()
})

export default router