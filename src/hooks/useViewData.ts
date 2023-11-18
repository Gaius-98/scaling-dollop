import { ref } from 'vue'
import axios from 'axios'
import useParamsPool from './useParamsPool'
import { cloneDeep } from 'lodash'

interface resCompData {
  id:string,
  data:any
}
const useGetCompData = async (compCfg:ViewComponent):Promise<resCompData> => {
  const { dataSetting: { type, data, params, handleFunc, interfaceUrl }, id } = compCfg
  const { pool } = useParamsPool()
  console.log(pool, '---new-*--')
  let newParams:COMMON.obj = {}
  if (params) {
    newParams = cloneDeep(params)
    Object.keys(newParams).forEach(key => {
      if (pool[newParams[key]]) {
        newParams[key] = pool[newParams[key]]
      }
    })
  }
  console.log(newParams)
  let p = new Promise<resCompData>((resolve, reject) => {
    if (type == 'static') {
      resolve({
        id,
        data,
      }) 
    } else {
      axios({
        url: interfaceUrl,
        method: 'post',
        data: newParams,
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
        resolve({
          id,
          data,
        })
      })
    }
  })
 
  return p
}
export default useGetCompData