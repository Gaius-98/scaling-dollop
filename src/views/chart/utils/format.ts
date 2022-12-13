import _ from 'lodash'

/**
   *  将formTemplate处理为可配置的格式
   */
export const formatDefaultOption = (defaultOption:COMMON.obj, data:COMMON.obj) => {
  const res:COMMON.obj = {}
  const deepTransForm = (cur:COMMON.obj, parentKey:string) => {
    Object.keys(cur).forEach(key => {
      cur[key].model = `${parentKey}.${key}`
      if (cur[key].tabs) {
        formatSeries(cur[key], data, `${parentKey}.${key}`)
      } else if (cur[key].children) {
        deepTransForm(cur[key].children, `${parentKey}.${key}`)
      }
    })
  }
  Object.keys(defaultOption).forEach(key => {
    res[key] = defaultOption[key]
    if (defaultOption[key].tabs) {
      formatSeries(defaultOption[key], data, key)
    } else if (defaultOption[key].children) {
      deepTransForm(defaultOption[key].children, key)
    }
  })
  return res
}
/**
   * 处理formTemplate中tabs格式
   */
export const formatSeries = (tabsTemplate:COMMON.obj, data:COMMON.obj, key:string) => {
  const curData = data[tabsTemplate.model]
  const res:COMMON.obj = {}
  const deepTransFormTabs = (cur:COMMON.obj, index:number, parentKey:string) => {
    Object.keys(cur).forEach(curKey => {
      cur[curKey].model = `${parentKey}.${curKey}`
      if (cur[curKey].children) {
        deepTransFormTabs(cur[curKey].children, index, `${parentKey}.${curKey}`)
      }
    })
    return cur
  }
  const templates = curData.map((item:COMMON.obj, idx:number) => {
    const data = _.cloneDeep(tabsTemplate.children)
    return deepTransFormTabs(data, idx, `${tabsTemplate.model}[${idx}]`)
  })
  tabsTemplate.children = templates
  return templates
}

const func = {
  
}
export default func