const template:ViewCompCfg[] = [
  {
    label: '组件属性',
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
        {
          label: '超链接',
          ui: {
            props: {},
            type: 'collapse',
            field: '',
            children: [
              {
                label: '启用超链接',
                ui: {
                  type: 'switch',
                  props: {},
                  field: 'props.openUrl',
                },
              },
              {
                label: '超链接地址',
                ui: {
                  type: 'input',
                  props: {},
                  field: 'props.url',
                },
              },
              {
                label: '打开方式',
                ui: {
                  type: 'select',
                  props: {
                    options: [
                      {
                        label: '新页面',
                        value: '_blank',
                      },
                      {
                        label: '当前页面',
                        value: '_self',
                      },
                    ],
                  },
                  field: 'props.openType',
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    label: '组件样式',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: '默认样式',
          ui: {
            type: 'collapse',
            field: '',
            props: {},
            children: [
              {
                label: '字体大小',
                ui: {
                  props: {},
                  type: 'number',
                  field: 'props.styleConfig.default.fontSize',
                },
              }, 
              {
                label: '字体颜色',
                ui: {
                  props: {},
                  type: 'color',
                  field: 'props.styleConfig.default.color',
                },
              },
              {
                label: '背景颜色',
                ui: {
                  props: {},
                  type: 'color',
                  field: 'props.styleConfig.default.backgroundColor',
                },
              },
            ],
          },
        },
        {
          label: '悬浮样式',
          ui: {
            type: 'collapse',
            props: {},
            field: '',
            children: [
              {
                label: '字体大小',
                ui: {
                  props: {},
                  type: 'number',
                  field: 'props.styleConfig.hover.fontSize',
                },
              }, 
              {
                label: '字体颜色',
                ui: {
                  props: {},
                  type: 'color',
                  field: 'props.styleConfig.hover.color',
                },
              },
              {
                label: '背景颜色',
                ui: {
                  props: {},
                  type: 'color',
                  field: 'props.styleConfig.hover.backgroundColor',
                },
              },
            ],
          },
        },
      ],
    },
  },
]

export default template