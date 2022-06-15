const div = document.querySelector('div');
const btn = document.querySelector('button');
const p = document.querySelector('p');
div.addEventListener('click', (e) => {
    p.innerHTML = e.target.tagName;
}, false)