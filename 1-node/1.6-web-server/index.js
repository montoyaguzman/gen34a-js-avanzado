// URL 1 localhost:8080 => index.html
// URL 2 localhost:8080/pagina1.html => pagina1.html
// URL 3 localhost:8080/pagina2.html => pagina2.html
const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((request, response) => {

    // console.log(request)
    // console.log(request.url) // o raiz (/), o /patito.html o /pagina2.html
    const urlObject = url.parse(request.url);
    const { path } = urlObject; // destructuring

    let fileSystemPath = '';
    if (path === '/') {
        fileSystemPath = 'static/index.html';
    } else {
        fileSystemPath = `static${path}`; // literal template (backticks)
    }
    // console.log('avance:', fileSystemPath);

    fs.stat(fileSystemPath, (error) => {
        if (!error) {
            // acceder y regresar la pagina que este invocando con fileSystemPath

            fs.readFile(fileSystemPath, (error, file) => {
                if (!error) {
                    const status = 200;
                    const mimeTypes = { 'Content-type': 'text/html' };
                    response.writeHead(status, mimeTypes);
                    response.write(file);
                    response.end();
                } else {
                    const status = 500;
                    const mimeTypes = { 'Content-type': 'text/plain' };
                    response.writeHead(status, mimeTypes);
                    response.write('Error de lectura del archivo');
                    response.end();
                }
            });

        } else {
            // si ese fileSystemPath no existe devolver una respuesta 404
            const status = 404;
            const mimeTypes = { 'Content-type': 'application/json' };
            response.writeHead(status, mimeTypes);
            const responseString = JSON.stringify({ message: 'pagina no encontrada' });
            response.write(responseString);
            response.end();
        }
    })


});

console.log('Servidor iniciado...', PORT);
server.listen(PORT);