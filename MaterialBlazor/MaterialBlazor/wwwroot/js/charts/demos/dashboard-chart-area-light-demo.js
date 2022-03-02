function LoadChartAreaLight(DivId,Labels,Datas) {

    // Demo Smooth Area Chart
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

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255,255,255,0.3)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Labels,
            datasets: [{
                fill: {
                    target: 'origin',
                    above: gradient,
                },
                borderColor: 'rgba(255, 255, 255, 1)',
                label: 'Sessions',
                tension: 0.3, // setting tension to 0 disables bezier curves, using a value from 0 to 1 will change the curvature of the line
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 0,
                pointHitRadius: 30,
                pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
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
                        borderDash: [5, 10],
                        borderDashOffset: 5,
                        color: 'rgba(255, 255, 255, .3)',
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, .75)',
                        maxTicksLimit: 7
                    },
                },
                y: {
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        display: false
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