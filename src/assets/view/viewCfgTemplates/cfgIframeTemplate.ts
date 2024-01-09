const iframeTemplate:ViewCompCfg[] = [
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
]
export default iframeTemplate