var amqp = require('amqp');
var helper = require('./amqp-hacks');

var conexion = amqp.createConnection({host: 'localhost'});

conexion.on('ready', function(){
    console.log('Conexión exitosa con servidor');

    for(var i=0; i<1000; i++){
        var mensaje = 'Mucho trafico. ' + i;
        conexion.publish('sencilla', mensaje);
        console.log('Mensaje enviado -> %s', mensaje);
    }

    helper.safeEndConnection(conexion);

});
