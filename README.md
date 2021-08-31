# trabajo_node_prueba
Consumo de API rest (Node.js) con vue.js

En este repositorio se encuentra la API rest en node.js y express. El servidor se iniciará en el puerto 3000.
Para iniciar la api, en la carpeta raiz se debera correr el comando "npm run dev", que inicializa nodemon (corre el comando node src/index.js)
Se utilizó Postman para realizar las peticiones HTTP 'GET', 'PUT', 'POST' y 'DELETE', usando en los headers los pares clave/valor "Content Type" y "Application/JSON".
En el body se envían los JSON desde postman, que por fs.writeFileSync() se escriben los datos enviados a SAMPLES.JSON, 

Esto con el fin de que no se pierdan los datos al apagar la API.
Como dato extra cabe destacar que esta api fue desarrollada en 2 dias hábiles, generando como resultado una aplicación funcional del lado del back-end.

Este readme fue escrito el 31/08/2021, quedando sujeto a futuros cambios.

El repositorio del Front se encuentra en el siguiente link: https://github.com/Mondin0/trabajo_node_prueba_cli
