import { App } from 'vue'

// const dictModules = import.meta.glob('@/directives/*.ts')
const install = async (app:App<Element>) => {
  const directives = await import.meta.glob('@/directives/*.ts', { eager: true })
  for (const path in directives) {
    const directive:any = await directives[path]
    await app.directive(directive.default.name, directive.default.options)
  }
  console.log('%c---------directives加载完成---------', 'color:#ccc')

  const compModules = import.meta.glob('@/components/common/*.vue', { eager: true })
  for (const path in compModules) {
    const module:any = compModules[path]
    await app.component(module.default.name, module.default)
  }
  console.log('%c---------components加载完成---------', 'color:#ccc')

  console.log('%c---------plugins加载完成😊---------', 'color:#ccc')
}
export default { install }