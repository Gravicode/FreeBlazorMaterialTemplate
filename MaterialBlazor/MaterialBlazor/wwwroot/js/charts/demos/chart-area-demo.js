function LoadAreaChartDemo(DivId,LabelName, Labels,Datas) {
    // Demo Area Chart
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
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Labels,
            datasets: [{
                fill: {
                    target: 'origin',
                    above: primaryColorOpacity10,   
                },
                borderColor: primaryColor,
                label: LabelName,
                tension: 0, // setting tension to 0 disables bezier curves, using a value from 0 to 1 will change the curvature of the line
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 0,
                pointHitRadius: 30,
                pointHoverBackgroundColor: primaryColor,
                pointHoverRadius: 5,
                pointRadius: 0,
                data: Datas,
            }],
        },
        options: {
            scales: {
                x: {
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    },
                },
                y: {
                    ticks: {
                        min: 0,
                        max: 40000,
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