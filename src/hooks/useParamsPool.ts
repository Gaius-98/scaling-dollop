import { reactive, watch } from 'vue'

const pool = reactive<COMMON.Obj>({})
const useParamsPool = () => {
  const setParams = (paramsObj:COMMON.Obj) => {
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