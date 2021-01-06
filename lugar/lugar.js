const axios = require('axios');

const getLugar = async(ciudad) => {
  try {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=417fb681a30266d44c9b71fea885a158`);
     
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {     
      lat,
      lon
    }
  } catch (error) {
    
    return `No se puede determinar la latitud y longitud de ${ciudad}`;
  }  


  

}

module.exports = {
  getLugar
}