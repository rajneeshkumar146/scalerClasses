const express = require("express");
const http = require("http");
const { Server } = require('socket.io');


const app = express();
app.use(express.static("public"));
const server = http.createServer(app);
// this io is responsible for handling all the socket connections
const io = new Server(server);

let room;

io.on('connection', (socket) => {
    console.log('a user connected');
    // setInterval(() => {
    //     socket.emit("message", "message from server" + "-" + socket.id + "at" + new Date());
    // }, 2000);
    // // Disconnect event is fired when a user disconnects from the server.
    // socket.on("disconnect", () => {
    //     console.log("User disconnected with id: ", socket.id);
    // });

    socket.on("message", (data) => {
        socket.broadcast.emit("broadcast", data);
    });

    socket.on("create_grp", (roomId) => {
        console.log("group is created having room id: ", roomId);
        // First Participant.
        room = roomId;
        socket.join(roomId);
    });

    socket.on("join_room", () => {
        console.log(socket.id + " joined the room ", room);
        socket.join(room);
    });

    socket.on("grp_message", (data) => {
        console.log("Group Message: ", data);
        socket.to(room).emit("serv_grp_message", data);
    });

    socket.on("leave_grp", (data) => {
        console.log(socket.id, "left the room: ", room);
        socket.leave(room);
    });


    // disconnect event is fired when a user disconnects from the server
    socket.on("disconnect", () => {
        console.log("user disconnected" + socket.id);
    });
});

app.get('/', (req, res) => {
    res.send("hello world");
});

server.listen(3000, () => console.log("listening at 3000"));