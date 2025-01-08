const eventEmitter = require("events");


const myEmitter = new eventEmitter();



// listners.
myEmitter.on("myEvent", (...args) => {
    console.log("Listner 1, There is a new event! ", args);
});

myEmitter.on("myEvent", (...args) => {
    console.log("Listner 2, There is a new event! ", args);
});

const secondCb = (...args) => {
    console.log("Callback listner for the new events: ", args);
    console.log("-----------------------------")
}

// listner and fire cb
// myEmitter.on("myEvent", secondCb);

// do not listen
myEmitter.off("myEvent", secondCb);

// emit an event.
myEmitter.emit("myEvent", 1, 2);
myEmitter.emit("myEvent", 6, 9);


/**
 * this.event = {}
 * event objects will have keys {events} and values {array of listner}
 * on() -> add a listner to the {events}
 * emit() -> emit the event
 * 
 * 
 * this.events = {
 * myEvent: [listener1, listener2, listener3],
 * anotherEvent: [[listener4, listener5]]
 * } 
 * 
 */
