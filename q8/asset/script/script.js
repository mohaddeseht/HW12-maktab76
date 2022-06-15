const scriptTag = document.createElement('script');
scriptTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js';
let version = scriptTag.src.split('/');
document.body.append(scriptTag);
console.log(version[6]);