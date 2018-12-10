// Creates a slice of array with n elements dropped from the end.
export default function dropRight(array, n= 1) {
    return array.slice(0,array.length-n);
}
// Example
// dropRight([1,2,3], 1)
// (2) [1, 2]
// dropRight([1,2,3,5,6], 3);
// (2) [1, 2]
