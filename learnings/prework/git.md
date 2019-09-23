<img alt="logo fixter" width="300" src="https://fixter.camp/static/media/geek_completo.7e1e87a7.png" />

# Introducción a Github
Github es extenso y complejo, pero aquí te dejamos un par de comandos para comenzar.

## Inicializar una carpeta para ser trackeada por git
Iniciamos nuestra carpeta con el comando init
```
git init
```
esto creará un archivo oculto .git

## Confguramos un nuevo repositorio remoto
Agregamo nuestro link al repositorio (https)
```
git remote add origin link
```
origin puede ser cualquier nombre que asignemos y link es el link de nuestro repostorio

## subir nuestro trabajo
Podemos subir nuestro trabajo a Github ya que tenemos el remoto instalado
```
git push origin master -u
```
tenemos que indicar cual branch usaremosen este caso master y el nombre del remoto porque podriamos tener varios
```
git push -u
```
si utilizamos el flag -u en el comando anterior podriamos hacer push la proxima vez sin decir que remoto ni que branch

## Crear un archivo .gitignore
Para evitar trackear archivos que no nos importan o que no deben subirse cómo node_module, podemos crear un archivo ignore para literalmente ignorar los archivos y carpetas que ahi indiquemos
```
nano .gitignore
```


## Más sobre el tema:
---
* [Más comandos de git](http://www.7sabores.com/blog/git-comandos-basicos)
* [Que es git](https://git-scm.com/book/es/v1/Empezando-Fundamentos-de-Git)
* [Github](https://github.com/)

Happy Coding!  ❤




