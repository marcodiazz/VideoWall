let xValuesGravedad = ["Grave", "Moderado", "Estable"];
let yValues = [15, 30, 55];
let barColors = ["#ff595e", "#ffd166", "#06d6a0"];


new Chart("chart1", {
    type: "bar",
    data: {
        labels: xValuesGravedad,
        datasets: [{
          label: [],
            backgroundColor: barColors, 
            data: yValues,
            borderRadius: 15
        }]
    },
    options: {
        aspectRatio: 1.7
    }
  });

  new Chart("chart2", {
    type: "doughnut",
    data: {
        labels: [
          'MEDICINA INTERNA',
          'HOSPITALIZACIÓN',
          'CARDIOLOGÍA', 
          'PULMONAR',
          'MEDICINA GENERAL'
        ],
        datasets: [{
          label: 'Ocupacion de Areas',
          data: [300, 50, 100, 200, 150],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(201, 103, 207)',
            'rgb(75, 192, 192)'
          ],
          hoverOffset: 4
        }]
      },
    options: {
        aspectRatio: 1.7
    }
  });

  new Chart("chart3", {
    type: "polarArea",
    data: {
        labels: [
          'CARDIOVASCULARES',
          'RESPIRATORIAS',
          'NEUROLÓGICAS',
          'SEPSIS',
          'GRASTROINTESTINAL'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [683, 463, 518, 388, 464],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 103, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
    },
    options: {
            aspectRatio: 1.7
    }
  });

new Chart("chart4", {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'PACIENTES DE NUEVO INGRESO',
            data: Array.from({length: 12}, (_, i) => Math.random()*100), // 12 valores random de prueba
            cubicInterpolationMode: 'monotone', // Lineas suaves
            tension: 100,
            yAxisID: 'y',

            borderColor: [ '#e3a5e0' ]
        }, {
            label: 'PACIENTES ANTIGUOS',
            data: Array.from({length: 12}, (_, i) => Math.random()*100), // 12 valores random de prueba
            cubicInterpolationMode: 'monotone', // Lineas suaves
            tension: 100,
            yAxisID: 'y1',
            borderColor: [ '#d8d2fc' ]
        }]
    },
    options: {
        aspectRatio: 1.7,
      elements: { point: { radius: 0 } },
      scales: {
          x: { grid: { display: false } },
          y: { type: 'linear', display: 'true', position: 'left' },
          y1: { type: 'linear', display: 'true', position: 'right', grid: { drawOnChartArea: false  }, ticks: { display: false } },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
    }
});
