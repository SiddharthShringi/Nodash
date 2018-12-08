//Creates a new array concatenating array with any additional arrays and/or values.
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