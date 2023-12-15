import loadingComp from '@/components/common/EvLoading/EvLoading.vue'
import { createApp } from 'vue'

const judgeLoading = (ele:HTMLElement, binding:any) => {
  const el = binding.modifiers?.fullscreen ? document.body : ele
  const setLoading = (el:HTMLElement) => {
    const curDomStyle = getComputedStyle(el)
    el.setAttribute('oldPosition', curDomStyle.position)
    if (!['absolute', 'fixed', 'relative'].includes(curDomStyle.position)) {
      el.style.position = 'relative'
    }
    el.appendChild(load.$el)
  }
  const removeLoading = (el:HTMLElement) => {
    try {
      el.removeChild(load.$el)
      el.style.position = el.getAttribute('oldPosition') || ''
    } catch (error) {
      console.warn(error)
    }
  }
  if (binding.value) {
    setLoading(el)
  } else {
    removeLoading(el) 
  }
}
const app = createApp(loadingComp)
const load = app.mount(document.createElement('div'))
const loading = {
  name: 'ev-loading',
  options: {
    mounted(el:HTMLElement, binding:any) {
      judgeLoading(el, binding)
    },
    updated(el:HTMLElement, binding:any) {
      judgeLoading(el, binding)
    },
  },
}
export default loading