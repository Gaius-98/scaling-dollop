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
            type: 'input',
            field: 'props.src',
          },
        },
        {
          label: '文本描述',
          ui: {
            type: 'input',
            field: 'props.alt',
          },
        },
        {
          label: '适配方式',
          ui: {
            type: 'select',
            field: 'props.fit',
            props: {
              options: [
                {
                  label: '等比缩放',
                  value: 'contain',
                },
                {
                  label: '等比填充',
                  value: 'cover',
                },
                {
                  label: '拉伸填充',
                  value: 'fill',
                },
                {
                  label: '实际尺寸',
                  value: 'none',
                },
              ],
            },
          },
        },
      ],
    },
  },
]
  
export default template