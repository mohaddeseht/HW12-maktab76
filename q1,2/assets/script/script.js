const nameInput = document.getElementById('name');
nameInput.addEventListener('change', () => {
    const p = document.querySelector('.err');
    if (nameInput.value == "") {
        p.style.color = 'red';
        p.innerHTML = 'invalid';
    }
    else {
        p.style.color = 'limegreen';
        p.innerHTML = 'valid';
    }
})
const email = document.getElementById('input');
function getEmail() {
    const output = document.querySelector('.output');
    output.innerHTML = email.value;
}
email.addEventListener('keyup', getEmail);

function myFunction(event) {
    event.preventDefault()
}