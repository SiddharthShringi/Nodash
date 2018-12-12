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
import join from "./ArrayFunctions/join.js"
import last from "./ArrayFunctions/last.js"
import lastIndexOf from "./ArrayFunctions/lastIndexOf.js"
import reverse from "./ArrayFunctions/reverse.js"
import without from "./ArrayFunctions/without.js"







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
    indexOf,
    join,
    last,
    lastIndexOf,
    reverse,
    without
}

console.log(_.without(["India", "USA", "Pakistan", "UK"], "UK", "USA"));
console.log(_.without(['Persistance', 'Lexical', 'Scope', 'Source', 'Data'], "Scope"));