const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    console.log('rooms');
    rooms.set('test', '123')
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    const { room, userName } = req.body;
    if (!rooms.has(room)) {
        rooms.set(
            room,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]),
        );
    }
    console.log(rooms);
    res.send();
});

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
});

server.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен!');
});