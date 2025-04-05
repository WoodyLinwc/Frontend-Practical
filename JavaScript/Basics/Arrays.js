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
 * array to set
 */
const duplicatesArray = [1,1,1,2,3,3,4,5,6,7,8,8,8]
const uniqueSet = [...new Set(duplicatesArray)];

console.log(uniqueSet);
