const socket = io();
socket.on("message", (data) => {
    console.log("Receiving message: ", data);
});

const btn = document.getElementById("send");
const input = document.getElementById("message");
const ul = document.getElementById("list");
const grpBtn = document.getElementById("createGrp");
const joinGrp = document.getElementById("joinGrp");
const stg = document.getElementById("stg");
const leaveRoomBtn = document.getElementById("leave");

btn.addEventListener("click", () => {
    const value = input.value;
    const div = document.createElement("div");
    div.setAttribute("class", "sender");
    const li = document.createElement("li");
    li.innerText = value;

    const para = document.createElement("p");
    para.innerText = "sender";

    div.appendChild(para);
    div.appendChild(li);
    ul.appendChild(div);

    input.value = "";
    socket.emit("message", value);
});

// Broadcast Message.
socket.on("broadcast", (data) => {
    console.log("brodcasted message: ", data);
    const div = document.createElement("div");
    div.setAttribute("class", "receiver");
    const li = document.createElement("li");

    li.innerText = data;

    const para = document.createElement("p");
    para.innerText = "receiver";

    div.appendChild(para);
    div.appendChild(li);
    ul.appendChild(div);
});


grpBtn.addEventListener("click", () => {
    console.log("group created req")
    socket.emit("create_grp", Math.random(0, 1) * 1000);
}); // Random room Number.

joinGrp.addEventListener("click", () => {
    console.log("Room Join Request!");
    socket.emit("join_room");
});

stg.addEventListener("click", () => {
    const value = input.value;
    if (value) {
        console.log("Group message: ", value);
        socket.emit("grp_message", value);
    }
});

socket.on("serv_grp_message", function (data) {
    console.log("grp message", data);
});

leaveRoomBtn.addEventListener("click", () => {
    socket.emit("leave_grp")
});