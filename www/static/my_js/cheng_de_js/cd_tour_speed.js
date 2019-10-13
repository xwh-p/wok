var myChart_old_index = echarts.init(document.getElementById('tour_speed'));

function new_old_index(data) {
    // 基于准备好的dom，初始化echarts实例


    var option_old = {
        title: {
            text: '旅游行业用电增速',
            x: 'left',
            textStyle: {
                color: 'black',
                fontSize: 16
            }
        },
        grid: {
            top: '20%',//距上边距

            left: '10%',//距离左边距

            right: '10%',//距离右边距

            bottom: '11%',//距离下边距
            //containLabel: true,

        },
        legend: {
            data: ['住宿', '餐饮', '交通'],
            // x: 'center'
            left: '1%',
            top: '10%'
        },
        xAxis: {
            // name:'日期',
            type: 'category',
            data: data.year
            // data: [2016, 2017, 2018]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '住宿',
            color:'blue',
            data: data.hotel,
            // data: [13.60950852, 15.97275969, 11.06062234],
            type: 'line'
        }, {
            name: '餐饮',
            color:'green',
            data: data.dining,
            // data: [17.28954656, 26.66247702, 27.11079536],
            type: 'line'
        },
            {
                name: '交通',
                color: 'red',
                data: data.transport,
                // data: [66.18314333, 68.76817292199202, 70.21250355],
                type: 'line'
            }
        ]
    };


    // myChart_new_index.setOption(option_new);
    myChart_old_index.setOption(option_old);
}

$(function () {
    $.get("/pow_tour/tour_speed",
        function (data) {
            var data = JSON.parse(data);
            // console.log('======================================')
            // console.log(data.data)
            // console.log('========================================')
            if (data.msg == 200) {
                new_old_index(data.data)
            } else {
                alert("信息不存在")
            }

        }
    )
    // new_old_index()
});