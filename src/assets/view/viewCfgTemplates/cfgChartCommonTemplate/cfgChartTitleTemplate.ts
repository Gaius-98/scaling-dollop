const titleTemplate:ViewCompCfg[] = [

  {
    label: '标题配置',
    ui: {
      type: 'collapse',
      field: '',
      props: {},
      children: [
        {
          label: '显示',
          ui: {
            type: 'switch',
            field: 'props.option.title.show',
            props: {},
          },
        },
        {
          label: '主标题文本',
          ui: {
            type: 'input',
            field: 'props.option.title.text',
            props: {},
          },
        },
        
        {
          label: '主标题超链接',
          ui: {
            type: 'input',
            field: 'props.option.title.link',
            props: {},
          },
        },
        {
          label: '副标题文本',
          ui: {
            type: 'input',
            field: 'props.option.title.subtext',
            props: {},
          },
        },
        
        {
          label: '副标题超链接',
          ui: {
            type: 'input',
            field: 'props.option.title.sublink ',
            props: {},
          },
        },
        {
          label: '主标题文本样式',
          ui: {
            type: 'collapse',
            field: 'props.option.title.textStyle',
            props: {},
            children: [
              {
                label: '字体颜色',
                ui: {
                  type: 'color',
                  field: 'props.option.title.textStyle.color',
                  props: {},
                },
              },
              {
                label: '字体大小',
                ui: {
                  type: 'number',
                  field: 'props.option.title.textStyle.fontSize',
                  props: {},
                },
              },
              {
                label: '字体粗细',
                ui: {
                  type: 'number',
                  field: 'props.option.title.textStyle.fontWeight',
                  props: {},
                },
              },
            ],
          },
        },
        {
          label: '副标题文本样式',
          ui: {
            type: 'collapse',
            field: 'props.option.title.subtextStyle',
            props: {},
            children: [
              {
                label: '字体颜色',
                ui: {
                  type: 'color',
                  field: 'props.option.title.subtextStyle.color',
                  props: {},
                },
              },
              {
                label: '字体大小',
                ui: {
                  type: 'number',
                  field: 'props.option.title.subtextStyle.fontSize',
                  props: {},
                },
              },
              {
                label: '字体粗细',
                ui: {
                  type: 'number',
                  field: 'props.option.title.subtextStyle.fontWeight',
                  props: {},
                },
              },
            ],
          },
        },
        {
          label: '标题位置',
          ui: {
            type: 'collapse',
            field: '',
            props: {},
            children: [
              {
                label: '距顶部高度',
                ui: {
                  type: 'number',
                  field: 'props.option.title.top',
                  props: {},
                },     
              },
              {
                label: '距左侧距离',
                ui: {
                  type: 'number',
                  field: 'props.option.title.left',
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
export default titleTemplate