import { RouteRecordRaw } from 'vue-router'

const login:RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
  },
]
export default login