import gridTemplate from './cfgChartCommonTemplate/cfgChartGridTemplate'
import legendTemplate from './cfgChartCommonTemplate/cfgChartLegendTemplate'
import titleTemplate from './cfgChartCommonTemplate/cfgChartTitleTemplate'

const lineTemplate:ViewCompCfg[] = [
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
                label: '系列',
                ui: {
                  field: 'props.option.series',
                  type: 'tab',
                  props: {
                    tabTitle: '系列',
                  },
                  children: [
                    {
                      label: '类型',
                      ui: {
                        type: 'select',
                        field: 'type',
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
                            {
                              label: '散点',
                              value: 'scatter',
                            },
                          ],
                        },
                      },
                    },
                    {
                      label: '堆叠属性名',
                      ui: {
                        field: 'stack',
                        type: 'input',
                        props: {},
                      },
                    },
                    {
                      label: '连接空数据',
                      ui: {
                        field: 'connectNulls',
                        type: 'switch',
                        props: {},
                      },
                    },
                    {
                      label: '是否平滑曲线',
                      ui: {
                        field: 'smooth',
                        type: 'switch',
                        props: {},
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
]
export default lineTemplate