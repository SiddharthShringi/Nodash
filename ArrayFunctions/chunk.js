//Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
export default function chunk(arr, num) {
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

