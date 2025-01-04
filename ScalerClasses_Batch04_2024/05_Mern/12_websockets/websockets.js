const express = require("express");
const http = require("http");
const { Server } = require('socket.io');


const app = express();
app.use(express.static("public"));
const server = http.createServer(app);
// this io is responsible for handling all the socket connections
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});

app.get('/', (req, res) => {
    res.send("hello world");
});

server.listen(3000, () => console.log("listening at 3000"));