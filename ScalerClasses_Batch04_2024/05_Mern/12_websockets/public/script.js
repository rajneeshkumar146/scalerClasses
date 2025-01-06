const socket = io();
socket.on("message", (data) => {
    console.log("Receiving message: ", data);
});


