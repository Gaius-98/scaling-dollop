import gridTemplate from './cfgChartCommonTemplate/cfgChartGridTemplate'
import legendTemplate from './cfgChartCommonTemplate/cfgChartLegendTemplate'
import titleTemplate from './cfgChartCommonTemplate/cfgChartTitleTemplate'

const pieTemplate:viewCompCfg[] = [
  {
    label: '图表配置',
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
        ...titleTemplate,
        ...gridTemplate,
        ...legendTemplate,
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