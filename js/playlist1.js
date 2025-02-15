document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('header h1');
    title.addEventListener('click', function() {
        title.style.color = title.style.color === 'yellow' ? '#fff' : 'yellow';
    });

    const musicLinks = document.querySelectorAll('main ul li a');
    musicLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Você clicou em ' + link.textContent);
        });
    });
});
