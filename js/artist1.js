document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('header h1');
    title.addEventListener('click', function() {
        title.style.color = title.style.color === 'yellow' ? '#fff' : 'yellow';
    });
});
