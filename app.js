const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direcciónd de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

lugar.getLugar(argv.direccion)
  .then(console.log)



// console.log(argv.direccion);