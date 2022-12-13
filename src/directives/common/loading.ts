import loadingComp from '@/components/common/EvLoading/EvLoading.vue'
import { createApp } from 'vue'

const judgeLoading = (el:HTMLElement, binding:any) => {
  const app = createApp(loadingComp)
  const load = app.mount(document.createElement('div'))
  let setLoading = (el:HTMLElement) => {
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].includes(style.position)) el.appendChild(load.$el)
    else {
      el.style.position = 'relative'
      el.classList.add('ev-loading')
      el.appendChild(load.$el)
    } 
  }
  let removeLoading = (el:HTMLElement) => {
    if (el.classList.contains('ev-loading')) {
      el.style.position = ''
      el.classList.remove('ev-loading')
    }
    try {
      el.removeChild(el.loading)
    } catch (error) {
      console.warn(error)
    }
  }
  if (binding.value) {
    if (binding.modifiers?.fullscreen) {
      let el = document.body
      el.loading = load.$el
      setLoading(el)
    } else {
      el.loading = load.$el
      setLoading(el)
    }
  } else if (document.body.loading && binding.modifiers?.fullscreen) {
    let el = document.body
    removeLoading(el)
  } else if (el.loading) {
    removeLoading(el)
  }
}
const loading = {
  name: 'loading',
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