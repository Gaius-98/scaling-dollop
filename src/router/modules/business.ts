import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/LayoutView.vue'

const business:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'business',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/HomeView.vue'),
        meta: {
          appId: 'home',
        },
      },
      {
        path: 'formDesign',
        name: 'formDesign',
        component: () => import('@/views/Form/FormDesign/FormDesign.vue'),
        meta: {
          appId: '2af076bc-9bae-4909-b6d3-83d583441d8d',
        },
      },
      {
        path: 'viewDesign',
        name: 'viewDesign',
        component: () => import('@/views/ViewDesign/ViewDesign.vue'),
        meta: {
          appId: 'test',
        },
      },
      {
        path: '404',
        name: '404',
        component: () => import('@/views/404/404View.vue'),
      },
    ],
  },
]
export default business