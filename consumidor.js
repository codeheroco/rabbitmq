var amqp = require('amqp');

var conexion = amqp.createConnection({host: 'localhost'});

conexion.on('ready', function(){
    console.log('Conexión exitosa con servidor');
    conexion.queue('sencilla', {autoDelete: false}, function(cola){
        console.log('Conexión existosa con cola %s', cola.name);
        cola.subscribe(function(mensaje){
            console.log('Mensaje recibido -> %s', mensaje.data.toString('utf-8'));
        });
    });
});
