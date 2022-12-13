export default {
    legend: {
        name: '图例',
        model: 'legend',
        children: {
            show: {
                name: '显示',
                model: 'show',
                ui: {
                    type: 'boolean',
                    value: true,
                },
            },
            type: {
                name: '图例类型',
                model: 'type',
                ui: {
                    type: 'select',
                    options: [
                        { label: '普通图例', value: 'plain' },
                        { label: '翻页图例', value: 'scroll' },
                    ],
                    value: 'scroll',
                },
            },
            orient: {
                name: '图例方向',
                model: 'orient',
                ui: {
                    type: 'select',
                    options: [
                        { label: '垂直', value: 'vertical' },
                        { label: '水平', value: 'horizontal' },
                    ],
                    value: 'horizontal',
                },
            },
            left: {
                name: '相对图表左侧',
                model: 'left',
                ui: {
                    type: 'select',
                    options: [
                        { label: '居左', value: 'left' },
                        { label: '居中', value: 'center' },
                        { label: '居右', value: 'right' },
                    ],
                    value: 'center',
                },
            },
            top: {
                name: '相对图表顶部',
                model: 'top',
                ui: {
                    type: 'select',
                    options: [
                        { label: '置顶', value: 'top' },
                        { label: '居中', value: 'middle' },
                        { label: '置底', value: 'bottom' },
                    ],
                    value: 'top',
                },
            },
            icon: {
                name: '图例形状',
                model: 'icon',
                ui: {
                    type: 'select',
                    options: [
                        { label: '圆形', value: 'circle' },
                        { label: '矩形', value: 'rect' },
                        { label: '圆角矩形', value: 'roundRect' },
                        { label: '三角形', value: 'triangle' },
                        { label: '菱形', value: 'diamond' },
                        { label: '箭状', value: 'arrow' },
                        { label: '不显示', value: 'none' },
                    ],
                    value: 'rect',
                },
            },
        },
    },
}