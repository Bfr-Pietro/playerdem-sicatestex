document.addEventListener('DOMContentLoaded', function() {
    // Navegar para a página desejada ao clicar em um link
    const links = document.querySelectorAll('main ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Sem preventDefault() para permitir a navegação
            window.location.href = link.getAttribute('href');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('ondeficamasmusicas');
    const leftIndicator = document.querySelector('.indicator-left');
    const rightIndicator = document.querySelector('.indicator-right');

    function updateIndicators() {
        // Mostrar/ocultar indicador esquerdo
        if (carousel.scrollLeft > 0) {
            leftIndicator.style.display = 'block';
        } else {
            leftIndicator.style.display = 'none';
        }
        
        // Mostrar/ocultar indicador direito
        if (carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth) {
            rightIndicator.style.display = 'block';
        } else {
            rightIndicator.style.display = 'none';
        }
    }

    // Atualizar indicadores na inicialização e ao rolar
    updateIndicators();
    carousel.addEventListener('scroll', updateIndicators);
});
