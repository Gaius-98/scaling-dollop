import { RouteRecordRaw } from 'vue-router'
import ViewTemplate from '@/views/View/ViewTemplate.vue'

const view:RouteRecordRaw[] = [
  {
    path: '/view',
    name: 'view',
    component: ViewTemplate,
    children: [
      {
        path: 'chartView/:chartId',
        name: 'chartView',
        component: () => import('@/components/common/EvChart/EvChart.vue'),
        props: route => ({
          chartId: route.query.chartId || route.params.chartId,
        }),
      },
    ],
  },
]
export default view