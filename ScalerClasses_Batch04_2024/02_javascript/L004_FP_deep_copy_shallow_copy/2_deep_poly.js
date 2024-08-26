// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
    sayHi: function () {
        console.log("Hi Class!");
    }
};

// for(let k in person.friends){
//     console.log("Key: ", k, " value: ", person.friends[k]);
// }

// person.sayHi();

// S == T: O(N) where N is the total number of childs in JSIN tree child can be a key or index of array in multilevel object or array.
function cloneEffective(input) {
    // Chcek.
    // Null is also a object type because of that we have to handle it seprately and feel free to merge it. 
    if (input == null) {
        return null;
    }
    else if (typeof input !== 'object') {
        return input; // primitive data types or Funtion.
    }

    // Create a new container to clone values.
    let clone = Array.isArray(input) ? [] : {};

    //copy all the keys and values.
    for (let key in input) {
        const value = input[key];
        clone[key] = cloneEffective(value);
    }

    // return the obj.
    return clone;

}

let superDeeplyClonedObj = cloneEffective(person);
superDeeplyClonedObj.lastName = "Odinson";
superDeeplyClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("superCopiedObject", superDeeplyClonedObj);

// why does shallow copy exist not deep copy ?
// Answer : We can have array and object that can have 'n' level of nesting an there 
// size is only limited by js heap so for performance point of view it good to have 
// shallow copy