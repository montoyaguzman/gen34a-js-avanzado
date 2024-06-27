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
    return pokemons;
    // console.log(response);
    // console.log(pokemons);
}

function generateListElement(pokemons) {
    //console.log('aqui', pokemons);
    // for (let i = 0; i < pokemons.length; i++) {
    //     console.log('name: ', pokemons[i].name);
    // }


    pokemons.forEach((element, iterador) => {
        // console.log('name: ', element.name);
        // console.log('iterador: ', iterador);
        const liElement = document.createElement('li');
        liElement.innerText = element.name
        const ulElement = document.querySelector('ul');
        ulElement.append(liElement);
    });

}

async function main() {
    const pokemons = await getData();
    generateListElement(pokemons.results); // envio de parametros (argumentos)
}

main();


