//Gets the index at which the first occurrence of value is found in array.
//If fromIndex is negative, it's used as the offset from the end of array.
export default function indexOf(array, value, fromIndex=0) {
    for(let i = fromIndex; i<array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}
// Example
// console.log(_.indexOf([1,2,3,4,2,1,3], 3, 3));
// output 6
// console.log(_.indexOf([1,2,3,4,2,1,3], 9));
// output -1

