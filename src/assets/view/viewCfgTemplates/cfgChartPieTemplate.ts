import gridTemplate from './cfgChartCommonTemplate/cfgChartGridTemplate'
import legendTemplate from './cfgChartCommonTemplate/cfgChartLegendTemplate'
import titleTemplate from './cfgChartCommonTemplate/cfgChartTitleTemplate'

const pieTemplate:ViewCompCfg[] = [
  {
    label: '图表配置',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: '数据源配置',
          ui: {
            type: 'collapse',
            props: {},
            field: '',
            children: [
              {
                label: '数据源',
                ui: {
                  type: 'dataSource',
                  field: 'dataSetting',
                  props: {},
                },
              },
            ],
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
              {
                label: '南丁格尔图',
                ui: {
                  type: 'select',
                  field: 'props.option.series.0.roseType',
                  props: {
                    options: [
                      {
                        label: '半径',
                        value: 'radius',
                      },
                      {
                        label: '面积  ',
                        value: 'area',
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
export default pieTemplate