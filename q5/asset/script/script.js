const div = document.querySelector('.buttons');
const p = document.createElement('p');
div.append(p);
div.addEventListener('click', (e) => {
    if (e.target.className == 'button-class') {
        p.innerHTML = 'button-class';
    } else {
        p.innerHTML = 'click!';
    }
});