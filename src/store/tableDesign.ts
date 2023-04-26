import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { v4 as uuid } from 'uuid'

export const useTableDesignStore = defineStore('tableDesignStore', () => {
  const curColumn = reactive<COMMON.obj>({
    props: {
      slot: {
        enable: false,
        content: '',
      },
    },
    key: '1',
  })
  const tableConfig = reactive<tableConfig>({
    column: [],
    table: {
      height: 400,
      stripe: false,
      border: false,
      size: 'default',
      fit: true,
      showHeader: true,
      highlightCurrentRow: false,
      opt: {
        show: true,
        fixed: 'right',
        width: '200',
        label: '操作',
        slot: {
          enable: true,
          content: `<div>
                            <a>
                            查看
                            </a>
                    </div>`,
        },
      },
    },
    name: '',
  })
  const mockData = computed(() => {
    const { column } = tableConfig
    let obj:COMMON.obj = {}
    column.forEach(e => {
      obj[e.props.field] = uuid()
    })
    return new Array(10).fill(obj)
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
  return { curColumn, tableConfig, mockData, onClickColumn, init, setTable }
})