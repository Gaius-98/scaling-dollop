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
        let fn = new Function('resData', handleFunc)
        let data = fn(res)
        resolve(data)
      })
    }
  })
 
  return p
}
export default useGetCompData