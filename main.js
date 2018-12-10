import chunk from "./ArrayFunctions/chunk.js";
import compact from "./ArrayFunctions/compact.js";
import concat from "./ArrayFunctions/concat.js";
import difference from "./ArrayFunctions/difference.js";
import drop from "./ArrayFunctions/drop.js";
import dropRight from "./ArrayFunctions/dropRight.js";
import fill from "./ArrayFunctions/fill.js";
import flatten from "./ArrayFunctions/flatten.js";
import flattenDeep from "./ArrayFunctions/flattenDeep.js"


var _ = {
    chunk,
    compact,
    concat,
    difference,
    drop,
    dropRight,
    fill,
    flatten,
    flattenDeep
}

console.log(_.flattenDeep([1,2,[3,[4,[[[[5]]]]]]]));
