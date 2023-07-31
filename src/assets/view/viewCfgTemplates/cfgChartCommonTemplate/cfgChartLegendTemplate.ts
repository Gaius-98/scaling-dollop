const legendTemplate:viewCompCfg[] = [
  {
    label: '图例',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: '显示',
          ui: {
            type: 'switch',
            field: 'props.option.legend.show',
            props: {
            },            
          },
        },
        {
          label: '图例类型',
          ui: {
            type: 'select',
            field: 'props.option.legend.type',
            props: {
              options: [
                {
                  label: '普通图例',
                  value: 'plain',
                }, {
                  label: '滚动图例',
                  value: 'scroll',
                },
              ],
            },            
          },
        },
        {
          label: '图例图标',
          ui: {
            field: 'props.option.legend.icon',
            type: 'select',
            props: {
              options: [
                {
                  label: '圆形',
                  value: 'circle',
                },
                {
                  label: '长方形',
                  value: 'rect',
                },
                {
                  label: '带弧度的长方形',
                  value: 'roundRect',
                },
                {
                  label: '三角形',
                  value: 'triangle',
                },
                {
                  label: '菱形',
                  value: 'diamond',
                },
                {
                  label: '钉',
                  value: 'pin',
                },
                {
                  label: '箭头',
                  value: 'arrow',
                },
              ],
            },
          },
        },
        {
          label: '图例位置',
          ui: {
            type: 'collapse',
            field: '',
            props: {},
            children: [
              {
                label: '距顶部高度',
                ui: {
                  type: 'number',
                  field: 'props.option.legend.top',
                  props: {},
                },     
              },
              {
                label: '距左侧距离',
                ui: {
                  type: 'number',
                  field: 'props.option.legend.left',
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
export default legendTemplate