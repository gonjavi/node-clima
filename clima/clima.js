const axios = require('axios');
const { getLugar } = require('../lugar/lugar');

const getClima = async(lat, lon) => {
 const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=417fb681a30266d44c9b71fea885a158&units=metric`)

  return resp.data.main.temp;
}

const getInfo = async (direccion, lat, lon) => {
  try {
    const coords = await getLugar.getLugar(direccion);
    const temp = await getClima.getClima(coords.lat, coords.lon);
    return `El clima de ${coords.direccion} es de ${temp}.`;
  } catch (error) {
    return `No se puede determinar el clima de ${direccion}`;
    
  }
}

module.exports = {
  getClima,
  getInfo,
}