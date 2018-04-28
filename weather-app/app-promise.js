const yargs = require('yargs');
const axios = require('axios');



const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`


  axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('unable to find that address.')
    }
    let lat = response.data.results[0].geometry.location.lat;
    let long = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/591c718c279b9738f9c71e1be5987c7d/${lat},${long}`

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  }).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemp = response.data.currently.apparentTemperature;
    console.log(`It is currently ${temperature}. It feels like ${apparentTemp}`);
  }).catch((e) => {
    if (e.code === "ENOTFOUND") {
      console.log("unable to connect to api servers.");
    }else {
      console.log(e.message);
    }
  })