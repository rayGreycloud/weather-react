var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d51b7c7531536df8b94bf1b025311b4a&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res.data);
        return res.data;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
