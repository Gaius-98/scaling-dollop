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
      },
      {
        path: 'chart',
        name: 'chart',
        component: () => import('@/views/Chart/ChartList/ChartList.vue'),
        meta: {
          appId: '5a8235cd-d4d2-454d-8cab-1b06fad47283',
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
        path: '404',
        name: '404',
        component: () => import('@/views/404/404View.vue'),
      },
    ],
  },
]
export default business