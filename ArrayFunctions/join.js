// Converts all elements in array into a string separated by separator.
export default function join(array, seperator) {
    return array.reduce((acc, currValue, index) => {
        console.log(index, (array.length-1))
        let newStr = (index != array.length -1) ? currValue + seperator : currValue;
        acc = acc + newStr;
        return acc;
    }, "")
}
// Example
// console.log(_.join(["India", "USA", "Pakistan", "UK"], ","));
// output- India,USA,Pakistan,UK
// console.log(_.join(['Persistance', 'Lexical', 'Scope', 'Source', 'Data'], "_"));
// output- Persistance_Lexical_Scope_Source_Data