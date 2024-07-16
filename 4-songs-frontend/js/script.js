const getSongs = async () => {
    const url = 'http://localhost:3000/songs';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const songs = await response.json();
        console.log(`Lista de canciones: ${songs}`);

    } catch (error) {
        console.error(error.message);
    }
};

getSongs();

const generateSongsView = () => {

};