//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla=(base,limite)=>{
	return new Promise((resolve,reject)=>{
		/*if (!Number(base)){
			reject(`El valor introducido '${base}' no es un número`);
			return;
		}*/
		console.log('=========================='.green);
		console.log(`===== Tabla de ${base} =====`.green);
		console.log('=========================='.green);

		for (let i = 1; i <=limite ; i++) {
			console.log(`${base} * ${i} = ${base*i}`);
		}

	});
}

let creaArchivo =(base, limite=10)=>{
//module.exports.creaArchivo=(base)=>{
	return new Promise((resolve,reject)=>{
		if (!Number(base)){
			reject(`El valor introducido '${base}' no es un número`);
			return;
		}
		let contenido = '';
		for (let i = 1; i <=limite ; i++) {
			contenido+=`${base} * ${i} = ${base*i}\n`;
		}
		//const data = new Uint8Array(Buffer.from('Hello Node.js'));
		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
		  if (err) 
		  	reject(err)
		  else 
		  	resolve(`tablas/tabla-${base}-al-${limite}.txt`.green);
		});

	});
}


module.exports={
	creaArchivo,
	listarTabla
}
