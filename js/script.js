document.addEventListener('DOMContentLoaded', function() {
    // Alterar a cor do título ao clicar
    const title = document.querySelector('header h1');
    title.addEventListener('click', function() {
        title.style.color = title.style.color === 'yellow' ? '#fff' : 'yellow';
    });

    // Navegar para a página desejada ao clicar em um link
    const links = document.querySelectorAll('main ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Sem preventDefault() para permitir a navegação
            window.location.href = link.getAttribute('href');
        });
    });
});
