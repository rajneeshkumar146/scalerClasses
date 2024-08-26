// input  -> nested array
let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 110]]];

// // output -> single level of array with num
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 110];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

/**
 * Question  -> Array.protype.flat()  -> flatten fn -> option of levels also
 * */
// let flatternOutput = input.flat(Infinity);
// console.log(flatternOutput);

// Am assuming that there is always array not object inside the array.
// With spread operator.
function flattern(srcArr){
    let newArray = [];
    for(element of srcArr){
        if(Array.isArray(element)){
            let flatternArrayUsingRecursion = flattern(element);
            
            newArray.push(...flatternArrayUsingRecursion);  // this is how spread works. T: O(N)
            // for(let val of flatternArrayUsingRecursion){
            //     newArray.push(val);
            // }
        }else{
            newArray.push(element);
        }
    }
}

// input
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}

// output
person = {
    firstName: 'John',
    lastName: 'Doe',
    "address.street": 'North 1st street',
    "address.city": 'San Jose',
    "address.state": 'CA',
    "address.country": 'USA',
    "address.postCodes.firstBlock": 10,
    "address.postCodes.secondBlock": 12
}