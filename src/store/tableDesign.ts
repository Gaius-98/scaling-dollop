import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useTableDesignStore = defineStore('tableDesignStore', () => {
  const curColumn = reactive<COMMON.obj>({
    props: {

    },
    key: '1',
  })
  const tableConfig = reactive<COMMON.obj>({
    column: [],
    table: {
    },
    name: '',
  })
  const onClickColumn = (column:COMMON.obj) => {
    Object.assign(curColumn, column)
  }
  const init = () => {
    Object.assign(tableConfig, {
      column: [],
      table: {
      },
      name: '',
    })
    Object.assign(curColumn, {})
  }
  const setTable = (form:COMMON.obj) => {
    Object.assign(tableConfig, form)
  }
  return { curColumn, tableConfig, onClickColumn, init, setTable }
})