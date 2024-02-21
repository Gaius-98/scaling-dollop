import { RouteRecordRaw } from 'vue-router'
import View from '@/views/Layout/View.vue'

const view:RouteRecordRaw[] = [
  {
    path: '/view',
    name: 'view',
    component: View,
    children: [
      {
        path: 'viewPre',
        name: 'viewPre',
        component: () => import('@/views/View/ViewDesign/components/ViewPreview.vue'),
        meta: {
          appId: 'd356b263-4df5-4c50-8fdb-5e23642c02e8',
        },
      },
      {
        path: 'tablePre',
        name: 'tablePre',
        component: () => import('@/views/Table/TablePreview/TablePreview.vue'),
        meta: {
          appId: '053bf559-e871-4077-8b14-3790444631b8',
        },
      },
    ],
  },
]
export default view