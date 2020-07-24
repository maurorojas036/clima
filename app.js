const lugar = require('./lugar/lugar');

//Pasar este codigo a la carpeta configuración
const argv = require('yargs').options({
    ubicacion: {
        alias: 'u',
        desc: "Especificacion la ciudad que deseamos saber el clima",
        demand: true
    }
}).help().argv;

lugar.getClima(argv.ubicacion).then(console.log).catch(console.log);