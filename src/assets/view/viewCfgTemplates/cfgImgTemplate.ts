const template:viewCompCfg[] = [
  {
    label: '组件属性',
    ui: {
      type: 'collapse',
      field: '',
      children: [
        {
          label: '图片地址',
          ui: {
            type: 'textarea',
            field: 'props.src',
          },
        },
      ],
    },
  },
]
  
export default template