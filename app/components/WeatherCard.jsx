var React = require('react');
// var CurrentWeather = require('CurrentWeather');

var WeatherCard = ({cardData, currentData}) => {
  var {location, date, description} = cardData;
  var currentData = currentData;
  var d = new Date(date * 1000);
  var datestamp = d.toString();
  return (
    <div className="card weather-forecast">
      <div className="city-key"></div>
      <div className="card-last-updated"></div>
      <div className="location">{location}</div>
      <div className="date">{datestamp}</div>
      <div className="description">{description}</div>

      <div className="future">5-day Forecast</div>
    </div>
  )
};

module.exports = WeatherCard;
//  <CurrentWeather currentData={currentData} />
