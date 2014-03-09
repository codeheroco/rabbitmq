# Cómo Lo Hago: RabbitMQ

Código referente a la entrada [Como utilizar colas de mensajes con RabbitMQ – Parte II](http://codehero.co/como-utilizar-colas-de-mensajes-con-rabbitmq-parte-ii/), en la cual se explica paso a paso el funcionamiento y uso de la herramienta RabbitMQ.

***

Debes instalar primero el módulo `amqp`, dependencia principal de todos los *scripts*:

```sh
$ npm install amqp
```

Luego inicia el consumidor o servidor receptor:

```sh
$ node consumidor.js
```

Posteriormente para enviar un mensaje, inicia el *script* del publicador o cliente:

```sh
$ node publicador.js
```

Observa en la salida del consumidor como llegan los mensajes.

> Si detienes el consumidor y sigues enviando mensajes, estos no se perderán, permanecerán en la cola hasta que un nuevo consumidor sea levantando.

Si deseas probar la escalabilidad, levanta varios consumidores e inicia el publicador agresivo:

```sh
$ node publicador_agresivo.js
```

Podrás notar cómo se balancea la carga entre los diferentes consumidores.

***

El código que aquí se muestra se toma como base de los [tutoriales originales de RabbitMQ](https://github.com/rabbitmq/rabbitmq-tutorials), han sido adaptados al español, y en algunos casos simplificados para su explicación.
