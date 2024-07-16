const getSongs = async () => {
    const url = 'http://localhost:3000/songs';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const songs = await response.json();
        return songs;

    } catch (error) {
        console.error(error.message);
    }
};

const generateSongsView = (songsArray) => {
    //(songsArray[i], i)
    songsArray.forEach((element, index) => {
        // console.log(`cancion[${index}]: ${element.name} - ${element.artist}`); // cancion [0]: la camisa negra - juanes

        const ulElement = document.querySelector('ul');
        const liElement = document.createElement('li');
        liElement.innerText = `${element.name} - ${element.artist}`;
        ulElement.append(liElement);

    });
};

const main = async () => {
    const songs = await getSongs();
    generateSongsView(songs);
};

main();