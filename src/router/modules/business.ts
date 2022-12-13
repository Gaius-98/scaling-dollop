import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/LayoutView.vue'

export const business:RouteRecordRaw[] = [
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
        component: () => import('@/views/chart/ChartList/ChartList.vue'),
      },
      {
        path: 'chartConfig',
        name: 'chartConfig',
        component: () => import('@/views/chart/ChartConfig/ChartConfig.vue'),
        props: route => ({
          chartId: route.query.chartId || route.params.chartId,
          opType: route.query.opType || route.params.opType,
          chartType: route.query.chartType || route.params.chartType,
        }),
      },
    ],
  },
]