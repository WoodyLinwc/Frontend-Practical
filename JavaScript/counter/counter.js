

let count = 0;
const number = document.getElementById('count');
const button = document.querySelector('#btn')


// add click event listener
button.addEventListener('click', ()=>{
    count++;
    number.textContent = count;
})


// reset
const reset = document.querySelector('.reset');

reset.addEventListener('click', ()=>{
    count = 0;
    number.textContent = count;
})


