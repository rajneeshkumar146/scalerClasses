/***
 * create polyfill of setInterval with the help setTimeout
 * 1. setInterval -> settimout that is called at a given interval again and again
 *  Learning : whenever you want to have single source of truth -> non-primitive
 * 2. clearInterval  : simple fn that recives and object and it changes it's prop to false.
 * */

function mysetInterval(cb, delay) {
    let obj = {
        flag: true
    }

    function helperMethod() {
        if (obj.flag) {
            cb();
            setTimeout(helperMethod, delay);
        }
    }


    setTimeout(helperMethod, delay);
    return obj;
}

function clearMyInterval(obj) {
    obj.flag = false;
}

/*******usage****/
function cb() {
    console.log("I will be called on every interval")
}

function clearCb() {
    console.log("cancelled the cb");
    clearMyInterval(obj);
}
let obj = mysetInterval(cb, 1000);
setTimeout(clearCb, 5000);