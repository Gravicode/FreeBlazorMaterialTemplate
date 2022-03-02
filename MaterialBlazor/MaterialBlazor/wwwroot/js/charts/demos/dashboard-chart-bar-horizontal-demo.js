function LoadBarChartHorizontal(DivId,Labels,Label1,Label2, Datas1, Datas2) {
    // Demo Horizontal Bar Chart
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
                label: Label1,
                backgroundColor: primaryColor,
                borderColor: primaryColor,
                borderRadius: 4,
                maxBarThickness: 32,
                data: Datas1,
            },
                {
                    label: Label2,
                backgroundColor: primaryColorOpacity50,
                borderColor: primaryColorOpacity50,
                borderRadius: 4,
                    maxBarThickness: 32,
                    data: Datas2,
            },
            ],
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    },
                },
                y: {
                    gridLines: {
                        color: 'rgba(0, 0, 0, .075)',
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: true
                }
            },
        }
    });
}