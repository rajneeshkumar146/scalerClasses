/**
 * functions are also object
 * object : key : value pair  
 * */


// Fn defination.
// function fn(){
//     console.log("Hi I am an fn");
//     console.log("Hi I am an fn2");
//     console.log("Hi I am an fn3");
//     fn.count++;
// }

// console.log(typeof fn); // Output: Function

// fn.count = 0;
// fn();
// fn();

// Add a property to fn
// fn.showCount = function() {
//     console.log("Count on fn is: ", this.count);
// }

// fn.showCount();

// for(let key in fn){
//     console.log("Key: ", key, " Value: ", fn[key]);
// }

/*documentation -> function are the object that implements callable constructor
/**Layman fn is an object that can also be called */

/***
 *  0. function are first class citizens in JS -> 
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable  
 * */

/******a. assignment***/
// let a = [10, 20, 30];
// let b = a;

/**fn experssion**/
// const addrFn = function () {
//     console.log(" I am a variable that's why addrfn stores my address");
// }
// addrFn();

// function fn(param){
//     console.log("i recived a param: ", param);
//     if(typeof param === "function"){
//         param();
//     }
// }

// function smallerfn() {
//     console.log("I am smaller");
// }

// fn({name: "Anurag"});
// fn(smallerfn);


// function HOF(cb){
//     return cb;
// }

// function smallerfn() {
//     console.log("I am smaller");
// }

// const catchValue = HOF(smallerfn);
// catchValue();

// A bug in function.

// real();
// // this can cause a bug 
// function real() { console.log("I am real. Always run me"); }
// function real() { console.log("No I am real one "); }
// function real() { console.log("You both are wasted"); }

// Solution of this bug.
// const real = function () { console.log("I am real. Always run me"); }
// const real = function () { console.log("No I am real one "); }
// const real = function () { console.log("You both are wasted"); }

/****************Arrays*********/


/**
 * JS -> array is a collection of anything(Valid JS Datatype)
 * 
 * **/

let arr = [
    1,
    1.1
    , true,
    null,
    "Hello",
    [1, 2, 3, 4, 5],
    {
        name: "Jasbir",
        FriendName: "Rajneesh"
    },
    function sayhi() {
        console.log(" I am a fn inside an array")
    }
]

// console.log("arr", arr);
// console.log(arr[5][2]);
// console.log(arr[6]["FriendName"]);
// arr[7]();

/**
 * Arrays are object diguised as an array -> key are numbers 
 * */

/**traverse array*/
// console.log(arr[25]);
arr[250] = 600;
console.log(arr);
for (let key in arr) {
    console.log("key : ", key, "value : ", arr[key]);
}

// IIFE
(function(abc){
    console.log("IIFE: ", abc);
})(10);






