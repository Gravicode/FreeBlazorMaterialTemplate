function LoadBarChartDemo(DivId,LabelName, Labels,Datas) {
    // Demo Bar Chart
    // 
    // The style configurations in this demo are
    // intended to match the Material Design styling.
    // Use this demo chart as a starting point and for
    // reference when creating charts within an app.
    // 
    // Chart.js v3 is being used, which is currently
    // in beta. For the v3 docs, visit
    // https://www.chartjs.org/docs/master/

    var ctx = document.getElementById(DivId).getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Labels,
            datasets: [{
                label: LabelName,
                backgroundColor: primaryColor,
                borderColor: primaryColor,
                borderRadius: 4,
                maxBarThickness: 32,
                data: Datas,
            }],
        },
        options: {
            scales: {
                x: {
                    time: {
                        unit: 'month'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 12
                    },
                },
                y: {
                    ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5
                    },
                    gridLines: {
                        color: 'rgba(0, 0, 0, .075)',
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
            },
        }
    });
}