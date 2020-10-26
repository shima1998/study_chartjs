let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["赤", "青", "黄色", "緑", "紫", "橙"],
        datasets: [{
            label: '得票数',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function addData0(chart, label, data){
    chart.data.labels.push(label);
    // chart.data.datasets.forEach((dataset) => {
    //     dataset.data.push(data);
    // });
    chart.data.datasets.data.push(data);
    chart.update();
}

function removeData0(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function updateConfigByMutating(chart) {
    chart.options.title.text = 'FAMILY';
    chart.update();
}

var ctx1 = document.getElementById("myChart1").getContext('2d');

let labels1 = ['赤', '青', '黄色', '緑', '紫', '橙'];
let label1 = '得票数';
let data1 = [12, 19, 3, 5, 2, 3];
let backgroundColor1 = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
let borderColor1 = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

let myChart1 = new Chart(ctx1, {//外部のStrや文字列は読めるのか?
    type: 'bar',
    data: {
        labels: [labels1.slice(0,7)],
        datasets: [{
            label: label1,
            data: [data1],
            backgroundColor: [
                backgroundColor1
            ],
            borderColor: [
                borderColor1
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});