export default {
    title: {
        name: '标题',
        model: 'title',
        children: {
            show: {
                name: '显示',
                model: 'show',
                ui: {
                    type: 'boolean',
                    value: true,
                },
            },
            text: {
                name: '标题名称',
                model: 'text',
                ui: {
                    type: 'text',
                    value: '',
                },
            },
            textStyle: {
                name: '标题样式',
                model: 'textStyle',
                children: {
                    color: {
                        name: '颜色',
                        model: 'color',
                        ui: {
                            type: 'color',
                            value: '',
                        },
                    },
                },
            },
        },
    },
}