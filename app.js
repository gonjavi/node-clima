const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  city: {
    alias: 'c',
    desc: 'ciudad para obtener el clima',
    demand: true
  }
}).argv;

/* clima.getClima(40, -74)
  .then(console.log)
  .catch(console.log) */

const getInfo = async (city) => {
  try {
    const coords = await lugar.getLugar(city);
    const temp = await clima.getClima(coords.lat, coords.lon);
    return `El clima de ${city} es de ${temp} grados centigrados.`;
  } catch (error) {
    return `No se puede determinar el clima de ${city}`;    
  }
}

getInfo(argv.city)
  .then(console.log)
  .catch(console.log);

 /* lugar.getLugar(argv.city)
  .then(console.log) 
  .catch(console.log) */

// probar con nombre de ciudad:   node app -c "New York"