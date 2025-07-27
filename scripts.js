
// Selecciona el botón hamburguesa y la lista de navegación
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Agrega un listener para que al hacer clic, se despliegue la lista
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// Gráfico interactivo de resultados usando Chart.js
const ctx = document.getElementById('graficoResistencia').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['(Compresión) Tipo 1', '(Compresión) Tipo 2', '(Flexo Tracción) Tipo 1', '(Flexo Tracción) Tipo 2'],
        datasets: [{
            label: 'Resistencia del concreto a la Compresión y a la Flexo Tracción MR (MPa)',
            data: [1.36, 0.51, 1.76, 0.82],
            backgroundColor: [
                'rgba(235, 54, 54, 0.2)',
                'rgba(235, 54, 54, 0.2)',
                'rgba(255, 247, 0, 0.46)',
                'rgba(255, 247, 0, 0.46)'
            ],
            borderColor: [
                'rgb(24, 0, 204)',
                'rgb(5, 156, 0)',
                'rgb(24, 0, 204)',
                'rgb(5, 156, 0)'
            ],

            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
                title: {
                display: true,
                text: 'Resistencia (MPa)'
                }
                
            }
        }
    }
});

// Desplazamiento suave para la navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});











// Gráfica de Absorción
const ctx1 = document.getElementById('absorcionChart').getContext('2d');
const myChart1 = new Chart(ctx1, {
type: 'bar',
data: {
    labels: ['Adoquin Tipo 1', 'Adoquin Tipo 2'],
    datasets: [{
    label: '% de Absorción',
    data: [6, 11],
    backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(62, 214, 59, 0.2)'],
    borderColor: ['rgb(24, 0, 204)', 'rgb(5, 156, 0)'],
    borderWidth: 1
    }]
},
options: {
    responsive: true,
    scales: {
    y: {
        beginAtZero: true,
        max: 15,
        title: {
        display: true,
        text: 'Porcentaje (%)'
        }
    }
    },
    plugins: {
    title: {
        display: true,
        text: 'Comparación de Porcentaje de Absorción'
    }
    }
}
});




  // Gráfica de Infiltración
  const ctx2 = document.getElementById('infiltracionChart').getContext('2d');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Adoquin Tipo 1', 'Adoquin Tipo 2'],
      datasets: [{
        label: 'Infiltración (cm/s)',
        data: [2.43, 2.45],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(62, 214, 59, 0.2)'],
        borderColor: ['rgb(24, 0, 204)', 'rgb(5, 156, 0)'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          min: 0,
          max: 3,
          title: {
            display: true,
            text: 'cm/s'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Comparación de Infiltración'
        }
      }
    }
  });