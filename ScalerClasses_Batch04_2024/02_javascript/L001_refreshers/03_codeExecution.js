// 1st statement: 
// high level view -> how your code exec
// stack -> callstack
let a = 10;
function fn() {
    console.log("I am fn");
    function inner() {
        console.log("I am inner");
    }
    inner();
}
fn()

// Code Excution : always exec in EC
    // Global code -> GEC
    // insidee fn -> own EC

// code execution
        // 1.  EC creation
                // 1.a Hoisting -> memory allocation
                                // variable -> undefined;
                                // fn -> get it's memory allocated
                // 2. global -> browser -> window/nodejs-> global-> features
                // 3. this-> always calculated


// 2nd statement: comment below statement.

console.log("b",b);
var b=10;

// this can cause a bug
real();  // undefined -> 2k -> 3k -> 4k
function real() { console.log("I am real. Always run me"); }  // these two are deprecated by GEC.
function real() { console.log("No I am real one "); } // these two are deprecated by GEC.
function real() { console.log("You both are wasted"); }


// JS always provide logic.
// Features -> Environment(Nodejs,Browser)

console.log(window);