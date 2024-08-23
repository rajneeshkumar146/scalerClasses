//statement 1:
// All variables are in the same scope and pointing to same address memory.
// var fruits = "apple";
// console.log(fruits); // apple
// {
//     console.log(fruits);  // apple
//     var fruits;
//     console.log(fruits); // apple
//     fruits = "orange";
//     {
//         console.log(fruits) // orange
//     }
//     console.log(fruits); // orange
// }
// console.log(fruits); // orange

// statement 2:

// let fruits = "apple";
// console.log(fruits);  // apple
// {
//     // console.log(fruits); // apple, if next line is enabled then it will show error
//     let fruits;
//     console.log(fruits);  // apple
//     fruits = "orange";
//     {
//         console.log(fruits)  // orange
//     }
//     console.log(fruits);  // orange
// }

// console.log(fruits);  // orange


// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     console.log("25",fruits); // undefined
//     fruits = "orange";
//     {
//         let fruits;
//         console.log("28",fruits)  // undefined
//     }
//     console.log(fruits);  // orange
// }
// console.log(fruits);  // apple

// illegal shadowing
// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         var fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);

// reverse if allowed
// var fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         let fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);