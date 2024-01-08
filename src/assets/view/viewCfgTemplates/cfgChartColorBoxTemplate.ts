const template:ViewCompCfg[] = [
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
                label: '边框宽度',
                ui: {
                  props: {},
                  type: 'number',
                  field: 'props.styleConfig.default.borderWidth',
                },
              }, 
              {
                label: '边框颜色',
                ui: {
                  props: {},
                  type: 'color',
                  field: 'props.styleConfig.default.borderColor',
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
              {
                label: '圆角大小',
                ui: {
                  props: {},
                  type: 'number',
                  field: 'props.styleConfig.default.borderRadius',
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
                label: '边框宽度',
                ui: {
                  props: {},
                  type: 'number',
                  field: 'props.styleConfig.hover.borderWidth',
                },
              }, 
              {
                label: '边框颜色',
                ui: {
                  props: {},
                  type: 'color',
                  field: 'props.styleConfig.hover.borderColor',
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
              {
                label: '圆角大小',
                ui: {
                  props: {},
                  type: 'number',
                  field: 'props.styleConfig.hover.borderRadius',
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