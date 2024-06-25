# JavaScript Avanzado

Este documento es una **sintesis de la kata** (clases, campus, tareas y proyectos) **más temas extra** (estrechamente relacionados) para brindar la **posibilidad** al estudiante **de ampliar** sus **conocimientos**. Para su mejor aprovechamiento se recomienda **leerlo como guía** y **ampliar sus notas** con base en **investigación, autoestudio** y **ejercicios**.

**Estructura de carpetas sugerida**

- kata-1

  - g99-nombre-de-la-kata-1
  - g99-nombre-de-la-kata-1-juanito-banana
- kata-2

  - g99-nombre-de-la-kata-1
  - g99-nombre-de-la-kata-1-juanito-banana

## Temario

1. [Node](#node)
2. [Npm y paquetes](#npm-y-paquetes)
3. [Node para front y back end](#node-para-front-y-back-end)
4. [Arquitectura de software](#arquitectura-de-software)
5. [Stacks de desarrollo web](#stacks-de-desarrollo-web)
6. [Asincronía y Event Loop](#asincronía-y-event-loop)
7. [Comparativa entre Node vs JavaScript](#node)
8. [Conceptos de una API](#conceptos-de-una-api)
9. [Qué es REST y sus principios](#qué-es-rest-y-sus-principios)
10. [API Rest](#api-rest)
11. [ExpressJS](#expressjs)
12. [Deploys](#deploys)
13. [Herramientas](#herramientas)
14. [Proyecto del módulo](#proyecto-del-módulo)
15. [Presentaciones](#presentaciones)
16. [Glosario](#glosario)
17. [Informacion y recursos extra](#informacion-y-recursos-extra)

### Node

Node es un entorno multiplataforma para ejecutar JavaScript fuera del navegador, tiene su origen en el 2009 (Ryan Lenhiart).

#### **Instalación**

[Descargar LTS](https://nodejs.org/es/download/)
node -v
npm -v

**Versiones válidas:** 16.x.y ó 18.x.y

#### **Que se puede hacer con node**

- Realizar API Rest.
- Acceder a bases de datos relacionales y no relacionales.
- Generar páginas dinámicas en un servidor web. => server side render
- Crear, leer y escribir archivos.
- Procesar y almacenar archivos enviados desde una página web.

**Elementos de node**

Dentro de node se utilizan los módulos y las callbacks.

- **Módulo:** Permiten aislar parte de nuestro código en diferentes archivos y mandarlos llamar sólo cuándo los necesitamos.

  Existen dos **formas de utilizar módulos** en node:

  - Commun JS.
  - ES6 Imports.
- **Callback:** Es una funcion que se pasa como parametro a otra funcion.

#### Diferencias entre Node y JS

**Javascript**

* Funciona en el navegador.
* JS + web api.
  * fetch.
  * settimeout.
  * addeventlistener.
  * localstorage.

**Node**

* Funciona en el servidor.
* JS + modulos de node.
  * http.
  * os.
  * fs.
  * global.
  * path.

**Modelo cliente servidor**

Es un modelo de arquitectura donde mediante ciertos procolos existen la comunicación en internet. Por un lado, el servidor es una aplicación que ofrece un servicio, mientras que un cliente es quien pide el servicio.

**Path**

Una ruta o path indica una ubicación a nivel de carpeta de algun fichero dentro del
sistema de archivos.
**Ejemplos de rutas**

```
/# Raiz
/

/# Significa ahi mismo
./

/# Regresar un nivel de carpetas../
../../
```

**Mime Types**
Los mime types indican la naturaleza y formato de los archivos que son transmitidos en la respuesta de una solicitud web.

- json: 'application/json'.
- text: 'text/plain'.
- html: 'text/html'.
- css: 'text/css'.
- jpg: 'image/jpg'.
- ico: 'image/x-icon'.
- mp3: 'audio/mpeg3'.
- mp4: 'video/mp4'.

Para ver el listado completo [consulte](https://docs.w3cub.com/http/basics_of_http/mime_types/complete_list_of_mime_types.html).

**Localhost**

Es la dirección de mi propio computador (http://localhost:8080), también se le conoce como dirección loopback (http://127.0.0.1:8080).

### Npm y paquetes.

Node package manager es un manejador de paquetes de node y gestor de dependencias de proyectos npm. Se compone de:

* Un repositorio de paquetes.
* Un CLI para interactuar con el repo y el proyecto.

#### **Paquetes**

Son módulos distribuidos en forma de librerías que resuelven alguna necesidad de desarrollo.

#### **Scripts**

Son comandos propios que se pueden agregar al package.json para poderlos ejercutar.

Estructura de un proyecto npm

* **node_modules:** Carpeta donde se instalan las dependencias, normalmente está carpeta se agrega al .gitignore.
* **package.json:** Guardan las dependencias y los comandos de node.
* **package-lock.json:** Guarda un snapshot de las dependencias que se instalaron en un determinado momento.

#### **Listado de comandos npm**

```

# inicializar un proyecto
npm init

# instalar un paquete global
npm install -g packageName

# instalar todos las dependencias de un proyecto
npm i

# instalar un nuevo paquete sin agregarlo al package.json
npm install packageName

# instalar un nuevo paquete y agregarlo al package.json
npm install packageName --save

# instalar un paquete como dev dependency
npm install -D packageName

# desinstalar un paquete
npm uninstall packageName

# desintalar un paquete global
npm uninstall -g packageName

# ejecutar comandos custom
npm run myCommand

```

#### Otros gestores de dependencias

* Maven.
* Bower.
* Gradlew.
* Yarn.

#### Tipos de licencias de software

* MIT.
* ISC.

### Node para front y back end.

A continuación se presenta un listado de los framework front y back mas populares de nodeJS.

#### **Frameworks back end**

* [ExpressJS](https://expressjs.com/es/guide/routing.html).
* [Hapi](https://hapi.dev/tutorials/?lang=en_US).
* [Koa](https://devdocs.io/koa/).
* [Fastify](https://www.fastify.io/docs/latest/).

#### **Frameworks front end**

* [Gatsby](https://www.gatsbyjs.com/docs/).
* [EJS](https://ejs.co/#docs).
* [Nuxt](https://nuxtjs.org/docs/get-started/installation).
* [Hbs](https://bluuweb.github.io/node/20-hbs/).

#### **Semantic Versión**

Es un conjunto simple de reglas y requerimientos que dictan cómo asignar e incrementar los números de la versión de un software. Evitan la pérdida de versiones y mejoran la gestión de dependencias.

Dado un número de versión **MAJOR.MINOR.PATCH**, se incrementa:

* La versión **MAJOR** cuando realizas un cambio incompatible en el proyecto.
* La versión **MINOR** cuando añades funcionalidad que compatible con versiones anteriores.
* La versión **PATCH** cuando reparas errores compatibles con versiones anteriores.

### Arquitectura de software.

Es la estructura y forma en que los componentes de software o hardware se distribuyen y relacionan en el stack.

**Arquitecturas comunes**

* Cliente servidor.
* De tres niveles.
* Model View Controller: MVC.
* Dirigida por eventos.
* Microservicios.
* Serverless.

### Stacks de desarrollo web.

Un **stack** es el conjunto de tecnologías utilizadas para construir una aplicación.

#### **Stacks populares**

* LAMP.
* ASP.NET.
* MEAN.
* MERN.
* MEVN.

**Web components**
Encapsular funcionalidad en elementos especificos que sean reutilizables.

**Custom tag**
El nombre de la tag utilizada para un webcomponent. Ejemplos:

* `<my-menu>`
* `<Mymenu>`

#### Lenguajes de programación

* Java.
* JavaScript.
* Php.
* Python.
* Go.

#### Gestores de BD (SQL)

* SQL.
* Postgres.
* Oracle.
* MSSQLServer.
* MariaDB.
* MySQLalg.

#### Gestores de BD (No SQL)

* Mongo.
* DynamoDB.
* Firebase.
* Elasticsearchalg.

#### Servicios de cloud

* Azure.
* AWS.
* Google Cloud.

### Asincronía y Event Loop.

#### **Código síncrono**

Es aquel código donde cada instrucción se ejecuta en orden, línea a línea. Es código no depende de nadie y el event loop lo puede procesar sin detenerse.

#### **Código asíncrono**

Es aquel que tiene instrucciones que depende de algo externo (una api, una BD, escritura de archivos, etc). El event loop no se bloquea con este código y lo manda a formar a la fila de la web api. Cuando el event loop esta libre de tareas no dependientes, empieza a leer la fila ddde la web api y moverlas al queue, de donde comienza a ejecutar las tareas pendientes.

#### **Flujo de ejecución**

Cuando el event loop difiere el código y lo pone en espera, puede causar afectación en el flujo lógico de nuestro código, por ello es importante controlar ese flujo (asincronia) mediante callbacks, promises o async await (esta sintaxis luce como codigo sincrono).

**Ejemplo de operaciones asíncronas**

* Consulta una API.
* Crear archivos.
* Acceso a BD.

#### **Formas de manejar la asíncronia**

- **Callbacks:** Consiste en pasar una función como parámetro y ejecutarla en el momento que lo necesitemos.
- **Promesas:** Se envuelve el código asincrono en el objecto **new Promise**.  Se basan en 3 estados: cuándo se lanza la petición (pending) y sus posibles respuestas (resolve y reject).
- **Async await (ES6):** Función con la sugar syntaxis de es6 y simula que el código es asíncrono (por detrás sigue siendo una promesa).

### Comparativa entre Node vs JavaScript

* Ambos se basan en 0 retraso.
* No hay temporizador (setTimeout y setInterval).
* No hay manejo de eventos (eventListener).
* No hay solicitudes Ajax (consumo de API’s).
* Navegadores usan Libevent.
* Node usa Libuv.

### Conceptos de una API.

Información de expressJS en el [repo](https://github.com/montoyaguzman/api-rest)

### ExpressJS.

Información de expressJS en el [repo](https://github.com/montoyaguzman/express-js)

### Deploys.

La información teárica y práctica sobre deployments se encuentra ubicado en el siguiente [repo](https://github.com/montoyaguzman/deploys)

### Proyecto del módulo

Ir a la carpeta [7-proyecto](./7-proyecto/instrucciones.md)

### Presentaciones

Se encuentran en la  [carpeta assets](./assets/) de este mismo repo.

### Glosario

El glosario se encuentra ubicado en el siguiente [repo](https://github.com/montoyaguzman/gloasario-techie)

## Informacion y recursos extra

### **Markdown**

Es un [lenguaje de marcado ligero](https://es.wikipedia.org/wiki/Lenguajes_de_marcas_ligeros "Lenguajes de marcas ligeros") creado por [John Gruber](https://en.wikipedia.org/wiki/John_Gruber "en:John Gruber") y [Aaron Swartz](https://es.wikipedia.org/wiki/Aaron_Swartz "Aaron Swartz") que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, se inspira en convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

**Medidas de almacenamiento**
1024 bytes = 1 megabytes
1024 megabytes = 1 gygabytes
1024 gygabites = 1 terabytes

#### Recursos para estudiar

* [Cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf).
* [La guía sencilla](https://rogerdudler.github.io/git-guide/index.es.html).
* [Learning lab](https://lab.github.com/).
* [Curso de John Mircha node](https://www.youtube.com/watch?v=FeJVdCz_uco&list=PLlrxD0HtieHje-_287YJKhY8tDeSItwtg).

### Herramientas

* [Ip Pública](https://www.cual-es-mi-ip.net/).
* [Gitignore.io](https://www.toptal.com/developers/gitignore/).
* [Coder Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner).
* [Office Viewer(Markdown Editor)](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office).
* [Aprende Node.js y Express - Curso desde Cero](https://www.youtube.com/watch?v=1hpc70_OoAg).
* Documentación Ofline.
  * [Zeal (Windows)](https://zealdocs.org/download.html).
  * [Zeal (Linux)](https://zealdocs.org/download.html#linux).
  * [Dash (MacOS)](https://kapeli.com/dash).
* [Node.js para backend (en)](https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-backend).
* [Mintlify Doc Writer (documentador automatico)](https://marketplace.visualstudio.com/items?itemName=mintlify.document).
* [Metodo patito de goma](https://www.thebrain.school/metodo-patito-goma/#:~:text=Este%20m%C3%A9todo%2C%20incluso%20con%20entrada,pasaba%20inadvertido%20a%20sus%20ojos.).
* [Thubder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).
