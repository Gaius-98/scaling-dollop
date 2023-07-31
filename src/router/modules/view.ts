import { RouteRecordRaw } from 'vue-router'
import View from '@/views/Layout/View.vue'

const business:RouteRecordRaw[] = [
  {
    path: '/view',
    name: 'view',
    component: View,
    children: [
      {
        path: 'viewPre',
        name: 'viewPre',
        component: () => import('@/views/ViewDesign/components/ViewPreview.vue'),
        meta: {
          appId: 'test',
        },
      },
    ],
  },
]
export default business