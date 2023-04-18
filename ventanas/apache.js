let xValuesGravedad = ["Grave", "Moderado", "Estable"];
let yValues = [15, 30, 55];
let barColors = ["#BD0909", "#EB9617", "#1CA44A"];

const ctx1 = document.getElementById('chart1')
const ctx2 = document.getElementById('chart2')

new Chart("chart1", {
    type: "bar",
    data: {
        labels: xValuesGravedad,
        datasets: [{
            backgroundColor: barColors, 
            data: yValues
        }]
    },
    options: {
    }
  });
  new Chart("chart2", {
    type: "doughnut",
    data: {
        labels: [
          'Pediatria',
          'Cirugia',
          'Neurologia'
        ],
        datasets: [{
          label: 'Ocupacion de Areas',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
    options: {
    }
  });
