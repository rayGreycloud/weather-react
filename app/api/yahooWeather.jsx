var axios = require('axios');

const YAHOO_WEATHER_API_URL = 'https://query.yahooapis.com/v1/public/yql';

module.exports = {

  getWeather: function(location) {
    var encodedLocation = encodeURIComponent(location.toLowerCase());
    var query1 = '?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    var query2 = '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    var requestUrl = `${YAHOO_WEATHER_API_URL}${query1}${encodedLocation}${query2}`;

    return axios.get(requestUrl).then(function(res) {

      if (res.data.query.results  === null) {
        res.data.message = "Unable to retrieve data for that location";
        throw new Error(res.data.message);
      } else {

        return res.data;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }


}
