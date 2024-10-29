
const ctx = document.getElementById('myChart').getContext('2d');

const dataPoints = [3.8, 3.6, 3.7, 3.5, 3.4, 3.7, 3.2, 3.5, 3.3];

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2am', '10am', '6pm', '12pm', '2am'],
        datasets: [{
            label: 'Treasury Yield',
            data: dataPoints,
            fill: true,
            backgroundColor: 'rgba(163, 235, 148, 0.5)',
            borderColor: '#00FF00',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#00FF00',
            pointBorderWidth: 2,
            pointHoverRadius: 5
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    color: '#444',
                },
                ticks: {
                    color: '#fff',
                },
            },
            y: {
                beginAtZero: false,
                grid: {
                    color: '#444',
                },
                ticks: {
                    color: '#fff',
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                    label: function(context) {
                        return context.parsed.y + '%';
                    }
                }
            }
        }
    }
});

