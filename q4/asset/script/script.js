const lis = document.querySelectorAll('li');
lis.forEach(li => {
    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
    })
})