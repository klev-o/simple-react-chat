const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());

const rooms = new Map();

// app.get('/rooms', (req, res) => {
//     console.log('rooms');
//     rooms.set('test', '123')
//     res.json(rooms);
// });

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
    socket.on('ROOM:JOIN', ({ room, userName }) => {
        //console.log(room, userName)
        socket.join(room);
        console.log(rooms)
        rooms.get(room).get('users').set(socket.id, userName);
        const users = [...rooms.get(room).get('users').values()];
        socket.to(room).broadcast.emit('ROOM:SET_USERS', users);
    });
});

server.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен!');
});