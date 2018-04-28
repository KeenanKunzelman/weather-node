const request = require('request');

var getWeather = (lat, long, callback) => {
    
    request({
        url: `https://api.darksky.net/forecast/591c718c279b9738f9c71e1be5987c7d/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                actualTemp: body.currently.apparentTemperature
            })
        } else {
            callback('unable to fetch');
        }
    });

};

module.exports.getWeather = getWeather;