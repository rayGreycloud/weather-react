var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherCard = require('WeatherCard');
var ErrorModal = require('ErrorModal');
const yahooWeather = require('yahooWeather');
// var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      data: undefined
    });

    yahooWeather.getWeather(location).then(function(data) {
      console.log(data);

      const { location, wind, atmosphere, astronomy } = data.query.results.channel;
      const { condition, forecast } = data.query.results.channel.item;

      function getWeatherIcon(code) {
        var icon = '';
        switch(condid) {
          case '0': icon  = 'wi-tornado';
            break;
          case '1': icon = 'wi-storm-showers';
            break;
          case '2': icon = 'wi-tornado';
            break;
          case '3': icon = 'wi-thunderstorm';
            break;
          case '4': icon = 'wi-thunderstorm';
            break;
          case '5': icon = 'wi-snow';
            break;
          case '6': icon = 'wi-rain-mix';
            break;
          case '7': icon = 'wi-rain-mix';
            break;
          case '8': icon = 'wi-sprinkle';
            break;
          case '9': icon = 'wi-sprinkle';
            break;
          case '10': icon = 'wi-hail';
            break;
          case '11': icon = 'wi-showers';
            break;
          case '12': icon = 'wi-showers';
            break;
          case '13': icon = 'wi-snow';
            break;
          case '14': icon = 'wi-storm-showers';
            break;
          case '15': icon = 'wi-snow';
            break;
          case '16': icon = 'wi-snow';
            break;
          case '17': icon = 'wi-hail';
            break;
          case '18': icon = 'wi-hail';
            break;
          case '19': icon = 'wi-cloudy-gusts';
            break;
          case '20': icon = 'wi-fog';
            break;
          case '21': icon = 'wi-fog';
            break;
          case '22': icon = 'wi-fog';
            break;
          case '23': icon = 'wi-cloudy-gusts';
            break;
          case '24': icon = 'wi-cloudy-windy';
            break;
          case '25': icon = 'wi-thermometer';
            break;
          case '26': icon = 'wi-cloudy';
            break;
          case '27': icon = 'wi-night-cloudy';
            break;
          case '28': icon = 'wi-day-cloudy';
            break;
          case '29': icon = 'wi-night-cloudy';
            break;
          case '30': icon = 'wi-day-cloudy';
            break;
          case '31': icon = 'wi-night-clear';
            break;
          case '32': icon = 'wi-day-sunny';
            break;
          case '33': icon = 'wi-night-clear';
            break;
          case '34': icon = 'wi-day-sunny-overcast';
            break;
          case '35': icon = 'wi-hail';
            break;
          case '36': icon = 'wi-day-sunny';
            break;
          case '37': icon = 'wi-thunderstorm';
            break;
          case '38': icon = 'wi-thunderstorm';
            break;
          case '39': icon = 'wi-thunderstorm';
            break;
          case '40': icon = 'wi-storm-showers';
            break;
          case '41': icon = 'wi-snow';
            break;
          case '42': icon = 'wi-snow';
            break;
          case '43': icon = 'wi-snow';
            break;
          case '44': icon = 'wi-cloudy';
            break;
          case '45': icon = 'wi-lightning';
            break;
          case '46': icon = 'wi-snow';
            break;
          case '47': icon = 'wi-thunderstorm';
            break;
          case '3200': icon = 'wi-cloud';
            break;
          default: icon = 'wi-cloud';
            break;
        }

        return `<i class="wi ${icon}"></i>`;
      }

      function getWindDirection(deg) {
        const index = Math.abs(Math.round((deg - 11.25) / 22.5));
        const cardinals = ["N","NNE","NE","ENE","E","ESE", "SE",  "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
        return cardinals[index];
      }

      that.setState({
        data: {
          location: location.city,
          date: condition.date,
          description: condition.text,
          weatherIcon: getWeatherIcon(condition.code),
          temp: condition.temp,
          humidity: atmosphere.humidity,
          windSpeed: wind.speed,
          windDirection: getWindDirection(wind.direction),
          sunrise: astronomy.sunrise,
          sunset: astronomy.sunset
        },
        isLoading: false
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    var {isLoading, data, errorMessage} = this.state;

    function renderWeather() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (data) {
        return <WeatherCard cardData={data}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <hr />
        <WeatherForm onSearch={this.handleSearch}/>
        {renderWeather()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
