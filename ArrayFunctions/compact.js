//Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.
export default function compact(array) {
    return acc = array.filter(v => Boolean(v))
}
// Example
// compact([1,2,0,false, NaN]);
// output [1, 2]
// compact([1,2,0,false, NaN, 5]);
// output [1, 2, 5]
