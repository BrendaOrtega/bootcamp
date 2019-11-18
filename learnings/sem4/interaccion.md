<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# Introducción al desarrollo Frontend
*NOTA IMPORTANTE:* 
> Agregue esta linea en el código para crear un div con la clase `character`

```
    let div = document.createElement('div')
    div.className = "character"
    div.innerHTML = `<img src="${image}" /> <p>${name}</p>`
    container.appendChild(div)
```

## ESTILOS:
```css
section{
    font-family: Avenir;
    width: 250px;
    height: 390px;
    overflow: hidden;
    text-align: center;
}
.container{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    transition:all .3s;
}
.character{
    border-radius: 10px;
    box-shadow: 2px 2px 15px grey;
    width: 200px;
    margin: 0 0 200px 0;
    transition:all .3s;
    cursor: pointer;
}

.character:hover{
    box-shadow: 1px 1px 5px grey;
    transform: scale(.99);
}

.character img{
    width:100%;
    border-radius:10px 10px 0 0;
   
}

```

## Funciones anónimas

¿de qué sirve crear una función anónima? Es cierto que parece una de esas feas costumbres que no hacen mas que ofuscar el código y hacerlo mas difícil de leer, pero al menos puedo mencionar dos casos en los que crear una función anónima resulta de lo mas practico y mantiene el código limpio:

Queremos pasar como parámetro una función muy sencilla y definirla a parte seria cuanto menos innecesario. Esto puede darse por ejemplo cuando pasamos una función de comparación a una de ordenación o cuando usamos librerías como jQuery (muchos de sus métodos aceptan paso de funciones).
  Intentamos evitar a toda costa el uso de variables globales. Aunque este caso puede evitarse organizando el código de muchas formas, englobar el “main” de nuestro programa en una función anónima nos evita dejar esas tres o cuatro variables que necesitamos para que todo empiece a andar flotando en la memoria encapsulándolas dentro de la función.

<img width="300px" src="https://pbs.twimg.com/profile_images/590149318071353345/4EqHKAGD_400x400.png" alt="transitions">

Happy Coding!  ❤

# Recursos extra
* [Más sobre funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones)
* [Más sobre JSON](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)
* [Repo del proyecto](https://github.com/HectorBlisS/memorama_bootcamp.git)

