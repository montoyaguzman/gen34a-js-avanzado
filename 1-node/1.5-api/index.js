const http = require('http');
const PORT = 8080;
// crear un servidor que tenga una url

const server = http.createServer((request, response) => {
    const statusCode = 200;
    const mimeTypes = { 'Content-type': 'text/plain' };
    response.writeHead(statusCode, mimeTypes); // headers (reglas de comunicacion)
    response.write('<body> <h1> Hola dev.f desde nodeee!! </h1> </body>'); // contenido de una request o response (body / payload)
    response.end();
});

console.log('Servidor iniciado...', PORT);
server.listen(PORT);

// extensiones o formatos => mimeTypes
// .mp3, .3gpp, .jpg, .docx, .wmv, .xls, wma, ogg, ppt avi, txt
// .css, js, html
