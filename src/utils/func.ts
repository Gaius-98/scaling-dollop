import router from '@/router/index'
import { cloneDeep } from 'lodash'
import { formComp } from '@/assets/form/formSfc'
import { v4 as uuidv4 } from 'uuid'
/**
 * 对象扁平化
 * @params {object} 要扁平化的对象
 * @return {object} 扁平化后的对象
 */
export const flat = (obj:COMMON.obj) => {
  const flatten = (res:COMMON.obj, curObj:any, curKey:string) => {
    // 判断当前项是否为数组
    if (Array.isArray(curObj)) {
      curObj.forEach((item, idx) => {
        // 如果是复杂对象则继续
        if (typeof item == 'object' && item !== null) {
          flatten(res, item, `${curKey}[${idx}]`)
        } else {
          res[`${curKey}[${idx}]`] = item
        }
      })
    } else {
      Object.keys(curObj).forEach(key => {
        // 复杂对象嵌套则继续
        if (typeof curObj[key] === 'object' && curObj[key] !== null) {
          flatten(res, curObj[key], `${curKey}.${key}`)
        } else {
          res[`${curKey}.${key}`] = curObj[key]
        }
      })
    }
  }
  const res:COMMON.obj = {}
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flatten(res, obj[key], key)
    } else {
      res[key] = obj[key]
    }
  })
  return res
}
/**
 * 对象反扁平化
 * @params {object} 扁平化的对象
 * @return {object} 反扁平化的对象
 */
export const unflat = (obj:COMMON.obj) => {
  const unflatten = (key:string, value:any, res:COMMON.obj) => {
    const arr = key.split('.')
    let tmp = res
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i]
      let nextKey = arr[i + 1]
      // 这里需要判断key 是否包含[]字符串，如果是则是数组结构
      if (/\[.+?\]/g.test(key)) {
        // 可能是多维数组，匹配数组维度
        let indexs = key.match(/\[(.+?)\]/g) as RegExpMatchArray
        // 获取数组的key值
        let _key = key.match(/^(.+?)\[/)![1]
        // 构造数组需要判断是否已经存在
        tmp[_key] = tmp[_key] ? tmp[_key] : []
        let n = tmp[_key]
              
        // 构造完数组对数组里面进行构造
        for (let j = 0; j < indexs.length; j++) {
          let index = indexs[j].replace(/\[|\]/g, '')
          let nextIndex = indexs[j + 1]
              
          // 数组包含数组
          if (nextIndex) {
            // 构造数组需要判断是否已经存在
                
            n[index] = n[index] ? n[index] : []
            // 如果还包含数组，将n指针指向下一个数组
            n = n[index]
            // 如果后面还有则构造对象
          } else if (nextKey) {
            // 构造对象需要判断是否已经存在
            n[index] = n[index] ? n[index] : {}
            tmp = n[index]
          } else {
            n[index] = value
          }
        }
        // 不是数组和之前方法保持一致
      } else if (nextKey) {
        // 构造对象需要判断是否已经存在
        tmp[key] = tmp[key] ? tmp[key] : {}
        tmp = tmp[key]
      } else {
        tmp[key] = value
      }
    }
  }
  const res:COMMON.obj = {}
  Object.keys(obj).forEach(key => {
    unflatten(key, obj[key], res)
  })
  return res
}

/**
 * routerpush方法改写
 * @params {string} id
 */
export const routerPush = (id:string) => {
  const { options: { routes } } = router
  const flatten = (routes:any[], arr?:any[]) => {
    const res = arr || []
    routes.forEach(route => {
      res.push(route)
      if (route.children) {
        return flatten(route.children, res)
      }
    })
    return res
  }
  const cloneRoutes = cloneDeep(routes) as any[]
  const routeData:any[] = flatten(cloneRoutes)
  const cur = routeData.find(route => route?.meta?.appId == id)
  if (cur) {
    router.push({
      name: cur.name,
      query: {
        appId: id,
      },
    })
  } else {
    router.push({
      name: '404',
    })
  }
}
/**
 * 生成sfc
 * @param {COMMON.obj} form 
 * @returns {string}  formSfc
 */
export const createFormSfc = (formConfig:COMMON.obj) => {
  let formItemStr = ''
  let formDataSfc = ''
  let rules = ''
  let ruleFnSfc = ''
  const deepFromSfc = (list:COMMON.obj[]) => {
    list.forEach((item:COMMON.obj) => {
      formItemStr += formComp[item.comp](item)
    })
  }
  const deepFormConfigList = (list:COMMON.obj[]) => {
    if (list instanceof Array) {
      list.forEach((item:COMMON.obj) => {
        if (item.type != 'container') {
          if (item.comp != 'button') {
            rules += formComp.createRules(item)
            ruleFnSfc += formComp.createRuleFunc(item)
          }
          if (['select', 'checkbox'].includes(item.comp)) {
            formDataSfc += formComp.createOptions(item)
          } else if (['button'].includes(item.comp)) {
            formDataSfc += formComp.createFunction(item)
          }
        } else if (item.comp == 'grid') {
          item.prop.cols.forEach((item:COMMON.obj) => {
            deepFormConfigList(item.list)
          })
        } else if (item.comp == 'card') {
          deepFormConfigList(item.prop.card.list) 
        } else if (item.comp == 'collapse') {
          deepFormConfigList(item.prop.collapse.list) 
        }
      })
    }
  }
  deepFormConfigList(formConfig.list)
  deepFromSfc(formConfig.list)
  const formSfc = `
  <template>
    <el-form
      size="${formConfig.formProp.size}"
      label-position="${formConfig.formProp.labelPosition}"
      label-width="${formConfig.formProp.labelWidth}"
      ref="formRef"
      :model="formData"
      :rules="rules"
    >
      ${formItemStr}
    </el-form>
  </template>

  <script lang='ts' setup >
  import { reactive, toRefs, ref, PropType } from 'vue'
  import type { FormInstance } from 'element-plus'
  interface obj {
    [key:string]:any
  }
  const formRef = ref<FormInstance>()
  const formData = reactive<obj>({})
  ${ruleFnSfc}
  const rules = reactive<obj>({${rules}})
  const getFormData = () => formData
  ${formDataSfc}
  const resetForm = () => {
    if (!formRef.value) return
    formRef.value.resetFields()
  }
  defineExpose({ getFormData, resetForm })
  </script>
  <style scoped lang='scss'>
  </style>
  `
  return formSfc
}
/**
 * 
 * @param formConfig 
 */
export const createFormSfcV2 = (formConfig:COMMON.obj) => {
  let formItemStr = ''
  let formDataSfc = ''
  let rules = ''
  let funSfc = ''
  const deepFromSfc = (list:COMMON.obj[]) => {
    list.forEach((item:COMMON.obj) => {
      formItemStr += formComp[item.comp](item)
    })
  }
  const deepFormConfigList = (list:COMMON.obj[]) => {
    if (list instanceof Array) {
      list.forEach((item:COMMON.obj) => {
        if (item.type != 'container') {
          if (item.comp != 'button') {
            rules += formComp.createRulesV2(item)
            funSfc += formComp.createRuleFuncV2(item)
          }
          if (['select', 'checkbox'].includes(item.comp)) {
            formDataSfc += formComp.createOptionsV2(item)
          } else if (['button'].includes(item.comp)) {
            funSfc += formComp.createFunctionV2(item)
          }
        } else if (item.comp == 'grid') {
          item.prop.cols.forEach((item:COMMON.obj) => {
            deepFormConfigList(item.list)
          })
        } else if (item.comp == 'card') {
          deepFormConfigList(item.prop.card.list) 
        } else if (item.comp == 'collapse') {
          deepFormConfigList(item.prop.collapse.list) 
        }
      })
    }
  }
  deepFormConfigList(formConfig.list)
  deepFromSfc(formConfig.list)
  const formSfc = `
  <template>
    <el-form
      size="${formConfig.formProp.size}"
      label-position="${formConfig.formProp.labelPosition}"
      label-width="${formConfig.formProp.labelWidth}"
      ref="formRef"
      :model="formData"
      :rules="rules"
    >
      ${formItemStr}
    </el-form>
  </template>

  <script>
  export default {
		      
    components: {},
    data() {
      return {
       formData:{},
       ${rules ? `rules:{${rules}},` : 'rules:{},'}
       ${formDataSfc ? `${formDataSfc}` : ''}
      }
    },
    computed: {},
    watch: {},
    methods: {
      getFormData(){
        return this.formData
      },
      resetForm(){
        if(!this.$refs.formRef) return 
        this.$refs.formRef.resetFields()
      },
      ${funSfc ? `${funSfc}` : ''}
    },
    created() {
    },
    mounted() {
    },
  }
  </script>
  <style scoped lang='scss'>
  </style>
  `
  return formSfc
}
/**
 * 
 * @param content string -- 文件内容
 * @param fileName string --文件名称
 * @param fileType string --文件类型  文件后缀名
 */
export const downloadFile = (content:string, fileName?:string, fileType = 'json') => {
  const a = document.createElement('a')
  // 构造一个blob对象来处理数据
  const blob = new Blob([content])
  fileName = `${decodeURI(encodeURI(fileName || uuidv4()))}.${fileType}`
  // URL.createObjectURL()会产生一个url字符串，可以像使用普通 URL 那样使用它，比如用在 img.src 上
  a.href = URL.createObjectURL(blob)
  // a标签里有download属性可以自定义文件名
  a.setAttribute(
    'download',
    fileName,
  )
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

/**
 * 常用函数
 */
const func = {
  flat,
  unflat,
  routerPush,
  createFormSfc,
  downloadFile,
}
export default func