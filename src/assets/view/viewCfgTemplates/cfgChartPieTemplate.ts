const pieTemplate:viewCompCfg[] = [
  {
    label: 'echart配置',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: '系列',
          ui: {
            type: 'collapse',
            field: '',
            props: {},
            children: [
              {
                label: '数据源',
                ui: {
                  type: 'code',
                  field: 'props.option.series.0.data',
                  props: {
                  },
                },
              },
              {
                label: '类型',
                ui: {
                  type: 'select',
                  field: 'props.option.series.0.type',
                  props: {
                    options: [
                      {
                        label: '饼图',
                        value: 'pie',
                      },
                    ],
                  },
                },
              },
              {
                label: '半径',
                ui: {
                  type: 'slider',
                  field: 'props.option.series.0.radius',
                  props: {},
                },
              },
            ],
          },
        },
      ],
    },
  },
]
export default pieTemplate