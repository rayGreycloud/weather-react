var React = require('react');

var CurrentWeather = ({currentData}) => {
  var { weatherIcon, temp, humidity, windSpeed, windDeg, sunrise, sunset} = currentData;

  return (

    <div className="current">
      <div className="visual">
        <div className="icon">{weatherIcon}</div>
        <div className="temperature">
          <span className="value">{temp}</span><span className="scale">°F</span>
        </div>
      </div>
      <div className="description">
        <div className="humidity">{humidity}</div>
        <div className="wind">
          <span className="value">{windSpeed}</span>
          <span className="scale">mph</span>
          <span className="direction">{windDeg}</span>°
        </div>
        <div className="sunrise">{sunrise}</div>
        <div className="sunset">{sunset}</div>
      </div>
    </div>
  )
};

module.exports = CurrentWeather;
