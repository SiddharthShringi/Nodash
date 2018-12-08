// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
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