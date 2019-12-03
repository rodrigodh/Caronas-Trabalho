const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const socketio = require('socket.io');
const http = require('http');
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {

};

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

io.on('connection', socket => {
    const user_id = socket.handshake.query.user_id

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    console.log(connectedUsers)

    return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333, () => {
    console.log('Server is Running')
});