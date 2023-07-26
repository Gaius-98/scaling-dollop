const commonTemplate:viewCompCfg[] = [
  {
    label: '位置及大小信息',
    ui: {
      type: 'collapse',
      field: '',
      children: [
        {
          label: '距顶部高度',
          ui: {
            type: 'number',
            field: 'positionSize.top',
          },
        }, 
        {
          label: '距左侧距离',
          ui: {
            type: 'number',
            field: 'positionSize.left',
          },
        },
        {
          label: '宽度',
          ui: {
            type: 'number',
            field: 'positionSize.width',
          },
        },
        {
          label: '高度',
          ui: {
            type: 'number',
            field: 'positionSize.height',
          },
        },
      ],
    },
  },
]
export default commonTemplate