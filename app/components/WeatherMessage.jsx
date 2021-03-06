var React = require('react');

// var WeatherMessage = ({temp, location, humidity}) => {
var WeatherMessage = ({ weather, location }) => {

  const {
    date,
    description,
    humidity,
    icon,
    name,
    pressure,
    sunrise,
    sunset,
    temp,
    windDirection,
    windSpeed,
  } = weather;

  const iconUrl = 'http://openWeatherMap.org/img/w/' + icon + '.png';

  return (
    <div className="card weather-forecast">
      <div className="location">{location}</div>
      <div className="date">{date}</div>
      <div className="description"><h4><em>{description}</em></h4></div>
      <div className="current">
        <div className="visual">
          <div className='icon'><img src={iconUrl} /></div>
          <div className="temperature">
            <span className="value">
              {temp}
            </span>
            <span className="scale">°F</span>
          </div>
        </div>
        <div className="description">
          <div className="humidity">
            <span className="value">
              {humidity}
            </span>
            <span className="scale">%</span>
          </div>
          <div className="wind">
            <span className="value">
              {windSpeed}
            </span>
            <span className="scale"> mph </span>
            <span className="direction">
              {windDirection}
            </span>
          </div>
          <div className="sunrise">
            {sunrise}
          </div>
          <div className="sunset">
            {sunset}
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = WeatherMessage;
