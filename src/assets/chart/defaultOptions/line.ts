export default {
    // 折线面积图
    xAxis: [{
        type: 'category',
        position: 'bottom',
    }],
    yAxis: {
        type: 'value',
    },
    legend: {
        
    },
    series: [{
        name: '类目一',
        data: [150, 12, 224, 218, 135, 147, 260],
        type: 'line',
    },
    {
        name: '类目二',
        data: [110, 21, 120, 318, 165, 177, 160],
        type: 'line',
    },
    ],
}