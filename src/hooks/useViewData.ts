import { ref } from 'vue'
import axios from 'axios'

const useGetCompData = async (dataSetting:DataSetting) => {
  const { type, data, params, handleFunc } = dataSetting
  let p = new Promise((resolve, reject) => {
    if (type == 'static') {
      resolve(data)
    } else {
      axios({
        url: data,
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
        resolve(data)
      })
    }
  })
 
  return p
}
export default useGetCompData