import chunk from "./ArrayFunctions/chunk.js";
import compact from "./ArrayFunctions/compact.js";
import concat from "./ArrayFunctions/concat.js";
import difference from "./ArrayFunctions/difference.js";
import drop from "./ArrayFunctions/drop.js";
import dropRight from "./ArrayFunctions/dropRight.js";
import fill from "./ArrayFunctions/fill.js";
import flatten from "./ArrayFunctions/flatten.js";
import flattenDeep from "./ArrayFunctions/flattenDeep.js"
import fromPairs from "./ArrayFunctions/fromPairs.js"
import head from "./ArrayFunctions/head.js"
import tail from "./ArrayFunctions/tail.js"
import indexOf from "./ArrayFunctions/indexOf.js"



var _ = {
    chunk,
    compact,
    concat,
    difference,
    drop,
    dropRight,
    fill,
    flatten,
    flattenDeep,
    fromPairs,
    head,
    tail,
    indexOf
}

console.log(_.indexOf([1,2,3,4,2,1,3], 3, 3));
console.log(_.indexOf([1,2,3,4,2,1,3], 9));