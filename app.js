const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direcciónd de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

clima.getClima(40, -74)
  .then(console.log)
  .catch(console.log)

/* lugar.getLugar(argv.direccion)
  .then(console.log) */



// console.log(argv.direccion);