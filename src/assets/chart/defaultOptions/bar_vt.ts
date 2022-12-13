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
        show: true,
        
    },
    xAxis: {
        type: 'category',
        axisPointer: {
            type: 'shadow',
        },
        splitLine: {
            show: true,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',

    },    
    series: [{
        name: '类目一',
        type: 'bar',
        data: [
            964, 959, 46, 451,
        ],
    },
    {
        name: '类目二',
        type: 'bar',
        data: [
            839, 419, 354, 364,
        ],
    },
    {
        name: '类目三',
        type: 'bar',
        data: [
            839, 19, 150, 254,
        ],
    },

    ],
}