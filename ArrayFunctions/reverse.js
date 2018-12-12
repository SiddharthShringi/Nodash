// Reverses array so that the first element becomes the last, 
// the second element becomes the second to last, and so on.
export default function reverse(array) {
    return array.reduce((acc, currValue) => {
        acc.unshift(currValue);
        return acc;
    }, [])
}