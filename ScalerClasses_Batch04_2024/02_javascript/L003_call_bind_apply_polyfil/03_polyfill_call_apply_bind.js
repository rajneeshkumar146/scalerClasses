let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, ...mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man",
}


// Statement 1.-------------------------------------------------

// Function.prototype.myCall = function () {
//     console.log("Hi call is invoked");

//     console.log("I want to know this: ", this)
// }

// cap.petersTeam.myCall();

// Statement 2.-------------------------------------------------
/**
 * polyfill of call method
 * **/

Function.prototype.myCall = function (requiredObj = window, ...args) {

    // get Your function.
    const functionToBeInvoked = this;

    // Copy your function in your method.
    requiredObj.tempFunction = functionToBeInvoked;

    // Call your function.
    requiredObj.tempFunction(args);

    // delete temp method.
    delete requiredObj.tempFunction;
}

// cap.petersTeam.call(ironMan,"thor", "loki", "Natasha", "Sanket", "Aravinth", "Shubham");

// Statement 2.-------------------------------------------------
/**
 * polyfill of Apply method
 * **/
// Function.prototype.myApply = function (requiredObj = window, argsInFormArray){

//     // get Your function.
//     const functionToBeInvoked = this;

//     // Copy your function in your method.
//     requiredObj.tempFunction = functionToBeInvoked;

//     // Call your function.
//     requiredObj.tempFunction(...args);

//     // delete temp method.
//     delete requiredObj.tempFunction;
// }

// let memberArray = ["thor", "loki", "Natasha", "Sanket", "Aravinth", "Shubham"];
// cap.petersTeam.apply(ironMan, memberArray);

// Statement 2.-------------------------------------------------
/**
 * polyfill of Bind method
 * **/

Function.prototype.myBind = function (requiredObj = window) {
    // get Your function.
    const functionToBeInvoked = this;

    return function (...args) {
        functionToBeInvoked.call(requiredObj, args);
    }
}

// const boundFn = cap.petersTeam.bind(ironMan);
// // boundFn("cap", "war machine");
// var name = "rajneesh";
// var team = "Wolf of wall street";
// boundFn("thor", "loki");
// // console.log(ironMan);

// cap.petersTeam.myCall();



