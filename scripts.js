
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
        labels: ['Sin aditivo', 'Aditivo A', 'Aditivo B', 'Aditivo C'],
        datasets: [{
            label: 'Resistencia del concreto (MPa)',
            data: [25, 30, 32, 28],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
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

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
});










