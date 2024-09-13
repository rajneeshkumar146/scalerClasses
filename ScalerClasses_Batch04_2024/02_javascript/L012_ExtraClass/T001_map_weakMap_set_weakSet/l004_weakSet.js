/***
 * Weakset :  it also takes only object as keys
 * add 
 * delete
 * has
 * **/

let visitedSet = new WeakSet();
 let john = {name: "John"};
 let pete = {name: "pete"};
 let mary = {name: "mary"};

 visitedSet.add(john);
 visitedSet.add(pete);
 visitedSet.add(mary);
 visitedSet.add(john); // John again

 pete = null;
 console.log(visitedSet.has(john)); // true
 console.log(visitedSet.has(pete)); // false

 visitedSet.delete(mary);
 console.log(visitedSet.has(mary)); // false