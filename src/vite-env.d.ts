/// <reference types="vite/client" />
declare module '*.vue' {
  import './types/common'
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
