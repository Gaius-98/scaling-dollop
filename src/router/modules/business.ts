import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/LayoutView.vue'

const business:RouteRecordRaw[] = [
  {
    path: '/business',
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
        path: 'largeScreenList',
        name: 'largeScreenList',
        component: () => import('@/views/LargeScreen/LargeScreenList/LargeScreenList.vue'),
        meta: {
          appId: '1e0349dd-9bfc-4fc6-a433-84fad5cd7551',
        },
      },
      {
        path: 'largeScreenConfig',
        name: 'largeScreenConfig',
        component: () => import('@/views/LargeScreen/LargeScreenConfig/LargeScreenConfig.vue'),
        meta: {

        },
      },
      {
        path: 'chart',
        name: 'chart',
        component: () => import('@/views/Chart/ChartList/ChartList.vue'),
        meta: {
          appId: '66401fee-1f89-4e52-8ee1-9927a4d05e43',
        },
      },
      {
        path: 'chartConfig',
        name: 'chartConfig',
        component: () => import('@/views/Chart/ChartConfig/ChartConfig.vue'),
        props: route => ({
          chartId: route.query.chartId || route.params.chartId,
          opType: route.query.opType || route.params.opType,
          chartType: route.query.chartType || route.params.chartType,
        }),
      },
      {
        path: 'formDesign',
        name: 'formDesign',
        component: () => import('@/views/Form/FormDesign/FormDesign.vue'),
        props: route => ({
          chartId: route.query.chartId || route.params.chartId,
          opType: route.query.opType || route.params.opType,
          chartType: route.query.chartType || route.params.chartType,
        }),
        meta: {
          appId: '2af076bc-9bae-4909-b6d3-83d583441d8d',
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