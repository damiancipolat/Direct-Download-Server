/*

  Server de descarga directa
  por @Damcipolat / damian.cipolat@gmail.com

  http://www.damiancipolat.com

*/

const fs       = require('fs');
const streams  = require('./streams.js');

// Inicio la descarga.
const downloadFile = (req,res)=>{

  //Separo el nombre del archivo del path de la url.
  let filename = './files/'+req.params['0'].replace('/','');

  //Logeo el inicio del request.
  console.log('> Download request: '+filename+' start.');
  
  //Si existe el archivo.
  if (fs.existsSync(filename)){

    //Creo la instancia del stream en base al archivo.
    let streamer = new streams(filename, global.config.delay);

    //Inicio la descarga.
    streamer.start(res);

  }
  else
    res.status(404).json({error:"File not found"});

}

module.exports.downloadFile = downloadFile;