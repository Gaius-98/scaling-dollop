import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/LayoutView.vue'

export const business:RouteRecordRaw[] = [
  {
    path: '/business',
    name: 'business',
    component: Layout,
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/HomeView.vue'),
    }],
  },
]