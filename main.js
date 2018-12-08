//1.Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
function chunk(arr, num) {
    let newArray = [];
    for (let i = 0; i<arr.length; i += num) {
        if (arr.length >= num) {
            newArray.push(arr.slice(i, i+num));
        } else {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
// Example
// chunk([1,2,3,4,5,6,7,8,9,],4);
// output
// [1,2,3,4],[5,6,7,8],[9]]


//2.Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.
function compact(array) {
    return acc = array.filter(v => Boolean(v))
}
// Example
// compact([1,2,0,false, NaN]);
// output [1, 2]
// compact([1,2,0,false, NaN, 5]);
// output [1, 2, 5]


//3.Creates a new array concatenating array with any additional arrays and/or values.
function concat(...x) {
    return x.reduce((acc, value) => {
        if (Array.isArray(value)) {
            for(let elm of value) {
                acc.push(elm)
            }
        } else {
            acc.push(value)
        }
        return acc;
    }, [])
}
// Example
// concat(1,2,3,["a","b"], 'acc');
// (6) [1, 2, 3, "a", "b", "acc"]
// concat(1,2,3,[["a"],["b"]], 'acc');
// (6) [1, 2, 3, Array(1), Array(1), "acc"]


// 4.Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
// The order and references of result values are determined by the first array.
function difference(array, [...value]) {
    return array.reduce((acc, currValue) => {
        if (!(value.includes(currValue))) {
            acc.push(currValue);
        }
        return acc;
    }, [])
}
// Example
// difference([2, 1, 4], [2, 3]);
// (2) [1, 4]


// 5.Creates a slice of array with n elements dropped from the beginning.
function drop(array, n=1) {
    return array.slice(n);
}
// Example
// drop([1,2,3,4],3)
// [4]
// drop([1,2,3,4,5,6], 3)
// (3) [4, 5, 6]


// 6.Creates a slice of array with n elements dropped from the end.
function dropRight(array, n= 1) {
    return array.slice(0,array.length-n);
}
// Example
// dropRight([1,2,3], 1)
// (2) [1, 2]
// dropRight([1,2,3,5,6], 3);
// (2) [1, 2]
