export default {
    tooltip: {
        name: '提示框配置',
        model: 'tooltip',
        children: {
            axisPointer: {
                name: '指示器配置',
                show: false,
                model: 'axisPointer',
                children: {
                    type: {
                        name: '指示器配置',
                        model: 'type',
                        ui: {
                            type: 'select',
                            value: 'cross',
                            options: [
                                { label: '直线指示器', value: 'line' },
                                { label: '阴影指示器', value: 'shadow' },
                                { label: '无指示器', value: 'none' },
                                { label: '十字准星指示器', value: 'cross' },
                            ],
                        },
                    },
                },
            },
            formatter: {
                name: '自定义浮层',
                model: 'formatter',
                ui: {
                    type: 'text',
                    value: '',
                },
            },
        },
    },
}