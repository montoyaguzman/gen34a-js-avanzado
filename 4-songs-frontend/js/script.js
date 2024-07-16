const registerFormElement = document.querySelector('#songForm');
const searchFormElement = document.querySelector('#searchForm');

const url = 'http://localhost:3000/songs';

const getSongs = async (nameSearched) => {

    const newUrl = !nameSearched ? url : `${url}?name=${nameSearched}`;

    try {
        const response = await fetch(newUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const songs = await response.json();
        return songs;

    } catch (error) {
        console.error(error.message);
    }
};

const createSong = async (song) => {
    try {

        const options = {
            method: 'POST',
            body: JSON.stringify(song),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        } else {
            getData();
        }

    } catch (error) {
        console.error(error.message);
    }
};

const generateSongsView = (songsArray) => {

    const ulElement = document.querySelector('ul');
    ulElement.innerHTML = '';

    //(songsArray[i], i)
    songsArray.forEach((element, index) => {
        // console.log(`cancion[${index}]: ${element.name} - ${element.artist}`); // cancion [0]: la camisa negra - juanes
        const liElement = document.createElement('li');
        liElement.innerText = `${element.name} - ${element.artist}`;
        ulElement.append(liElement);

    });

};

registerFormElement.addEventListener('submit', (event) => {
    // console.log(event); // todas las propiedas de la web api que tiene ese evento
    // console.log(event.target); // el elemento html que lanza el evento
    event.preventDefault();

    const formData = new FormData(event.target);

    const song = formData.get('songName');
    const artist = formData.get('artist');
    const link = formData.get('imageLink');

    const body = { name: song, artist: artist, album: link };
    createSong(body);

});

searchFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameSearched = document.querySelector('#nameSearched').value;
    getData(nameSearched);
});

const getData = async (nameSearched) => {
    const songs = await getSongs(nameSearched);
    generateSongsView(songs);
};

getData();