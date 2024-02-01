export default [
  {
    name: 'ev-text',
    id: '1',
    type: 'text',
    label: 'text',
    icon: 'icon-text',
    props: {
      value: '文本内容',
    },
    dataSetting: {
      type: 'static',
      data: '文本',
      params: '',
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      handleFunc: `const { data } = resData
      return data.result.note
      `,
    },
  },
  {
    name: 'ev-img',
    id: '2',
    type: 'img',
    label: 'img',
    icon: 'icon-tupian',
    props: {
      src: 'https://avatars.githubusercontent.com/u/59641156?v=4',
    },
    dataSetting: {
      type: 'static',
      data: 'https://avatars.githubusercontent.com/u/59641156?v=4',
      params: '',
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      handleFunc: `const { data } = resData
      return data.result.img
      `,
    },
  },
  {
    name: 'ev-chart',
    id: '3',
    type: 'chartBar',
    label: 'bar',
    icon: 'icon-keshihuatubiao-1',
    props: {
      option: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            type: 'bar',
          },
          {
            type: 'bar',
          },
          {
            type: 'bar',
          },
        ],
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
          ],
        },
      },
    },
    dataSetting: {
      type: 'static',
      data: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      params: '',
      handleFunc: `const  data  =  [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ]
      return data
      `,
    },
  },
  {
    name: 'ev-chart',
    id: '4',
    type: 'chartBar',
    label: 'line',
    icon: 'icon-keshihuatubiao-3',
    props: {
      option: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            type: 'line',
          },

        ],
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
          ],
        },
      },
    },
    dataSetting: {
      type: 'static',
      data: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      params: '',
      handleFunc: `const  data  =  [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ]
      return data
      `,
    },
  },
  {
    name: 'ev-chart',
    id: '5',
    type: 'chartPie',
    label: 'pie',
    icon: 'icon-keshihuatubiao-10',
    props: {
      option: {
        dataset: {
          source: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: [0, 50],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    },
    dataSetting: {
      type: 'static',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      params: '',
      handleFunc: `const { data } = resData
      return data.result.note
      `,
    },
  },
  {
    name: 'ev-iframe',
    id: '6',
    type: 'iframe',
    label: 'iframe',
    icon: 'icon-tongyi-shuju-huiju',
    props: {
      url: 'https://blog.csdn.net/weixin_47030180',
    },
    dataSetting: {
      type: 'static',
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      data: 'https://blog.csdn.net/weixin_47030180',
      params: '',
      handleFunc: `const  data  =  [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ]
      return data
      `,
    },
  },
  {
    name: 'ev-icon',
    id: '7',
    type: 'icon',
    label: 'icon',
    icon: 'icon-tongyi-shuju-huiju',
    props: {
      icon: 'text',
    },
    dataSetting: {
      type: 'static',
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      data: 'text',
      params: '',
      handleFunc: `const  data  =  'move'
      return data
      `,
    },
  },
  {
    name: 'ev-select',
    id: '8',
    type: 'select',
    label: 'Select',
    icon: 'icon-tongyi-shuju-huiju',
    props: {
      value: '',
      list: [
        { value: 1, label: '男' },
        { value: 0, label: '女' },
      ],
      replaceFields: {
        value: 'value',
        label: 'label',
        key: 'value',
      },
      paramsField: {
        paramsValue: 'paramsValue',
      },
    },
    dataSetting: {
      type: 'static',
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      data: [
        { value: 1, label: '男' },
        { value: 0, label: '女' },
      ],
      params: '',
      handleFunc: `const  data  =  [
        { value: 'test1', label: '静态' },
        { value: 'test2', label: '动态' },
      ]
      return data
      `,
    },
  },
  {
    name: 'ev-color-box',
    id: '9',
    type: 'colorBox',
    label: '色块',
    icon: 'icon-rectangle',
    props: {
      styleConfig: {
        default: {
          backgroundColor: '#fff',
          borderRadius: 5,
        },
        hover: {
          backgroundColor: '#fff',
          borderRadius: 5,
        },
      },
    },
    dataSetting: {
      type: 'static',
      interfaceUrl: 'https://api.oioweb.cn/api/common/OneDayEnglish',
      data: 'text',
      params: '',
      handleFunc: `const  data  =  'move'
      return data
      `,
    },
  },
]