

const yargs = require('yargs');
const weather = require('./weather/weather');
const geocode = require('./geocode.js');


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



geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  }else{
    console.log(results.address);
    weather.getWeather(results.lattitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. it feels like ${weatherResults.actualTemp}.`);
      }
    });

  }
});





