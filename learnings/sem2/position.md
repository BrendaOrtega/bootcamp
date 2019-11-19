<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# Una propiedad de CSS3 muy importante es: Position

## Absolute y relative
La propiedad position de CSS especifica cómo un elemento es posicionado en el documento. Las propiedades top, right, bottom, y left determinan la ubicación final de los elementos posicionados.

## Tipos de posicionado
* Un elemento posicionado es un elemento cuyo valor computado de position es relative, absolute, fixed, o sticky. (En otras palabras, cualquiera excepto static).

* Un elemento posicionado relativamente es un elemento cuyo valor computado de position es relative. Las propiedades top y bottom especifican el desplazamiento vertical desde su posición original; las propiedades left y right especifican su desplazamiento horizontal.

* Un elemento posicionado absolutamente es un elemento cuyo valor computado de  position es absolute o fixed. Las propiedades top, right, bottom, y  left especifican el desplazamiento desde los bordes del bloque contenedor del elemento. (El bloque contenedor es el ancestro más cercano posicionado)Si el elemento tiene márgenes, se agregaran al desplazamiento.

* Un elemento posicionado fijamente es un elemento cuyo valor de  position computado es sticky. Es tratado como un elemento posicionado relativamente hasta que su bloque contenedor cruza un límite establecido (como por ejemplo dando a top cualquier valor distinto de auto), dentro de su flujo principal (o el contenedor dentro del cual se mueve), punto al cual es tratado como "fijo" hasta que alcance el borde opuesto de su bloque contenedor.

Vamos a usarlo.

<img width="300px" src="https://www.cssblog.es/domains/cssblog.es/public_html/wp-content/uploads/2009/12/posicionamiento-css.jpg" alt="funciones">

Happy Coding!  ❤

# Recursos extra
* [La teoría](https://developer.mozilla.org/es/docs/Web/CSS/position)
* [Ejemplos](https://developer.mozilla.org/es/docs/Web/CSS/position#Examples)
* [Overlay codepen](https://codepen.io/hectorbliss/pen/wvveMQQ)