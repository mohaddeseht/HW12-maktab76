const h1 = document.getElementById('elemId');
const span = document.querySelector('span');
h1.addEventListener('click', (e) => {
    h1.textContent = 'goodbye';
    span.textContent = e.clientX + "  " + e.clientY;
});