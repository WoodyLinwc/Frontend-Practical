/**
 * flatten array
 */
const nestedArray = [1,[2,[3,4,[5],[6,[7,8,[9]]]]]]

// flat()
const flatten = nestedArray.flat(Infinity);
// recursive
function flatten2(arr){
    return arr.reduce((acc,val) => Array.isArray(val) ? acc.concat(flatten2(val)) : acc.concat(val) ,[])
}



/**
 * convert array to set, set to array
 */
const duplicatesArray = [1,1,1,2,3,3,4,5,6,7,8,8,8]

// new Set() 
const uniqueSet = new Set(duplicatesArray);
// spread operator
const uniqueArray = [...uniqueSet];



/**
 * remove, add, sort, get substring of array
 */
const someArray = [0,1,2,3,4,5,6];

// stack operation, LIFO
someArray.push(7);
someArray.pop();
// queue operation, FIFO
someArray.unshift(-1);
someArray.shift();

// splice (index, remove, add items)
someArray.splice(0,1);
someArray.splice(6,0,'7')

// slice, substring (start include, end exclude) or (start include to rest) or (-last n-th)
const substring = someArray.slice(6,7)

// sort in descending 
someArray.sort((a,b) => b - a);



/**
 * Array iteration methods, higher-order function (accept function as argument)
 * 
 * map, filter, reduce, find, some, every, forEach
 */
const randomArray = [true, '1', 2, '3', 4, 5, 6, {name: 'Woody', age: 21}, null, {city: 'Boston'}];

// chainable
const result = randomArray
    .filter(x => typeof x === 'number') // [2, 4, 5, 6]
    .map(x => x * 2)    // [4, 8, 10, 12]
    .reduce((acc, val) => acc+val)  // [34]

// every()
const resultEvery = randomArray
    .every(x => typeof x !== 'function')    // true

// some()
const resultSome = randomArray
    .some(x => x < 1)  // true



/**
 * finding an element/index 
 */

// includes()
const resultIncludes = randomArray.includes(1)  // false, strict equality

// find()
const resultFirstNumber = randomArray
    .find(x => typeof x === 'number');  // 2

// findLast()
const resultLastObject = randomArray
    .findLast(x => typeof x === 'object');  // { city: 'Boston' }

// indexOf()
const resultIndexOf = randomArray.indexOf(true);    // 0

// lastIndexOf()
const resultLastIndexOf = randomArray.lastIndexOf(null);    // 8



/**
 * join, split, reverse, fill, at
 */
// join an array to string
const string1 = randomArray.join(" ")
// split a string to array
const array = string1.split(" ")
// reverse an array
const reverseArray = array.reverse();

// fill(value, start, end)
randomArray.fill('0',0,3);
// at(index)
randomArray.at(-1);




// spread and rest
const combineArrays = [...duplicatesArray,...someArray];

function add(...num){
    return num.reduce((acc,val) => acc + val, 0);
}
// console.log(add(1,2,3,4,5,4,5,4,3,3))