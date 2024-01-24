import router from '@/router/index'
import { cloneDeep } from 'lodash'
import { formComp } from '@/assets/form/formSfc'
import { v4 as uuidv4 } from 'uuid'
import { getUpperCase } from 'gaius-utils'
import axios from 'axios'
import useParamsPool from '@/hooks/useParamsPool'
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
 * 将对象转化为css变量
 * @param {*} obj 
 * @example { input:{ color :'#fff'} } =>  { --inputColor:'#fff' }
 * @returns obj
 */
export const transformCssVar = (obj:COMMON.obj) => {
  const result = {} as COMMON.obj

  function traverse(obj:COMMON.obj, path = '') {
    for (const key in obj) {
      const newPath = path ? `${path}${getUpperCase(key)}` : `--${key}`
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        traverse(obj[key], newPath)
      } else {
        result[newPath] = obj[key]
      }
    }
  }

  traverse(obj)
  return result
}

/**
 * 公共请求数据方法
 * @param cfg getDataCfg
 * @returns  data any
 */
export const getData = async (cfg:DataSetting):Promise<COMMON.obj> => {
  const { type, data, params, handleFunc, interfaceUrl, reqType } = cfg
  const { pool } = useParamsPool()
  let newParams:COMMON.obj = {}
  if (params) {
    let handleParmas = new Function('params', params)
    newParams = handleParmas(pool)
  }
  let p = new Promise<COMMON.obj>((resolve, reject) => {
    if (type == 'static') {
      let realdata
      if (handleFunc) {
        let fn = new Function('resData', handleFunc)
        realdata = fn(data)
      } else {
        realdata = data
      }
      resolve(realdata) 
    } else {
      axios({
        url: '/index/proxy',
        baseURL: import.meta.env.VITE_REQ_URL,
        method: 'post',
        data: {
          url: interfaceUrl,
          method: reqType,
          data: newParams,
        },
      }).then(res => {
        let data = res
        if (handleFunc) {
          try {
            let fn = new Function('resData', handleFunc)
            data = fn(res)
          } catch (error) {
            console.warn('处理函数执行失败', error)
          }
        }
        resolve(data)
      })
    }
  })
 
  return p
}

interface resCompData {
  id:string,
  data:any
}
/**
 * 页面请求数据方法
 * @param compCfg 
 * @returns 
 */
export const getViewData = async (compCfg:ViewComponent):Promise<resCompData> => {
  const { dataSetting, id } = compCfg
  const data = await getData(dataSetting)
  let p = new Promise<resCompData>((resolve, reject) => {
    resolve({
      id,
      data,
    })
  })

  return p
}
/**
 * 常用函数
 */
const func = {
  flat,
  unflat,
  routerPush,
  downloadFile,
  getViewData,
  getData,
}
export default func