
function debounce(cb, delay = 500) {
    let timeoutId = null;
    return function (...args) {
        if (timeoutId) {
            console.log("Restting the timer");
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            cb(...args);
            timeoutId = null;
        }, delay);
    }
}


function printHello() {
    console.log("Hi all!, Hello from my side.");
}

const debouncedPrintHello = debounce(printHello, 2000);
debouncedPrintHello();

setTimeout(() => {
    debouncedPrintHello();
    setTimeout(() => {
        debouncedPrintHello();
    }, 3000);
}, 1000);


