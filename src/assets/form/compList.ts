import { v4 as uuid } from 'uuid'

const compList = <FormComp[]>[
  {
    comp: 'input', // 组件
    compId: '1', // 随机uuid
    name: '输入框',
    type: 'component',
    prop: { // 配置项
      placeholder: '输入提示',
      readonly: false,
      disabled: false,
      field: '1', // 字段名
      clearable: true,
      showPassword: false,
    },
    form_config: {
      label: '输入框', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
    comp: 'textarea', // 组件
    compId: '1', // 随机uuid
    name: '文本域',
    type: 'component',
    prop: { // 配置项
      placeholder: '输入提示',
      readonly: false,
      disabled: false,
      field: '1', // 字段名
      type: 'textarea',
      rows: 2,
    },
    form_config: {
      label: '文本域', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
    
    comp: 'select', // 组件
    compId: '2', // 随机uuid
    name: '选择框',
    type: 'component',
    prop: { // 配置项
      options: [{
        value: 1,
        label: 1,
        key: 1,
      }],
      placeholder: '输入提示',
      readonly: false,
      disabled: false,
      field: '2', // 字段名
      clearable: true,
      filterable: true,
    },
    form_config: {
      label: '选择框', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
   
    comp: 'color', // 组件
    compId: '3', // 随机uuid
    name: '取色器',
    type: 'component',
    prop: { // 配置项
      readonly: false,
      disabled: false,
      field: '3', // 字段名
    },
    form_config: {
      label: '取色器', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
    
    comp: 'checkbox', // 组件
    compId: '4', // 随机uuid
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
      placeholder: '输入提示',
      readonly: false,
      disabled: false,
      field: '4', // 字段名
    },
    form_config: {
      label: '多选框', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
    
    comp: 'date', // 组件
    compId: '5', // 随机uuid
    name: '日期选择器',
    type: 'component',
    prop: { // 配置项
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD',
      type: 'date',
      placeholder: '输入提示',
      readonly: false,
      disabled: false,
      field: '5', // 字段名
    },
    form_config: {
      label: '日期选择器', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
   
    comp: 'number', // 组件
    compId: '6', // 随机uuid
    name: '数字输入框',
    type: 'component',
    prop: { // 配置项
      placeholder: '输入提示',
      readonly: false,
      disabled: false,
      field: '6', // 字段名
      step: 1,
      min: 0,
      max: 100,
      controlsPosition: 'right',
    },
    form_config: {
      label: '数字输入框', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
   
    comp: 'switch', // 组件
    compId: '7', // 随机uuid
    name: '开关',
    type: 'component',
    prop: { // 配置项
      placeholder: '输入提示',
      disabled: false,
      field: '6', // 字段名
      activeText: '',
      inactiveText: '',
    },
    form_config: {
      label: '开关', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
   
    comp: 'time', // 组件
    compId: '7', // 随机uuid
    name: '时间选择器',
    type: 'component',
    prop: { // 配置项
      placeholder: '输入提示',
      format: 'HH:mm:ss',
      isRange: false,
      arrowControl: false,
      clearable: false,
      editable: false,
      readonly: false,
      disabled: false,
      field: '6', // 字段名
    },
    form_config: {
      label: '时间选择器', // 展示描述
      rules: {
        required: false,
        message: '提示',
        trigger: 'blur',
      },
    },
  },
  {
   
    comp: 'button', // 组件
    compId: '7', // 随机uuid
    name: '按钮',
    type: 'component',
    prop: { // 配置项
      round: false,
      link: false,
      bg: false,
      text: false,
      plain: false,
      disabled: false,
      field: '6', // 字段名
      name: '按钮',
      size: 'default',
      type: 'info',
      clickEvent: '',
    },
  },
  {
    
    comp: 'grid', // 组件
    compId: '', // 随机uuid
    name: '栅格',
    type: 'container', // 容器
    prop: { // 配置项
      cols: [
        {
          list: [],
          key: uuid(),
          span: 12,
        },
        {
          list: [],
          key: uuid(),
          span: 12,
        },
      ],
      gutter: 0,
      field: '', // 字段名 
    },
  },
  {
    
    comp: 'card', // 组件
    compId: '', // 随机uuid
    name: '卡片容器',
    type: 'container', // 容器
    prop: { // 配置项
      card: {
        list: [],
      },
      field: '', // 字段名 
      header: '卡片容器标题',
      shadow: 'always',
    },
  },
  {
    
    comp: 'collapse', // 组件
    compId: '', // 随机uuid
    name: '折叠面板',
    type: 'container', // 容器
    prop: { // 配置项
      collapse: {
        list: [],
      },
      field: '', // 字段名 
      title: '折叠面板标题',
    },
  },
]
export default compList