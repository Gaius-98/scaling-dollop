const template:viewCompCfg[] = [
  {
    label: '组件属性',
    ui: {
      type: 'collapse',
      field: '',
      children: [
        {
          label: '文本内容',
          ui: {
            type: 'textarea',
            field: 'props.value',
          },
        },
      ],
    },
  },
]

export default template