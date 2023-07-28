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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
          },
        ],
      },
    },
  },
]