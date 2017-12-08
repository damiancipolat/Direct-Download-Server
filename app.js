/*

  Server de descarga directa
  por @Damcipolat / damian.cipolat@gmail.com

  http://www.damiancipolat.com

*/

//Defino constantes.
const http        = require('http');
const express     = require("express");
const downloader  = require('./server.js');

//Inicio expressjs.
const app     = express();
const server  = http.createServer(app);
const args    = process.argv;

//Si vienen todos los argumentos.
if (args.length==4)
  global.config = {port : args[2], 
                  delay : args[3]};
else {

  console.log("> Error faltan parametros !!");
  console.log("");
  console.log("  Ayuda:");
  console.log("  node server.js <port> <delay>");

  process.exit(0);

}

//Bindeo rutas.
app.get(/^(.+)$/, (req, res)=>{

  //Inicio la descarga.
  if (req.params!=undefined)
    downloader.downloadFile(req,res);
  
});

//Inicio modo escucha.
app.listen(global.config.port,() => {

  console.log('');
  console.log('> Server stream files running in port:',global.config.port);
  console.log('> Waiting connections ...');
  console.log('');

});