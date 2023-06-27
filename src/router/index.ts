import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('./modules/*.ts', { eager: true })
const routersModules = []
for (const path in modules) {
  const module:any = await modules[path]
  routersModules.push(...module.default)
}
const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  ...routersModules,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router