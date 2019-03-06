//requireds
const argv= require('./config/yargs').argv;
const colors = require('colors');


//const fs = require('express');
//const fs = require('./fs');
const {creaArchivo,listarTabla}=require('./multiplicar/multiplicar');
let comando=argv._[0];
switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite);
	break;

	case 'crear':
		creaArchivo(argv.base, argv.limite)
			.then(archivo=>console.log(`Archivo creado: ${archivo}`))
			.catch(e=>console.log(e));
	break;

	default:
		console.log('Comando no reconocido');
}
//console.log(argv);
//let base ='4';

//let argv2=process.argv;
//console.log('Limite',argv.limite);
//let parametro =argv[2];
//let base=parametro.split('=')[1];
//