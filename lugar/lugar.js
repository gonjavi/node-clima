const axios = require('axios');

const getLugar = async(direc) => {
  const encodeUlr = encodeURI(direc); // convierte a caracteres seguros "new york" cuando hay espacios o así
  
  const instance = axios.create({
    baseURL: 'https://videosapi-gon.herokuapp.com/api/v1/videos/',
    headers: {'x-rapidapi-key': '4a0415d61fmshb29aee0f23eef58p1eb7f1jsnaec133322bc6'}
  });

  const resp = await instance.get();

  if (resp.data.data.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.data[0];
  const direccion = data.attributes.url;
  const lat = data.attributes.title;
  const lng = data.attributes.author;

  return {
    direccion,
    lat,
    lng,
  }

}

module.exports = {
  getLugar
}