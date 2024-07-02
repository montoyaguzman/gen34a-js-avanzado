// localhost:8080 => JSON { "message": "hola desde el index" } => 200
// localhost:8080/patitos => JSON { data: [ { name: "donald"}, { name: "lucas"} ] } => 200
// localhost:8080/pokemones => texto plano de not found => 404
// localhost:8080/admin => 401 

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {

    // Paso: Obtener la url
    const urlObject = url.parse(request.url);
    const path = urlObject.path;
    console.log('urlObject', urlObject);
    console.log('path', path);

    // Paso 2: Definir por defecto las variables
    let status = 200;
    let mimeType = {};
    let responseObject = {};

    // Paso 3: Mediante if ver que se necesita de c/peticion (CONTROLLER / ROUTES)
    if (path === '/') {
        status = 200;
        responseObject = { "message": "hola desde el index" }
        mimeType = { 'Content-type': 'application/json' };
    } else if (path === '/patitos') {
        responseObject = [{ name: "donald" }, { name: "lucas" }];
        status = 200;
        mimeType = { 'Content-type': 'application/json' };
    } else if (path === '/pokemones') {
        responseObject = 'no encontrado';
        status = 404;
        mimeType = { 'Content-type': 'text/plain' };
    } else if (path === '/admin') {
        responseObject = {};
        status = 401;
        mimeType = { 'Content-type': 'text/html' };
    } else {
        // reto: desarrollar este codigo
    }

    // try catch

    const stringObject = JSON.stringify(responseObject);

    response.writeHead(status, mimeType)
    response.write(stringObject);
    response.end();

});

server.listen(8080);

console.log('Servidor iniciado...');