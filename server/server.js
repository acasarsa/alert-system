"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var socket_io_1 = require("socket.io");
var httpServer = http.createServer();
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
io.on('connection', function (socket) {
    console.log('A user connected');
    socket.on('triggerAlert', function (data) {
        io.emit('newAlert', data); // Broadcast to all clients
    });
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
});
var PORT = process.env.PORT || 4000;
httpServer.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
// test
