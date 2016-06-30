var ampq= requiere('amqp');

var helper=requiere('./amqp-hascks);

var conexion=ampq.createConnection({host: 'localhost'});

conexion.on('ready', function(){
   var mensaje= 'Hola Ana' + new Date();
   conexion.publish('senlla', mensaje);
   helper.safeEndConnection(conexion);
  )};
