var React = require('react');

var CurrentWeather = ({data}) => {
  const temp = 

  return (

    <div className="current">
      <div className="visual">
        <div className="icon"></div>
        <div className="temperature">
          <span className="value"></span><span className="scale">°F</span>
        </div>
      </div>
      <div className="description">
        <div className="humidity"></div>
        <div className="wind">
          <span className="value"></span>
          <span className="scale">mph</span>
          <span className="direction"></span>°
        </div>
        <div className="sunrise"></div>
        <div className="sunset"></div>
      </div>
    </div>
  )
};

module.exports = CurrentWeather;
