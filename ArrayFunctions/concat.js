//Creates a new array concatenating array with any additional arrays and/or values.
export default function concat(array, ...values) {
    console.log(values);
    for (let elm of values) {
        console.log(elm);
        if (Array.isArray(elm)) {
            for (let el of elm) {
                array.push(el)
            }
        } else {
            array.push(elm)
        }
    }
    return array;
    // return x.reduce((acc, value) => {
    //     if (Array.isArray(value)) {
    //         for(let elm of value) {
    //             acc.push(elm)
    //         }
    //     } else {
    //         acc.push(value)
    //     }
    //     return acc;
    // }, [])
}
// Example
// concat(1,2,3,["a","b"], 'acc');
// (6) [1, 2, 3, "a", "b", "acc"]
// concat(1,2,3,[["a"],["b"]], 'acc');
// (6) [1, 2, 3, Array(1), Array(1), "acc"]