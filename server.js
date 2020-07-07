const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('123');
    res.send();
});

app.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен!');
});