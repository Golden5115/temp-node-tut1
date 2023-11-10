const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItemns = _.flattenDeep(items);

console.log(items);
