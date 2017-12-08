# Servidor de streaming de archivos
En este repositorio se encuentra un proyecto de servidor de descarga directa de archivos, cada server puede ser configurable seteando el puerto y un valor númerico que representa la demora en la descarga de los archivos.

Las tecnologías usadas fueron: NODE.JS / EXPRESSJS.

Escenario:
Este repositorio fue creado como ejemplo base, para un sitio de descarga de archivos con subscripción, en los cuales ofrecemos el descargar archivos hosteados pero con una taza de descarga muy baja y en otros una taza mucho más alta.

En el sig. ejemplo podemos definir distintos servers:
- **Sin demora**: Podemos definir un server que use a pleno su capacidad de descarga, estos pueden ser por ejemplo para un cliente que este registrado y pague por mes un costod de subscripción.
- **BAJA**: Podemos definir un server que tena una taza de demora minima, estos pueden ser para clientes con codígos de promoción o de prueba del servicio.
- **GRATIS**: Podemos introducir una demora, para ofrecer una taza de descarga muy baja, dando la oportunida de unirse como cliente y acceder a una mejor taza.

```sh
Para ejecutar, simulemos diferentes entornos:

#Iniciar un server sin demoras de descarga.
$ node app.js 9000 0

#Iniciar un server con demoras de 5 milisegundos.
$ node app.js 8000 5

#Iniciar un server con demoras de 10 milisegundos.
$ node app.js 7000 10
```
