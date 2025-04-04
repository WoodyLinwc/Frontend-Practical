// 1. Interview Question: Flatten with Filtering
const messyArray = [1, [2, "a"], [true, [3, null, 4], {key: "value"}]];

// recursive and reduce
function filterNumbers(arr){
    return arr.reduce((acc,val) => {
        if(Array.isArray(val)){
            return acc.concat(filterNumbers(val));
        } else if(typeof val === 'number'){
            return acc.concat(val);
        }
        return acc;
    }, []);
}
console.log(filterNumbers(messyArray))


// using for loop
const number = [];
for(let i of messyArray.flat(Infinity)){
    if(typeof i === 'number'){
        number.push(i);
    }
}
console.log(number);


// using filter
const number2 = messyArray.flat(Infinity).filter(i => typeof i === 'number');
console.log(number2);



// 2. Interview Question: Flatten Object
const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    },
    f: 4
};

function flattenObject(obj, prefix='', result={}){
    for(let key in obj){
        if(typeof obj[key] === 'object' && typeof obj[key] !== null){
            flattenObject(obj[key], prefix + key + '.', result);
        } else {
            result[prefix + key] = obj[key];
        }
    }
    return result;
}
console.log(flattenObject(nestedObject));



// 3. Flatten Array of Nested Object
const arrayObject = [
    {name: "Woody", Age: 21},
    {name: "Lin", Age: 24}
]

function flattenArrayObject(arr){
    return arr.reduce((acc,val) => {
        acc[val.name] = val.Age;
        return acc;
    }, {})
}
console.log(flattenArrayObject(arrayObject));
