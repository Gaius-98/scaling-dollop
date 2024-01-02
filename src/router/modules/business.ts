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
        path: 'formList',
        name: 'formList',
        component: () => import('@/views/Form/FormList/FormList.vue'),
        meta: {
          appId: '2af076bc-9bae-4909-b6d3-83d583441d8d',
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
        path: 'viewList',
        name: 'viewList',
        component: () => import('@/views/View/ViewList/ViewList.vue'),
        meta: {
          appId: 'page',
        },
      },
      {
        path: 'viewDesign',
        name: 'viewDesign',
        component: () => import('@/views/View/ViewDesign/ViewDesign.vue'),
        meta: {
          appId: 'page',
        },
      },
      {
        path: 'tableDesign',
        name: 'tableDesign',
        component: () => import('@/views/Table/TableDesign/TableDesign.vue'),
        meta: {
          appId: 'table',
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