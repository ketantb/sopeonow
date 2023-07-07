var chart = document.querySelector("#chart")
const graphJson = [{ x: 0, y: 0.2 }, { x: 1, y: 2.18 },
{ x: 16, y: 2.57 }, { x: 11, y: 2.32 },
{ x: 5, y: 1.45 }, { x: 2, y: 0 },
{ x: 0, y: 0 }, { x: 0, y: 0 },
{ x: 0, y: 0 }, { x: 0, y: 0 }]

const interval = graphJson.map((el) => {
    return (el.x)
})

const seconds = graphJson.map((el) => {
    return (el.y)
})

var options = {
    chart: {
        height: 500,
        type: 'line',
    },
    colors: ['#f7c0c7', '#6b6b98'],
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        line: {
            horizontal: true
        }
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [0, 1]
    },
    series: [
        {
            name: 'Discharges By Interval',
            type: 'column',
            data: interval
        },
        {
            name: 'Avg Time',
            type: 'line',
            data: seconds
        }
    ],
    xaxis: {
        categories: ['12AM-06AM', '06AM-08AM', '08AM-10AM', '10AM-12PM', '12PM-02PM', '02PM-04PM', '04PM-06PM', '06PM-08PM', '08PM-10PM', '10PM-12AM']
    },
    annotations: {
        yaxis: [
            {
                y: 2,
                borderColor: '#00E396',
                label: {
                    borderColor: '#00E396',
                    borderRadius: '5px',
                    style: {
                        fontSize: '10px',
                        fontWeight: 900,
                        color: '#fff',
                        background: '#00E396'
                    },
                    text: 'KPI: 02:00'
                }
            }
        ]
    }
}

var chartElement = new ApexCharts(chart, options)
chartElement.render()