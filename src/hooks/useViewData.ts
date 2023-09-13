import { ref } from 'vue'
import axios from 'axios'

interface resCompData {
  id:string,
  data:any
}
const useGetCompData = async (compCfg:viewComponent):Promise<resCompData> => {
  const { dataSetting: { type, data, params, handleFunc, interfaceUrl }, id } = compCfg
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
        params,
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