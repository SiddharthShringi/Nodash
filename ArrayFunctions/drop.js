// Creates a slice of array with n elements dropped from the beginning.
export default function drop(array, n=1) {
    return array.slice(n);
}
// Example
// drop([1,2,3,4],3)
// [4]
// drop([1,2,3,4,5,6], 3)
// (3) [4, 5, 6]
