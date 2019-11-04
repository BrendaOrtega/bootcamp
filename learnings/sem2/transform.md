<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# Animaciones con CSS

## Atributo transform
La propiedad CSS transform te permite modificar el espacio de coordenadas del modelo de formato visual CSS. Usándola, los elementos pueden ser trasladados, rotados, escalados o sesgados de acuerdo a los valores establecidos.

Si la propiedad tiene un valor diferente a none, se creará un contexto de pila. En ese caso, el objeto actuará como un bloque de contención para los elementos con "position: fixed" que contenga.

## Los valores de transform son muchos
* scale(): affects the size of the element. This also applies to the font-size, padding, height, and width of an element, too. It’s also a a shorthand function for the scaleX and scaleY functions.

* skewX() and skewY(): tilts an element to the left or right, like turning a rectangle into a parallelogram. There is no shorthand skew property.

* translate(): moves an element sideways or up and down.
rotate(): rotates the element clockwise from its current position.

* matrix(): a function that is probably not intended to be written by hand, but combines all transforms into one.

* perspective(): doesn’t affect the element itself, but affects the transforms of descendent elements' 3D transforms, allowing them all to have a consistent depth perspective.

<img width="300px" src="https://html-css-js.com/images/tiles/css-transform.jpg" alt="transitions">

Happy Coding!  ❤

# Recursos extra
* [Transform docs](https://developer.mozilla.org/es/docs/Web/CSS/transform)
* [Ejemplos](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
* [Juegaa con transform](https://html-css-js.com/css/generator/transform/)