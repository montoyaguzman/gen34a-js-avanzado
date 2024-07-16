//  CORS
// https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h

const express = require('express');
const colors = require('colors');
const cors = require('cors');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('servidor ok!');
});

app.get('/hellow', (req, res) => {
    res.send('<h1> Hola desde express my friends!! </h1>');
});

const songs = [
    { id: 1, name: 'Kilometros', artist: 'Los Caligaris', album: '' },
    { id: 2, name: 'Closer', artist: 'The Chainsmokers', album: '' },
    { id: 3, name: 'Solo a Terceros', artist: 'Panda', album: '' },
    { id: 4, name: 'Danza Kuduro', artist: 'Maria Becerra', album: 'https://i.scdn.co/image/ab67616d0000b273f414ba07ac47f093cad4d47d' },
];

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200,
};

app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());

// GET: Obtener todas las canciones
app.get('/songs', (req, res) => {
    res.json(songs);
});

// GET: Obtener una cancion en especifico
// request params: parametros que se mandan en la url y se utilizan para selecionar recursos. Enmedio de la url. Ejemplo: api/pokemon/125/algo
// quey params: son parametros que se utilizar como parametro para filtrar informacion. Ejemplo: api/pokemon?page=1&tamanio=100
app.get('/songs/:id', (req, res) => {
    const id = req.params.id;
    console.log('req.query.page: ', req.query.page);
    const songFounded = songs.find(element => element.id === parseInt(id));
    res.json(songFounded);
});

// POST: Crear una nueva cancion favorita
app.post('/songs', (req, res) => {
    // console.log('req: ', req);
    // console.log('req.body: ', req.body);
    const newSong = req.body;
    songs.push(newSong);
    res.status(201).json({ message: 'eureka!', song: newSong });
});

// PATCH: Modificaciones de algunas propiedades del objeto
app.patch('/songs/:id', (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const positionFounded = songs.findIndex(element => element.id === parseInt(id));
    // ... spread operator, se utiliza para hacer destructuring
    const newSong = { ...songs[positionFounded], ...newBody };
    songs[positionFounded] = newSong;
    res.status(200).json({ id });
});

// PUT: Modificar todas las propiedades de un objeto
app.put('/songs/:id', (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const foundedPosition = songs.findIndex(element => element.id === parseInt(id));
    songs[foundedPosition] = newBody;
    res.status(200).json({ id });
});

// DELETE: Eliminar objeto
app.delete('/songs/:id', (req, res) => {
    const id = req.params.id;
    const foundedPosition = songs.findIndex(element => element.id === parseInt(id));
    songs.splice(foundedPosition, 1);
    res.status(200).json({ id });
});

app.listen(port, () => {
    console.log(`servidor iniciado... en el puerto ${port}`.rainbow);
});