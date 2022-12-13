export default {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            },
        },
    },
    legend: {
        
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        axisPointer: {
            type: 'shadow',
        },
    },
    series: [{
        name: '类目一',
        type: 'bar',
        data: [
            964, 519, 46, 451,
        ],
    },
    {
        name: '类目二',
        type: 'bar',
        data: [
            839, 419, 685, 356,
        ],
    },
    {
        name: '类目三',
        type: 'bar',
        data: [
            839, 411, 250, 312,
        ],
    },

    ],
}