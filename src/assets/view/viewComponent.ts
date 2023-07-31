export default [
  {
    name: 'ev-text',
    id: '1',
    type: 'text',
    label: '文本组件',
    icon: 'icon-text',
    props: {
      value: '123',
    },
  },
  {
    name: 'ev-img',
    id: '2',
    type: 'img',
    label: '图片组件',
    icon: 'icon-tupian',
    props: {
      src: 'https://img1.baidu.com/it/u=1400131798,3422378849&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690304400&t=6836d8acb0adcf55038070c7599815d7',
    },
  },
  {
    name: 'ev-chart',
    id: '3',
    type: 'chartBar',
    label: '柱状图组件',
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
  },
  {
    name: 'ev-chart',
    id: '4',
    type: 'chartBar',
    label: '折线图组件',
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
          {
            type: 'line',
          },
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
  },
  {
    name: 'ev-chart',
    id: '5',
    type: 'chartPie',
    label: '饼图组件',
    icon: 'icon-keshihuatubiao-10',
    props: {
      option: {
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
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
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
  },
]