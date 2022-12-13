export default {
    // 饼图
    legend: {
        show: true,
        icon: 'circle',
    },
    tooltip: {
        trigger: 'item',
    },
    series: [{
        type: 'pie',
        radius: [0, '50%'],
        center: ['50%', '50%'],
        data: [
            { value: 648, name: '类目一' },
            { value: 735, name: '类目二' },
            { value: 580, name: '类目三' },
        ],
        labelLine: {
            show: true,
            length: 10,
            length2: 20,
        },
        label: {
            width: 60,
            fontSize: 12,
        },
        itemStyle: {
            borderColor: '#fff',
        },
    }],
}