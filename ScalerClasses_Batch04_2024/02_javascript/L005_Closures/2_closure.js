/*
 *Intro to closures.*
   1. Closure is a JavaScript lexical scoping technique used to preserve variables from 
      a function's outer scope in its inner scope.
   2. In lexical scoping, the scope of a variable is defined by its position in the source code.
   3. Whenever you define a function, the variables it contains are only accessible 
      within the function.
   4. If you try to access variables within a function from outside it will result 
      in a scope error. Closure can solve this problem.
*/

// function outerFunction() {
//     console.log("first line of outerfunction: ", count);
//     var count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     count = 10;
//     console.log("second line of outerfunction: ", count);
//     return innerFunction
// }

// const innerFunc = outerFunction();
// console.log(innerFunc())
// console.log(innerFunc())
// const innerFunc2 = outerFunction();
// console.log(innerFunc2())
// console.log(innerFunc2())
// console.log(innerFunc())
// console.log(innerFunc())

// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }
// let c1 = createCounter(10, 5); 
// let c2 = createCounter(5, 2);

// console.log(c1())  
// console.log(c2())

// console.log(c1()) 
// console.log(c2())

/***
 * Nested closure : you will get access to outer variable even if the 
 * outer fn is not your direct parent
 * */
// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function getGreeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
//             console.log("Hi GEC", iamINGEC) // Lexical scope
//             iamINGEC++;
//         }
//     }
// }

// const lnNameRtrn = getFirstName("Rajneesh");
// const greeter = lnNameRtrn("Kumar");

// greeter();
// greeter();
// greeter();
// greeter();
// greeter();
// greeter();
// console.log("final value: ", iamINGEC);

/* A closure is the combination of a function bundled together (enclosed) with 
references to its surrounding state (the lexical environment). In other words, 
a closure gives a function access to its outer scope. In JavaScript, closures 
are created every time a function is created, at function creation time.
 */

/*--------------------------------- asynchrounous code  ---------------------------------**/

// let a = 200;
// console.log("Before");

// function cb() {
//     console.log("I will explode", a);
// }
// setTimeout(cb, 2000);

// console.log("After")
// for (let i = 0; i < 1000; i++) {
//     a++;
// }

// function fun() {
//     let a = 200;
//     console.log("Before");

//     function cb() {
//         console.log("I will explode", a);
//     }

//     console.log("After")
//     return cb;
// }

// setTimeout(fun(), 2000);

