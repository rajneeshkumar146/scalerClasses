const { process, cache } = require("./l005_useWeakMap.js");

let obj1 = { task1res: "Hello" };
let obj2 = { task3res: "Bye" };


let result1 = process(obj1);
console.log("Result 1: ", result1);

let result2 = process(obj1);
console.log("Result 1: ", result2);

let result3 = process(obj2);
console.log("Result 3: ", result3);

obj1 = null;

let result4 = process(obj2);
console.log("Result 4: ", result4);

console.log("21" + cache.get(obj2));
console.log("22" + cache.get(obj1));


