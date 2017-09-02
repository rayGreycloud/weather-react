var React = require('react');

// var WeatherMessage = ({temp, location, humidity}) => {
var WeatherMessage = ({weather, location}) => {

  const {
    date,
    description,
    humidity,
    icon,
    name,
    pressure,
    temp,
    wind_deg,
    wind_speed
  } = weather;

  const icon_url = 'http://openWeatherMap.org/img/w/' + icon + '.png';
console.log(icon_url);
  return (
    <div>
      <h3 className='text-centered'>{location}</h3>
      <ul>
        <li>Date: {date}</li>
        <li>Station: {name}</li>
        <li>Currently: {description}</li>
        <li>Icon: <img src={icon_url} /></li>
        <li>Temp: {temp}&deg;</li>
        <li>Humidity: {humidity}%</li>
        <li>Barometer: {pressure}</li>
        <li>Wind Speed: {wind_speed}</li>
        <li>Direction: {wind_deg}</li>
      </ul>
    </div>
  )
};

module.exports = WeatherMessage;
