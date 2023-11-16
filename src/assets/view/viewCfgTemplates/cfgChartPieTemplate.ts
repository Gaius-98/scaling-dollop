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
                label: '数据源类型',
                ui: {
                  type: 'select',
                  field: 'dataSetting.type',
                  props: {
                    options: [
                      {
                        label: '静态',
                        value: 'static',
                      }, {
                        label: '动态',
                        value: 'dev',
                      },
                    ],
                  },
                },
              },
              {
                label: '数据源',
                ui: {
                  type: 'code',
                  connectShow: {
                    field: 'dataSetting.type',
                    value: 'static',
                  },
                  field: 'dataSetting.data',
                  props: {
                    
                  },
                },
              },
              {
                label: '接口地址',
                ui: {
                  type: 'input',
                  connectShow: {
                    field: 'dataSetting.type',
                    value: 'dev',
                  },
                  field: 'dataSetting.interfaceUrl',
                  props: {
                    
                  },
                },
              },
              {
                label: '接口参数',
                ui: {
                  type: 'varObj',
                  field: 'dataSetting.params',
                  connectShow: {
                    field: 'dataSetting.type',
                    value: 'dev',
                  },
                  props: {
                    
                  },
                },
              },
              {
                label: '处理函数',
                ui: {
                  type: 'input',
                  field: 'dataSetting.handleFunc',
                  connectShow: {
                    field: 'dataSetting.type',
                    value: 'dev',
                  },
                  props: {
                    
                  },
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