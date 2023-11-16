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
                  type: 'input',
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
        {
          label: '文本描述',
          ui: {
            type: 'input',
            props: {},
            field: 'props.alt',
          },
        },
        {
          label: '适配方式',
          ui: {
            type: 'select',
            field: 'props.fit',
            props: {
              options: [
                {
                  label: '等比缩放',
                  value: 'contain',
                },
                {
                  label: '等比填充',
                  value: 'cover',
                },
                {
                  label: '拉伸填充',
                  value: 'fill',
                },
                {
                  label: '实际尺寸',
                  value: 'none',
                },
              ],
            },
          },
        },
      ],
    },
  },
]
  
export default template