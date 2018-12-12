// Creates an array excluding all given values.
export default function without(array, ...value) {
    return array.reduce((acc, currValue) => {
        if(!value.includes(currValue)) {
            acc.push(currValue);
        }
        return acc;
    }, [])
}
// Example
// console.log(_.without(["India", "USA", "Pakistan", "UK"], "UK", "USA"));
// (2) ["India", "Pakistan"]
// console.log(_.without(['Persistance', 'Lexical', 'Scope', 'Source', 'Data'], "Scope"));
// (4) ["Persistance", "Lexical", "Source", "Data"]