/**
 * 1. Consultar la pokeapi
 * 2. Mostrar una lista de nombres de pokemon en el html
 * 3. Que necesitariamos para consumir el api?
 *  Hacer un request con base en el CONTRATO del api
 *   1. url o endpoint
 *   2. verbo
 */

const URL = 'https://pokeapi.co/api/v2/pokemon/';
// GET

async function getData() {
    const response = await fetch(URL);
    const pokemons = await response.json();
    console.log(response);
    console.log(pokemons);
}

getData();


