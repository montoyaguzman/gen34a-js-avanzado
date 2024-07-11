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

const songs = [
    { id: 1, name: 'Kilometros', artist: 'Los Caligaris' },
    { id: 2, name: 'Closer', artist: 'The Chainsmokers' },
    { id: 3, name: 'Solo a Terceros', artist: 'Panda' },
    { id: 4, name: 'Danza Kuduro', artist: 'Don Omar' },
];

// GET: Obtener todas las canciones
app.get('/songs', (req, res) => {
    res.json(songs);
});



app.listen(port, () => {
    console.log(`servidor iniciado... en el puerto ${port}`.rainbow);
});