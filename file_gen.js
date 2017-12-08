/*

  File generator
  por @Damcipolat / damian.cipolat@gmail.com

  http://www.damiancipolat.com

*/

const fs   = require('fs');
const args = process.argv;

//Genero un archivo.
const makeFile = (lines,filename) =>{

  if ((lines > 0)&&(filename!='')){

    //Creo el archivo.
    let file = fs.createWriteStream('./files/'+filename);

    console.log('> Generando: '+filename+'\n');

    for(let i=0; i<= lines; i++){

      //Escribo en el stream.
      file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
      
      //Simbolo de proceso.
      process.stdout.write("*");

    }

    file.end();

    console.log('\n\n> Archivo generado OK: '+'./files/'+filename);

  }
  else
    console.log('> Falta definir un delay y nombre de archivo!');

}

//Si se escriben los paramtros.
if (args.length == 4)
  makeFile(args[2],args[3]);
else
  console.log('> Falta parametros:\n  Formato: node file_gen.js <delay> <filename>');

