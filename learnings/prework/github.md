<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# Introducción a Git
Git es extenso y complejo, pero aquí te dejamos un par de comandos para comenzar.

## Inicializar una carpeta para ser trackeada por git
Iniciamos nuestra carpeta con el comando init
```
git init
```
esto creará un archivo oculto .git

## Confguramos nuestros datos de autor. 
Iniciamos nuestra carpeta con el comando init
```
git config --global user.name
git config --global user.email
```
de esta forma cad que hagamos un commit estos datos serán utilizados

## Trackear archivos
podemos agregar archivos especificos
```
git add app.js
```
o todos los archivos que tienen cambios en la carpeta
```
git add -A
```

## Crear puntos en el tiempo (commits)
Para evitar abrir un editor de texto podemos usar el flag -m
```
git commit -m "comentario"
```

## Observar el registro (logs)
Para abrir el registro de puntos en el tiempo (commits) que llevamos usamos log
```
git log
```


## Más sobre el tema:
---
* [Más comandos de git](http://www.7sabores.com/blog/git-comandos-basicos)
* [Que es git](https://git-scm.com/book/es/v1/Empezando-Fundamentos-de-Git)
* [Github](https://github.com/)

Happy Coding!  ❤




