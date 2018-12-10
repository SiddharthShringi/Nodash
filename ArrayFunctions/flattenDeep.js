// Recursively flattens array.
export default function flattenDeep(array) {
    var newArray = [];
    function checkRecurrsion(arr) {
        for (let elm of arr) {
            if (Array.isArray(elm)) {
                checkRecurrsion(elm);
            } else {
                newArray.push(elm);
            }
        }
        return newArray;
    }
    return checkRecurrsion(array);
}
// Example
// console.log(_.flattenDeep([1,2,[3,[4,[[[[5]]]]]]]));
// (5) [1, 2, 3, 4, 5]