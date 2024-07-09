const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('servidor ok!');
});

app.get('/hellow', (req, res) => {
    res.send('<h1> Hola desde express my friends!! </h1>');
});

app.listen(port, () => {
    console.log(`servidor iniciado... en el puerto ${port}`.rainbow);
});