<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# Métodos de ClassList

## Uno de los atributos más  importantes de los nodos

Usar classList es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de element.className.

## Métodos
* add( String [, String] )
Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
* remove( String [, String] )
Elimina las clases indicadas.
Nota: Eliminar una clase que no existe NO produce un error.
* item( Number )
Devuelve el valor de la clase por índice en la colección.
* toggle( String [, force] )
Cuando sólo hay un argumento presente: Alterna el valor de la clase; ej., si la clase existe la elimina y devuelve false, si no, la añade y devuelve true.
Cuando el segundo argumento está presente: Si el segundo argumento se evalúa como true, se añade la clase indicada, y si se evalúa como false, la elimina.
* contains( String )
Comprueba si la clase indicada existe en el atributo de clase del elemento.
* replace( oldClass, newClass )
Reemplaza una clase existente por una nueva.

<img width="300px" src="https://jujgx2rig0-flywheel.netdna-ssl.com/wp-content/uploads/2018/08/add-and-remove-a-class-from-list-items-with-javascript-768x450.jpg" alt="transitions">

Happy Coding!  ❤

# Recursos extra
* [DOM Events docs](https://developer.mozilla.org/es/docs/Web/Events)
* [Más sobre Eventos](https://developer.mozilla.org/es/docs/Web/Events#Categor%C3%ADas)
* [Codepen de Bliss](https://codepen.io/hectorbliss/pen/XWWZqOE)