let xValuesGravedad = ["Grave", "Moderado", "Estable"];
let yValues = [15, 30, 55];
let barColors = ["#BD0909", "#EB9617", "#1CA44A"];


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
        aspectRatio: 1.5
    }
  });

  new Chart("chart3", {
    type: "polarArea",
    data: {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
    },
    options: {
            aspectRatio: 1.5
    }
  });
