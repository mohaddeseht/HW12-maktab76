function eventFunction(event) {
    const span = document.getElementById('showPosition');
    span.innerHTML = event.pageX, event.pageY;
}