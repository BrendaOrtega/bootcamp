<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# Introducción a la manipulación del DOM

## Todo es un objeto, todo es un nodo

El Modelo de Objetos del Documento (DOM) es un API para documentos HTML y XML. Proporciona una representación estructural del documento, permitiendo la modificación de su contenido o su presentación visual. Esencialmente, comunica las páginas web con los scripts o los lenguajes de programación.

## Nodos
El DOM no es un lenguaje de programación pero sin él, el lenguaje JavaScript no tiene ningún modelo o noción de las páginas web, de la páginas XML ni de los elementos con los cuales es usualmente relacionado. Cada elemento -"el documento íntegro, el título, las tablas dentro del documento, los títulos de las tablas, el texto dentro de las celdas de las tablas"- es parte del modelo de objeto del documento para cada documento, así se puede acceder y manipularlos utilizando el DOM y un lenguaje de escritura, como JavaScript.

## Interfaces y objetos (Métodos)
Esta sección lista las interfaces más comúnmente utilizadas en el DOM. La idea no es describir qué hacen estas APIs pero sí dar una idea de las clases de métodos y propiedades que se encuentran con el uso del DOM.

* document.getElementById(id)
* element.getElementsByTagName(name)
* document.createElement(name)
* parentNode.appendChild(node)
* element.innerHTML
* element.style.left
* element.setAttribute
* element.element.getAttribute
* element.addEventListener
* window.content
* window.onload
* window.dump
* window.scrollTo

<img width="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" alt="transitions">

Happy Coding!  ❤

# Recursos extra
* [Manipulación del DOM docs](https://developer.mozilla.org/es/docs/DOM)
* [Más sobre el DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
* [Todo sobre Interfaces del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#Interfaces_esenciales_en_el_DOM)