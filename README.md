# Servidor de streaming de archivos
En este repositorio se encuentra un proyecto de servidor de descarga directa de archivos, cada server puede ser configurable seteando el puerto y un valor númerico que representa la demora en la descarga de los archivos.

Las tecnologías usadas fueron: NODE.JS / EXPRESSJS.

### Escenario:
Este repositorio fue creado como ejemplo base, para un sitio de descarga de archivos con subscripción, en los cuales ofrecemos el descargar archivos hosteados pero con una taza de descarga muy baja y en otros una taza mucho más alta.

En el sig. ejemplo podemos definir distintos servers:
- **Sin demora**: Podemos definir un server que use a pleno su capacidad de descarga, estos pueden ser por ejemplo para un cliente que este registrado y pague por mes un costod de subscripción.
- **BAJA**: Podemos definir un server que tena una taza de demora minima, estos pueden ser para clientes con codígos de promoción o de prueba del servicio.
- **GRATIS**: Podemos introducir una demora, para ofrecer una taza de descarga muy baja, dando la oportunida de unirse como cliente y acceder a una mejor taza.

### Diagrama:
> Un esquema de como podria ser un diseño que use este proyecto para una web real.

![N|Solid](http://damiancipolat.com/webFiles/direct_download.png)

#### Instalación
```sh
$ npm install

#Generar archivos de pruebas:
$ node file_gen.js 150000 test1.file
$ node file_gen.js 1500 test2.file
$ node file_gen.js 1000000 test3.file
```

#### Pruebas
```sh
#Para ejecutar, simulemos diferentes entornos:

#Iniciar un server sin demoras de descarga.
$ node app.js 9000 0

#Iniciar un server con demoras de 5 milisegundos.
$ node app.js 8000 5

#Iniciar un server con demoras de 10 milisegundos.
$ node app.js 7000 10
```
#### Ejemplos de uso:

- Descarga en el server pago:

http://127.0.0.1:9000/test1.file

http://127.0.0.1:9000/test2.file

http://127.0.0.1:9000/test3.file

- Descarga en el server Trial:

http://127.0.0.1:8000/test1.file

http://127.0.0.1:8000/test2.file

http://127.0.0.1:8000/test3.file

- Descarga en el server Free:

http://127.0.0.1:7000/test1.file

http://127.0.0.1:7000/test2.file

http://127.0.0.1:7000/test3.file


### Resultados:
En posteriores pruebas encontre que puede usarse como server de streaming de video y audio, funciona en aplicaciones como VLC.

![N|Solid](https://images.videolan.org/images/VLC-IconSmall.png)
