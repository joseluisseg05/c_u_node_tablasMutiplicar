//al inicio todos lo requireds
//const fs = require('fs'); // propio de node
//const fs = require('express');//no es nativos de node
//const fs = require('./fs');// propios del desarrollo

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${base * i}\n`);
    }
    console.log(`Tabla del ${base} hasta ${limite}`.red);
    console.log(`${data}`.green);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor '${base}' no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        //escribe en un archivo
        fs.writeFile(`tablas/tabla_del_${base}_al_${limite}.txt`, data, (erro) => {
            if (erro) reject(erro);
            else resolve(`tabla_del_${base}_al_${limite}.txt`.green)
        });
    })
}


//agregar al modulos
module.exports = {
    crearArchivo,
    listarTabla
}