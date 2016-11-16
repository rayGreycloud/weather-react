var React = require('react');
var CurrentWeather = require('./CurrentWeather');

var WeatherCard = ({currentData, location}) => {

  return (
    <div className="card cardTemplate weather-forecast" hidden>
      <div className="city-key" hidden></div>
      <div className="card-last-updated" hidden></div>
      <div className="location"></div>
      <div className="date"></div>
      <div className="description"></div>
      <CurrentWeather currentData={currentData} />
      <div className="future">5-day Forecast</div>
    </div>
  )
};

module.exports = WeatherCard;
