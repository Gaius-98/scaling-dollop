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
          appId: 'test',
        },
      },
    ],
  },
]
export default view