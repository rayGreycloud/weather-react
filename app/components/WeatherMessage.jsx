var React = require('react');

var WeatherMessage = ({temp, location}) => {

  return (
    <div>
      <h3 className='text-centered'>It's {temp}&deg; in {location}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
