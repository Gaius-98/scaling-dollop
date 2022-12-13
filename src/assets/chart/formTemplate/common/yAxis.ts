export default {
    yAxis: {
        name: 'y轴',
        model: 'yAxis',
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
                name: '类别',
                model: 'type',
                ui: {
                    type: 'select',
                    value: 'category',
                    options: [
                        { label: '数值轴', value: 'value' },
                        { label: '类目轴', value: 'category' },
                    ],
                },
            },
            axisLabel: {
                name: '标签刻度',
                model: 'axisLabel',
                children: {
                    show: {
                        name: '显示',
                        model: 'show',
                        ui: {
                            type: 'boolean',
                            value: true,
                        },
                    },
                    color: {
                        name: '颜色',
                        model: 'color',
                        ui: {
                            type: 'color',
                            value: '',
                        },
                    },
                    fontStyle: {
                        name: '字体',
                        model: 'fontStyle',
                        ui: {
                            type: 'select',
                            value: 'normal',
                            options: [
                                { label: '常规', value: 'normal' },
                                { label: '斜体', value: 'italic' },
                            ],
                        },
                    },
                    fontSize: {
                        name: '字号',
                        model: 'fontSize',
                        ui: {
                            type: 'number',
                            min: 0,
                            step: 1,
                            value: 12,
                        },
                    },
                },
            },
            axisLine: {
                name: '坐标轴线',
                model: 'axisLine',
                children: {
                    show: {
                        name: '显示',
                        model: 'show',
                        ui: {
                            type: 'boolean',
                            value: false,
                        },
                    },
                },
            },
            axisTick: {
                name: '坐标刻度',
                model: 'axisTick',
                children: {
                    show: {
                        name: '显示',
                        ui: {
                            type: 'boolean',
                            value: false,
                        },
                    },
                },
            },
        },
    },
}