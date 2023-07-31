const gridTemplate:viewCompCfg[] = [
  {
    label: '网格容器',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: '是否显示',
          ui: {
            type: 'switch',
            field: 'props.option.grid.show',
            props: {},
          },
        },
        {
          label: '距左侧距离',
          ui: {
            type: 'number',
            field: 'props.option.grid.left',
            props: {},
          },
        },
        {
          label: '距顶部距离',
          ui: {
            type: 'number',
            field: 'props.option.grid.top',
            props: {},
          },
        },
      ],

    },
  },
]
export default gridTemplate