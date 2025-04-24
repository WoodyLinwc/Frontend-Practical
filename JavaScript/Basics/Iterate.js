/**
 * iterate through array, string, object, map, set
 * 
 * string is iterable, but not support forEach directly
 * object is not iterable
 */

/**
 * array
 */
const array = [2,0,0,1,1,2,2];

// for, for...of
for(let i = 0; i<array.length;i++){}

for(let i of array){}


/**
 * string
 */
const string = "Woody";

// for, for...of
for(let i = 0; i<string.length;i++){}

for(let i of string){}


/**
 * map
 */
const entries = [['a', 1],['b',2]];
const map = new Map(entries);
map.set('c',3);


// for...of, forEach
for(let [key, value] of map){
    console.log(`key: ${key} value: ${value}`)
}

map.forEach((value, key) => {});



/**
 * set
 * convert set to array to get insertion order
 */
const set = new Set(array);
set.add(3);

// for...of, forEach
for(let i of set){}

set.forEach((item) => console.log(item));

const setToArray = [...set]



/**
 * object and array of objects
 */
const person = {
    name: 'Woody',
    age: 24,
    gender: 'male'
}

// for...in, Object.entries().forEach
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

Object.entries(person).forEach(([key, value]) => console.log(`${key}: ${value}`));


const users = [
    {id: 1, name: 'Woody'},
    {id: 2, name: 'Lin'}
]

// forEach
users.forEach(user => console.log(`id: ${user.id}, name: ${user.name}`))

// find
const result = users.find(user => user.id === 2).name.toUpperCase();
console.log(result)


