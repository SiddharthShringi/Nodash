// Flattens array - Turn multiple array inside a single
// array into one array.
export default function flatten(array) {
    return array.reduce((acc, currValue) => {
        if (Array.isArray(currValue)) {
            currValue.forEach(elm => {
                console.log(elm);
                acc.push(elm);
            });
        } else {
            acc.push(currValue);
        }
        return acc;
    }, [])
}
// Example
// console.log(_.flatten([1, [2, [3, [4]], 5]]));
// // => [1, 2, [3, [4]], 5])