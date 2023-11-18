import { reactive, watch } from 'vue'

const pool = reactive<COMMON.obj>({})
const useParamsPool = () => {
  const setParams = (paramsObj:COMMON.obj) => {
    Object.assign(pool, {
      ...pool,
      ...paramsObj,
    })
  }
  const initPool = () => {
    Object.assign(pool, {})
  }
  return {
    pool,
    setParams,
    initPool,
  }
}
export default useParamsPool