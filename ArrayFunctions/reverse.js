// Reverses array so that the first element becomes the last, 
// the second element becomes the second to last, and so on.
export default function reverse(array) {
    return array.reduce((acc, currValue) => {
        acc.unshift(currValue);
        return acc;
    }, [])
}
// Example
// console.log(_.reverse(["India", "USA", "Pakistan", "UK"]));
// (4) ["UK", "Pakistan", "USA", "India"]
// console.log(_.reverse(['Persistance', 'Lexical', 'Scope', 'Source', 'Data']));
// (5) ["Data", "Source", "Scope", "Lexical", "Persistance"]