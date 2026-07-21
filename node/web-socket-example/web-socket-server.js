const { WebSocketServer } = require("ws");

const server = new WebSocketServer({ port: 8080 });

server.on("connection", (socket) => {
    socket.on("message", (data) => {
        console.log(data.toString());

    })

    socket.on("close", (data) => {
        console.log("Client disconected: ", data);
    })

    socket.send("Foi ai?");
})


