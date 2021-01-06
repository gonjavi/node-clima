const axios = require('axios');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direcciónd de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

const encodeUlr = encodeURI(argv.direccion); // convierte a caracteres seguros "new york" cuando hay espacios o así
console.log(encodeUlr); // se puede agregar la encodeUlr como parametro de baseURL

const instance = axios.create({
  baseURL: 'https://videosapi-gon.herokuapp.com/api/v1/videos/',
  headers: {'x-rapidapi-key': '4a0415d61fmshb29aee0f23eef58p1eb7f1jsnaec133322bc6'}
});

instance.get()
  .then(resp => {
    console.log(resp.data.data[0]);
  })
  .catch(err => {
    console.log('Error', err);
  });



// console.log(argv.direccion);