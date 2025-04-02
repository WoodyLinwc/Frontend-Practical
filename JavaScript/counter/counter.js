let count = 0;

const number = document.getElementById('count');
const button = document.querySelector('#btn')

// add click event listener
button.addEventListener('click', ()=>{
    count++;
    number.textContent = count;
})



// using closure
function createCounter() {
    let count = 0;

    return {
        getCount: function(){
            return count;
        },
        increment: function(){
            count++;
            return count;
        },
        reset: function(){
            count = 0;
            return count;
        }
    }
}
const number2 = document.getElementById('count2');
const button2 = document.querySelector('#btn2');

// create an object
const counter = createCounter();
button2.addEventListener('click', ()=>{
    counter.increment();
    number2.textContent = counter.getCount();
})



// using class
class Counter{
    #count = 0; // private field (ES2022)

    constructor(){}

    getCount(){
        return this.#count;
    }

    increment(){
        this.#count++;
        return this.#count;
    }

    reset(){
        this.#count = 0;
        return this.#count;
    }
}
const number3 = document.getElementById('count3');
const button3 = document.querySelector('#btn3');

// create an object
const counter2 = new Counter();
button3.addEventListener('click', ()=>{
    counter2.increment();
    number3.textContent = counter2.getCount();
})





// reset
const reset = document.querySelector('.reset');

reset.addEventListener('click', ()=>{
    count = 0;
    number.textContent = count;

    // reset closure counter
    counter.reset();
    number2.textContent = counter.getCount();

    // reset class counter
    counter2.reset();
    number3.textContent = counter2.getCount();
})


