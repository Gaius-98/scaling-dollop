const clickOutside = {
  name: 'clickOutside',
  options: {
    mounted(el:HTMLElement, binding:any) {
      const judgeOutside = (e:MouseEvent) => {
        const container = e.target as HTMLElement
        return !container.contains(el) && binding.value()
      }
      // @ts-ignore
      el.__click_outside__ = judgeOutside
      document.addEventListener('click', judgeOutside)
    },
    beforeDestroy(el:HTMLElement, binding:any) {
      // @ts-ignore
      document.removeEventListener('click', el.__click_outside__)
    },
  },
}
export default clickOutside