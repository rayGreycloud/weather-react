var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         <h3>It's {temp} in {location}</h3>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location} = props;

  return (
    <h3>It's {temp} in {location}</h3>
    )
};

module.exports = WeatherMessage;
