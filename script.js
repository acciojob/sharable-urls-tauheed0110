// your code here
const button = document.getElementById('button');
const url = document.getElementById('url');

button.addEventListener('click', (e)=>{
    // e.preventDefault();
    url.textContent = location.href;
})
