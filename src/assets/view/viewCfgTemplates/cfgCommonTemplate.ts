const commonTemplate:viewCompCfg[] = [
  {
    label: '位置及大小信息',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: '距顶部高度',
          ui: {
            type: 'number',
            field: 'positionSize.top',
            props: {},
          },
        }, 
        {
          label: '距左侧距离',
          ui: {
            type: 'number',
            field: 'positionSize.left',
            props: {},
          },
        },
        {
          label: '宽度',
          ui: {
            type: 'number',
            field: 'positionSize.width',
            props: {},
          },
        },
        {
          label: '高度',
          ui: {
            type: 'number',
            field: 'positionSize.height',
            props: {},
          },
        },
      ],
    },
  },
]
export default commonTemplate