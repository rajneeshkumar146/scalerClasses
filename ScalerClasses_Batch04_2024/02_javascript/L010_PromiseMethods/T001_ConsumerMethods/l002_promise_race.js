const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 2000, 'one');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(rej, 1000, 'two');
});

Promise.race([firstPromise, secondPromise]).then((data) => {
    console.log("Data: ", data);
}).catch((err) => {
    console.log("Error: ", err);
})



