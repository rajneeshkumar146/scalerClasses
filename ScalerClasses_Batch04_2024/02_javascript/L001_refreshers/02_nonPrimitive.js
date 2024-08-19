// 1st statement: Function
// defination

function fn(param1) {
    console.log("hello world! ", param1);
    return  // Js will add a semicolon here, to avoid this use linter[eg., eslint]
    "my name is khan"
}

var rVal = fn();
console.log("Value of rVal: " + rVal);
console.log("typeof of fn: " + typeof fn);

// 2nd statement: Object
let cap = {
    name: "Steve",
    "last Name": "Rogers",
    isAvenger: {
        city: "Manhatten",
        State: "Newyork"
    },
    sayHi: function(){
        console.log("Cap say's Hi");
    },
    movies: ["Avenger", "Civil War"],
    2: "Any random thing",
    key: "Surprise"
}

console.log(cap);
console.log("one way to print: " + cap['name'], " another way to print:  " + cap.name);

// <Object>[x] -> search for the value inside the variable.
// <object>.x -> It will search for x.
for (let key in cap) {
    console.log("My key is: " + key + 
    ", value against it using cap[key]: " + cap[key] + " and using cap.key: " + cap.key);
}