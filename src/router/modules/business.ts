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
          appId: 'd679f8ee-f17a-4d33-9968-4b0748fd0521',
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
          appId: 'ba0debb0-916b-4416-9460-6d0aa524a152',
        },
      },
      {
        path: 'viewList',
        name: 'viewList',
        component: () => import('@/views/View/ViewList/ViewList.vue'),
        meta: {
          appId: '96fa4b11-0487-4373-9331-7dda6dd80ea0',
        },
      },
      {
        path: 'viewDesign',
        name: 'viewDesign',
        component: () => import('@/views/View/ViewDesign/ViewDesign.vue'),
        meta: {
          appId: '2161233f-5d44-4107-aa9b-5c19a3c117c5',
        },
      },
      {
        path: 'tableList',
        name: 'tableList',
        component: () => import('@/views/Table/TableList/TableList.vue'),
        meta: {
          appId: 'c5239477-b76d-444f-a331-60abb41a0a21',
        },
      },
      {
        path: 'tableDesign',
        name: 'tableDesign',
        component: () => import('@/views/Table/TableDesign/TableDesign.vue'),
        meta: {
          appId: '57cd5f86-3421-477e-96e8-5562101b5668',
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