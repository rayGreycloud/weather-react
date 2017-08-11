var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d51b7c7531536df8b94bf1b025311b4a&units=imperial';

module.exports = {
  // Refactor to getWeather
  getWeather: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {

      if (res.data.cod  === 401) {
        throw new Error(res.data.message || res.data.error);
      } else {
        // refactor to return entire weather results object
        return res.data;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
