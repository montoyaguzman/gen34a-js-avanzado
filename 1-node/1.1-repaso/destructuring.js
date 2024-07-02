// api
const pokemon = {
    name: 'pikachu',
    height: 90,
    type: 'electric',
};

// html
// const name = pokemon.name;
// const height = pokemon.height;
// const type = pokemon.type;

// js destructuring
const { name, height, type, age } = pokemon;


console.log('name:', name);
console.log('height:', height);
console.log('type:', type);

