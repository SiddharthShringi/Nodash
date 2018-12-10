// This method returns an object composed from key-value pairs.
export default function fromPairs(pairs) {
    return pairs.reduce((acc, currValue) => {
        acc[currValue[0]] = currValue[1]
        return acc;
    }, {})
}
// Example
// console.log(_.fromPairs([['a', 1], ['b', 2]]));
// {a: 1, b: 2}