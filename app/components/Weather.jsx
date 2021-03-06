const React = require('react');
const moment = require('moment');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    };
  },

  handleSearch: function (location) {
    var _this = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      weather: undefined,
    });

    openWeatherMap.getTemp(location).then(function (data) {
      const { dt, main, name, sys, weather, wind } = data;

      _this.setState({
        location: location,
        weather: {
          date: moment.unix(dt).format('LLLL'),
          description: weather[0].main,
          humidity: main.humidity,
          icon: weather[0].icon,
          name: name,
          pressure: main.pressure,
          sunrise: moment.unix(sys.sunrise).format('LT'),
          sunset: moment.unix(sys.sunset).format('LT'),
          temp: Math.round(main.temp),
          wind_speed: wind.speed,
          wind_direction: that.getWindDirection(wind.deg),
        },
        isLoading: false,
      });
    },

      function (e) {
      _this.setState({
        isLoading: false,
        errorMessage: e.message,
      });
    });
  },

  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  getWindDirection: function (deg) {
    const index = Math.abs(Math.round((deg - 11.25) / 22.5));
    const cardinals = [
      'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW',
    ];
    return cardinals[index];
  },

  render: function () {
    var { isLoading, weather, location, errorMessage } = this.state;

    function renderWeather() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (weather && location) {
        return <WeatherMessage weather={weather} location={location} />;

      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage} />;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <hr />
        <WeatherForm onSearch={this.handleSearch} />
        {renderWeather()}
        {renderError()}
      </div>
    );
  },
});

module.exports = Weather;
