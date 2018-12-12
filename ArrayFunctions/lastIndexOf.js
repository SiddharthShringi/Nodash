// This method is like _.indexOf except that it iterates over elements of array from right to left.
export default function lastIndexOf(array, value, fromIndex=array.length-1) {
    for(let i = fromIndex; i>0; i--) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}
// Example
// console.log(_.lastIndexOf(["India", "USA", "Pakistan", "UK"], "Pakistan"));
// output 2
// console.log(_.lastIndexOf(['Persistance', 'Lexical', 'Scope', 'Source', 'Data'], "Lexical"));
// output 1
