// round chart
const labels = [
    'Đơn hàng đã giao',
    'Đơn hàng đã hủy',
    'Đơn hàng chờ giao'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Sơ đồ tổng hợp đơn hàng',
        backgroundColor: 
        [
            'rgb(255, 99, 132)',
            'rgb(255, 45, 132)', 
            'rgb(25, 99, 132)',
        ],
        borderColor: 
        [
            'rgb(255, 99, 132)',
            'rgb(255, 45, 132)',
            'rgb(25, 99, 132)',
        ],
        data: [55, 4, 49],
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {}
};
const roundChart = new Chart(
    document.getElementById('roundChart'),
    config
);

//my chart
const labels1 =[
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
]
console.log(labels1);
const data1 = {
  labels: labels1,
  datasets: [{
    label: 'Sơ đồ doanh thu theo tháng',
    data: [65, 59, 80, 81, 56, 55, 40, 56, 78, 109, 48, 89],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
    ],
    borderWidth: 1
  }]
};

const config1 = {
    type: 'bar',
    data: data1,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config1
);