/** Make HTTP request from browser -> It is an promise based API */


/***
 * Fetch API request.
 * Get request -> response object.
 * response = header(metadata) + body(actual data)
 * * extrcat actual -> call promsie.json() and
 * this fn os also promise based.
 * 
 * 
 * this route should be public, and dosesn;t required any authentication.
 */


// fetch('https://restcountries.com/v3.1/name/India').then(function (response) {
//     console.log("My response: ", response);
//     return response.json();
// }).then((data) => {
//     console.log("My data: ", data);
// }).catch((err) => {
//     console.log("There is an error: ", err);
// });

async function getCountries(keyword) {
    try {
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        if (rawResponse.status === 404) {
            console.log("Page Not found!");
            return [];
        } else if (rawResponse.status === 500) {
            console.log("Internal Server Error!");
            return [];
        }

        console.log("Data Found!"); // It is a 200ok status
        return await rawResponse.json();
    } catch (err) {
        console.log("err: ", err);
    }
}

// getCountries("india").then(console.log).catch(console.log);

export default getCountries;
