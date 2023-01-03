import { v4 as uuid } from 'uuid'

const compList = [
  {
    field: '', // 字段名
    comp: 'input', // 组件
    compId: '', // 随机uuid
    name: '输入框',
    type: 'component',
    prop: { // 配置项
      placeholder: '输入提示',
    },
    form_config: {
      label: '输入框', // 展示描述
    },
  },
  {
    field: '', // 字段名
    comp: 'select', // 组件
    compId: '', // 随机uuid
    name: '选择框',
    type: 'component',
    prop: { // 配置项
      options: [{
        value: 1,
        label: 1,
      }],
    },
    form_config: {
      label: '选择框', // 展示描述
    },
  },
  {
    field: '', // 字段名
    comp: 'color', // 组件
    compId: '', // 随机uuid
    name: '取色器',
    type: 'component',
    prop: { // 配置项
      
    },
    form_config: {
      label: '取色器', // 展示描述
    },
  },
  {
    field: '', // 字段名
    comp: 'checkbox', // 组件
    compId: '', // 随机uuid
    name: '多选框',
    type: 'component',
    prop: { // 配置项
      options: [{
        value: 1,
        label: 1,
      }, {
        value: 2,
        label: 2,
      }],
    },
    form_config: {
      label: '多选框', // 展示描述
    },
  },
  {
    field: '', // 字段名
    comp: 'date', // 组件
    compId: '', // 随机uuid
    name: '日期选择器',
    type: 'component',
    prop: { // 配置项
      valueFormat: 'YYYY-MM-DD',
      type: 'date',
    },
    form_config: {
      label: '日期选择器', // 展示描述
    },
  },
  {
    field: '', // 字段名
    comp: 'number', // 组件
    compId: '', // 随机uuid
    name: '数字输入框',
    type: 'component',
    prop: { // 配置项
      
    },
    form_config: {
      label: '数字输入框', // 展示描述
    },
  },
  {
    field: '', // 字段名
    comp: 'grid', // 组件
    compId: '', // 随机uuid
    name: '栅格',
    type: 'container',
    prop: { // 配置项
      cols: [
        {
          list: [],
          id: uuid(),
          span: 12,
        },
        {
          list: [],
          id: uuid(),
          span: 12,
        },
      ],  
    },
  },
]
export default compList