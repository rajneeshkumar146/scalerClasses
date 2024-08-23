// why use case of bind , apply , call -> borrow features 
let cap = {
    name: "Steve",
    team: "Cap",

    petersTeam: function (mem1, ...mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} and ${mem2}`);

        // console.log(mem2);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

// borrow the method only once with defined number of param 
// use petersTeam method -> only once 

// equivalent to: ironMan.petersTeam("thor", "loki", "Natasha")

// cap.petersTeam.call(ironMan,"thor", "loki", "Natasha", "Sanket", "Aravinth", "Shubham");
// cap.petersTeam.call(ironMan, "thor", {1:"Hi", 2:"rajneesh"});

/****
 *
 * Apply: borrow the method only once with n no number of param
 * **/
// let memberArray = ["thor", "loki", "Natasha", "Sanket", "Aravinth", "Shubham"];
// cap.petersTeam.apply(ironMan, memberArray);

/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

// const boundFn = cap.petersTeam.bind(ironMan);
// boundFn(memberArray)
// boundFn("cap", "war machine");

// Guess the answer.-------------------------------------

// var name = "Prajwal";
// var team = "Kulkarni";
// cap.petersTeam.call();