const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //logica de las tablas

/*
ejercicio 1 crear las tablas deacuerdo a la base en el programa
let base = '5';
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e));*/

/*

ejercicio 2 obtner el comando desde consola solo si es pimer parametro y con estructura node app --base=5
let argv = process.argv;
let parametro = argv[2]; // enviar parametros
let base = parametro.split('=')[1];
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e));
*/

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no Reconocido');
}