// 1. Basic Array Flattening - One level
// Flatten an array of arrays into a single array

const nestedArray = [[1,2],[3,4],[5,6]];

// flat method
const flattened1 = nestedArray.flat();

// using reduce
const flattened2 = nestedArray.reduce((acc, val) => acc.concat(val), []);



// 2. Multi-level Array Flattening
const deeplyNested = [1, [2, [3, [4, [5]]]]];

// using flat with Infinity
const deepFlattened1 = deeplyNested.flat(Infinity);

// recursive function
function flattenDeep(arr){
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}



// 3. Custom Depth Flattening
const mixedNested = [1, [2, [3, [4]]], 5, [6, [7]]];

// solution from Q2 also work here, flat(Infinity) and recursive