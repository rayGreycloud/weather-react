var React,
  { Component } = require('react');

var WeatherCard = ({ cardData }) => {
  var {
    location,
    date,
    description,
    weatherIcon,
    temp,
    humidity,
    windSpeed,
    windDirection,
    sunrise,
    sunset,
    forecast
  } = cardData;

  function renderForecast(forecast) {
    return forecast.map(day => {
      var { code, date, day, high, low, text } = day;

      return (
        <div className="oneday" key={date}>
          <div className="date">{`${day} ${date}`}</div>
          <div className="icon cloudy" />
          <div className="temp-high">
            <span className="value">{high}</span>°
          </div>
          <div className="temp-low">
            <span className="value">{low}</span>°
          </div>
        </div>
      );
    });
  }

  return (
    <div className="card weather-forecast">
      <div className="city-key" />>
      <div className="card-last-updated" />>
      <div className="location">{location}</div>
      <div className="date">{date}</div>
      <div className="description">{description}</div>
      <div className="current">
        <div className="visual">
          <div className={'icon ' + weatherIcon} />
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
            <span className="scale">mph </span>
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
      <div className="future">{this.renderForecast(forecast)}</div>
    </div>
  );
};

module.exports = WeatherCard;
