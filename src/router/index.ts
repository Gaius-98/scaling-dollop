import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getCookie } from '@/utils/cookie'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let cookieToken = getCookie('ev-token')
  if (!cookieToken && to.name !== 'login' && to.name !== 'register') {
    ElMessage({
      message: '您还未登录，请先登录！',
      type: 'error',
    })
    next({
      name: 'login',
    })
  } else next()
})

export default router