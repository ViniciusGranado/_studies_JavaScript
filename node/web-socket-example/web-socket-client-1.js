const socket = new WebSocket("ws://localhost:8080");

// socket.send("OLá funciona?");

socket.addEventListener("open", event => {
    console.log("Connected to client 1");

    socket.send("Hello Server!");
});

socket.addEventListener("message", event => {
    console.log("Message received: ", event.data);

    socket.close();
});