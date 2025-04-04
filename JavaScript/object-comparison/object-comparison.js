// 1. Basic Deep Object Comparison

function isEqual(obj1, obj2){
    // check reference
    if(obj1 === obj2) return true;


    // if either is null or not object
    if(obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return false;
    }

    // Date objects case
    if(obj1 instanceof Date && obj2 instanceof Date){
        return obj1.getTime() === obj2.getTime();
    }

    // RegExp objects case
    if(obj1 instanceof RegExp && obj2 instanceof RegExp){
        return obj1.toString() === obj2.toString();
    }

    // check constructor
    if(obj1.constructor !== obj2.constructor) return false;

    // check keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) return false;

    return keys1.every(key => {
        return keys2.includes(key) && isEqual(obj1[key], obj2[key]);
    })
} 