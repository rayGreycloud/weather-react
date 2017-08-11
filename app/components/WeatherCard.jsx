var React = require('react');

var WeatherCard = ({cardData}) => {
  var {location, date, description, weatherIcon, temp, humidity, windSpeed, windDirection, sunrise, sunset} = cardData;

  return (
    <div className="card weather-forecast">
      <div className="city-key"></div>
      <div className="card-last-updated"></div>
      <div className="location">{location}</div>
      <div className="date">{date}</div>
      <div className="description">{description}</div>
      <div className="current">
        <div className="visual">
          <div className={"icon " + weatherIcon}></div>
          <div className="temperature">
            <span className="value">{temp}</span><span className="scale">°F</span>
          </div>
        </div>
        <div className="description">
          <div className="humidity">{humidity}</div>
          <div className="wind">
            <span className="value">{windSpeed}</span>
            <span className="scale">mph </span>
            <span className="direction">{windDirection}</span>
          </div>
          <div className="sunrise">{sunrise}</div>
          <div className="sunset">{sunset}</div>
        </div>
      </div>
      <div className="future">5-day Forecast</div>
    </div>
  )
};

module.exports = WeatherCard;
