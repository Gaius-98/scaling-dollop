const commonTemplate:viewCompCfg[] = [
  {
    label: 'echart配置',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: 'X轴配置',
          ui: {
            type: 'collapse',
            field: '',
            props: {},
            children: [
              {
                label: 'X轴类别',
                ui: {
                  field: 'props.option.xAxis.type',
                  type: 'select',
                  props: {
                    options: [
                      {
                        label: '类目轴',
                        value: 'category',
                      },
                      {
                        label: '时间轴',
                        value: 'time',
                      },
                      {
                        label: '数值轴',
                        value: 'value',
                      },
                      {
                        label: '对数轴',
                        value: 'log',
                      },
                    ],
                  },
                },
              },
            ],
          },
        }, 
        {
          label: 'Y轴配置',
          ui: {
            type: 'collapse',
            field: '',
            props: {},
            children: [
              {
                label: 'Y轴类别',
                ui: {
                  field: 'props.option.yAxis.type',
                  type: 'select',
                  props: {
                    options: [
                      {
                        label: '类目轴',
                        value: 'category',
                      },
                      {
                        label: '时间轴',
                        value: 'time',
                      },
                      {
                        label: '数值轴',
                        value: 'value',
                      },
                      {
                        label: '对数轴',
                        value: 'log',
                      },
                    ],
                  },
                },
              },
            ],
          },
        }, 
        {
          label: '系列',
          ui: {
            type: 'collapse',
            field: '',
            props: {},
            children: [
              {
                label: '类型',
                ui: {
                  type: 'select',
                  field: 'props.option.series.0.type',
                  props: {
                    options: [
                      {
                        label: '柱状',
                        value: 'bar',
                      },
                      {
                        label: '折线',
                        value: 'line',
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
]
export default commonTemplate