<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# NPM

## Node package manager
De forma muy similar a cómo NVM administra nuestras versiones de NodeJS, NPM administra todos los programas que podemos descargar con npm y funcionan con NodeJS.

La comunidad de desarrolladores en JavaScript + Node JS es una de las más grandes del mundo, esto significa que con el paso del tiempo los programadores, tanto avanzados como principiantes, crean programas que después comparten y el lugar destinado para compartir nuestros programas con el mundo es NPM. npm no sólo son comandos para instalar y modificar programas también es una nube de programas y tiene su propio sitio web donde podemos explorar todos los programas que otras personas han creado y compartido libremente con el mundo para que nosotros también podamos utilizarlos.
<img src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FCaptura%20de%20Pantalla%202019-09-23%20a%20la(s)%2014.33.32.png?alt=media&token=caeb8ef6-7ec0-4c41-90eb-870e2d19626d" width="100%" alt="npm website"/> 

### Comandos npm

Más adelante aprenderás a fondo npm, e incluso utilizaremos una alternativa llamada YARN. Por ahora comprobaremos que puedes usar npm, y que puedes inciar un entorno de trabajo adecuado.

### Inicializar un proyecto con npm
Vamos una carpeta de nuestra terminal que esté vacía, o podemos crear una nueva con `mkdir` por ejemplo `mkdir inicio`, dentro de esta carpeta inicio vamos a comenzar un nuevo proyecto de Node JS, ¿cómo? es muy simple utilizaremos un comando de npm:

```
npm init -y
```

Est comando va a crear un archivo llamado `package.json` dentro de la carpeta inicio, y este archivo si lo leemos con `cat package.json` (puedes usar el tabulador después de escribir las primeras 2 letras de package) podemos ver que el archivo tiene un montón de información genérica acerca de nuestro nuevo proyecto, y esto es así porque utilizamos el modificador (o flag) -y, que significa que aceptamos todas las opciones por default.

Volvamos a hacerlo, vamos a inicializar  nuestro proyecto de nuevo, pero esta vez no usemos las opciones genéricas, personalizamos el proyecto. Eliminamos el archivo `package.json` de la siguiente manera.

```
rm package.json
```

Y volvemos a inicializar el proyecto con:

```
npm init
```

Nota que esta vez no colocamos el flag (o modificador) `-y`.
En nuestra terminal comenzará a preguntarnos sobre el nombre del proyecto, la versión, descripción etc, y también veremos que nos sugiere los genéricos que podemos aceptar solo dando enter.

Personaliza tu proyecto como desees.

## Instalando un primer programa desde la nube
Tal vez me estoy adelantando un poco, pero ahora que sabes utilizar tu terminal este pequeño experimento  te ayudará a comprender para qué sirve npm y si eres lo suficientemente curioso o curiosa, podrás tomar práctica con la terminal intentando esto.

Una vez que tenemos inicializado el proyecto podemos crear un archivo JavaScript para escribir un programa sumamente sencillo, así que vamos a crear un archivo llamado `app.js` con el comando `nano app.js` se abrirá el editor de texto nano, así que escribiremos una línea de JavaScript, `console.log("Hola mundo")` de esta forma mandaremos un mensaje a nuestra terminal cuando ejecutemos este archivo, no te preocupes por entender totalmente esta línea, ya hablaremos  a fondo de ella y la usaremos mucho, por ahora recuerda que esta es la manera de imprimir algo en pantalla en JavaScript.

Nuestro archivo se ve algo así:

```javascript
console.log("Hola mundo")
```

## Ejecutando nuestro archivo
Vamos a ejecutar nuestro archivo en nuestra terminal con el comando `node app.js`
este comando ejecuta el archivo que designemos, en este caso es nuestro archivo `app.js`. el resultado es nuestro mensaje "Hola mundo", perfecto ahora vamosa utilizar un programa de alguien más llamado "colors" que nos ayudará a cambiar el color de nuestro blanco aburrido (o negro depende tu theme de zsh) por lindos colores. =P

Instalamos con npm nuestro primer programa desde la nube:

```python
npm i colors
```
Puedes ver cómo no tuvimos que escribir toda la palabra install, npm soporta estos pequeños atajos o "shortcuts".

Ahora debemos modificar un poco nuestro programa que escribimos dentro de app.js

```javascript
require('colors')

console.log("Hola mundo!".green)

```
Debe quedar algo más o menos así, observa 2 cosas:

1.- al principio del archivo colocamos la keyword `require` esto le indica a nuestro programa que necesitamos una biblioteca o librería de terceros llamada colors, que ya instalamos previamente con npm, al indicar el nombre de esta librería, Node sabe que debe buscarla, ¿pero donde?, si en nuestra terminal escribimos el  comando `ls` vamos a observar que tenemos nuevos archivos y carpeta, esta carpeta nueva se llama `node_modules` y es justamente ahí donde se descargan todos los programas de terceros que instalemos con npm, si entras a esa carpeta encontrarás muchas otras carpetas  y entre ellas una llamada colors. Es en esta carpeta que nuestro programa irá a buscar colors cuando se la requerimos (require).

2.- nuestra línea donde escribimos `console.log()` ahora tiene un extra `.green`, esto es posible gracias a que el programa colors que instalamos ha agregado esta función y ahora podemos escoger un color para cada texto.

Corremos nuestro archivo con el comando:

```
node app.js
```

Y vemos el resultado con nuestro hermoso color verde.

## Experimenta
Ahora sabes cómo usar npm, y cómo agregar nuevas librerías a nuestro proyecto, porque no pruebas otros colores, o mejor aún porqué no lees la documentación oficial de colors que se encuentra ahi mismo en npmjs.org y obsrvas que cada programa de terceros publicado en npm tiene también su documentación donde podemos aprender a utilizarlas, de principio puede parecer mucha información pero conforme avancemos en este Bootcamp online y te familiarices con conceptos y herramientas todo parecerá cada vez más obvio. 


## Más sobre el tema:
---
* [Qué es NPM](https://devcode.la/blog/que-es-npm/)
* [Más sobre require](https://nodejs.org/zh-cn/knowledge/getting-started/what-is-require/)
* [Ejecutar programas en Node en Windows](https://www.webucator.com/how-to/how-run-nodejs-application-on-windows.cfm)
* [Colors docs](https://www.npmjs.com/package/colors)

Happy Coding!  ❤


