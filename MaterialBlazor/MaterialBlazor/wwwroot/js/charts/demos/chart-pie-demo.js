function LoadPieChart(DivId,Labels,Datas) {
    // Demo Pie Chart
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
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Labels,
            datasets: [{
                data: Datas,
                backgroundColor: [primaryColor, infoColor, secondaryColor, warningColor],
            }],
        },
    });
}