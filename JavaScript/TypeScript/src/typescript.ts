let age : number = 24;
let myName = "Woody";
// literal
type Quantity = 50 | 100
let quantity: Quantity = 50;

// array and tuple
let numbers: number[] = [1,2,3,4];
let users: [number, boolean, string, any] = [120, false, "hi", 'any'];


// enum
enum Size{
    Small = 0,
    Median,
    Large
}
let mySize: Size = Size.Large; // output 2


// function return type
function calculate(income: number, year = 2025, month? : string): string{
    return income.toString();
}


// object
const employee: {
    readonly id: number,
    name?: string
} = {
    id: 1,
    name: 'Me'
}

// Using interfaces (preferred for reusable object types) Creating public APIs (easier to merge later)
interface CustomerWorker {
    id: number,
    name: string | object,
    address?: string
};
interface CustomerWorker{
    readonly age?: number
}
const worker: CustomerWorker = {
    id: 1,
    name: 'Woody'
}


// Type alias, Creating unions, tuples, or primitive type aliases
type Person = {
    name: string;
    age: number | string;
};

const person: Person = {
    name: 'Woody',
    age: 24
}


// narrowing
function toPercent(percent: number | string): string {

    if(typeof percent === 'number'){
        return `${percent}%`
    } else {
        return `${parseInt(percent)}%`
    }
}






// avoid using any
let level;
level = 'A';
level = 1;

function render(document: any){
    console.log(document);
}





// tsc filename.ts
// to compile

// tsc filename.js
// to execute

// tsc --init
// to configure