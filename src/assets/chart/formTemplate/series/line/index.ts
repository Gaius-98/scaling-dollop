/**
 * 折线图系列配置
 */
export default {
    series: {
        name: '系列',
        model: 'series',
        tabs: true,
        children: {
            // "id": {
            //     "name": "ID",
            //     "model": "id",
            //     "show": false,
            //     "ui": {
            //         "type": "text",
            //         "value": "",
            //         // "readonly": true
            //     }
            // },
            name: {
                name: '系列名称',
                model: 'name',
                show: false,
                ui: {
                    type: 'text',
                    value: '',
                    // "readonly": true
                },
            },
            type: {
                name: '类型',
                model: 'type',
                ui: {
                    type: 'select',
                    value: 'line',
                    options: [
                        { label: '柱状', value: 'bar' },
                        { label: '折线', value: 'line' },
                        { label: '散点', value: 'scatter' },
                        { label: '涟漪散点', value: 'effectScatter' },
                    ],
                },
            },
            // "barWidth": {
            //     "name": "柱子宽度",
            //     "model": "barWidth",
            //     "ui": {
            //         "type": "text",
            //         "value": ""
            //     }
            // },
            smooth: {
                name: '是否平滑曲线',
                model: 'smooth',
                cancelBubble: true,
                ui: {
                    type: 'boolean',
                    value: false,
                },
            },
            connectNulls: {
                name: '连接空数据',
                model: 'connectNulls',
                cancelBubble: true,
                ui: {
                    type: 'boolean',
                    value: true,
                },
            },
            // "showBackground": {
            //     "name": "显示柱子背景",
            //     "model": "showBackground",
            //     "cancelBubble": true,
            //     "ui": {
            //         "type": "boolean",
            //         "value": true
            //     }
            // },
            // "backgroundStyle": {
            //     "name": "柱子背景",
            //     "model": "backgroundStyle",
            //     "children": {
            //         "color": {
            //             "name": "颜色",
            //             "model": "color",
            //             "cancelBubble": true,
            //             "ui": {
            //                 "type": "color",
            //                 "value": ""
            //             }
            //         }
            //     }
            // },
            // "label": {
            //     "name": "文本标签",
            //     "model": "label",
            //     "children": {
            //         "show": {
            //             "name": "显示",
            //             "model": "show",
            //             "ui": {
            //                 "type": "boolean",
            //                 "value": false
            //             }
            //         },
            //         "position": {
            //             "name": "位置",
            //             "model": "position",
            //             "ui": {
            //                 "type": "select",
            //                 "value": "top",
            //                 "options": [
            //                     { "label": "top", "value": "top" },
            //                     { "label": "left", "value": "left" },
            //                     { "label": "right", "value": "right" },
            //                     { "label": "bottom", "value": "bottom" },
            //                     { "label": "inside", "value": "inside" },
            //                     { "label": "insideLeft", "value": "insideLeft" },
            //                     { "label": "insideRight", "value": "insideRight" },
            //                     { "label": "insideTop", "value": "insideTop" },
            //                     { "label": "insideBottom", "value": "insideBottom" },
            //                     { "label": "insideTopLeft", "value": "insideTopLeft" },
            //                     { "label": "insideBottomLeft", "value": "insideBottomLeft" },
            //                     { "label": "insideTopRight", "value": "insideTopRight" },
            //                     { "label": "insideBottomRight", "value": "insideBottomRight" },
            //                 ]
            //             }
            //         },
            //         "color": {
            //             "name": "颜色",
            //             "model": "color",
            //             "ui": {
            //                 "type": "color",
            //                 "value": ""
            //             }
            //         }
            //     }
            // },
        },
    },
}