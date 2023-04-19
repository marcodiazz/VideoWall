
new Chart("chartPredic", {
    data: {
        datasets: [
            {
                type: 'line',
                label: 'Line Dataset',
                data: [25, 30, 40, 33, 45, 50, 60],
                borderColor: '#f34669',
                borderWidth: 5
    
            },
            {
            type: 'bar',
            label: 'Bar Dataset',
            data: [23, 27, 45, 37, 50],
            borderRadius: 10,
            backgroundColor: '#49cfd1a0',
            
        }],
        labels: ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO']
    },
    options: {
        
    }
  });
  