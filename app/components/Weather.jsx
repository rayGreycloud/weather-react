var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherCard = require('WeatherCard');
var ErrorModal = require('ErrorModal');
const yahooWeather = require('yahooWeather');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      data: undefined
    });

    yahooWeather.getWeather(location).then(
      function(data) {
        console.log(data);

        const {
          location,
          wind,
          atmosphere,
          astronomy
        } = data.query.results.channel;
        const { condition, forecast } = data.query.results.channel.item;

        function getWeatherIcon(code) {
          var icon = '';
          switch (code) {
            case '0': // icon  = 'tornado';
            case '1': // icon = 'storm-showers';
            case '2': // icon = 'tornado';
            case '3': // icon = 'thunderstorm';
            case '4':
              icon = 'thunderstorm';
              break;
            case '5':
              icon = 'snow';
              break;
            case '6':
            case '7':
            case '8':
              icon = 'sleet';
              break;
            case '9':
              icon = 'cloudy-scattered-showers';
              break;
            case '10':
              icon = 'hail';
              break;
            case '11':
            case '12':
              icon = 'showers';
              break;
            case '13':
            case '14':
            case '15':
            case '16':
              icon = 'snow';
              break;
            case '17':
            case '18':
              icon = 'hail';
              break;
            case '19':
              icon = 'cloudy';
              break;
            case '20':
            case '21':
            case '22':
              icon = 'fog';
              break;
            case '23':
            case '24':
              icon = 'windy';
              break;
            case '25':
              icon = 'clear';
              break;
            case '26':
              icon = 'cloudy';
              break;
            case '27':
              icon = 'cloudy_s_sunny';
              break;
            case '28':
              icon = 'cloudy_s_sunny';
              break;
            case '29':
              icon = 'partly-cloudy';
              break;
            case '30':
              icon = 'partly-cloudy';
              break;
            case '31':
            case '32':
            case '33':
            case '34':
              icon = 'clear';
              break;
            case '35':
              icon = 'hail';
              break;
            case '36':
              icon = 'clear';
              break;
            case '37':
            case '38':
            case '39':
              icon = 'thunderstorm';
              break;
            case '40':
              icon = 'cloudy-scattered-showers';
              break;
            case '41':
            case '42':
            case '43':
              icon = 'snow';
              break;
            case '44':
              icon = 'partly-cloudy';
              break;
            case '45':
              icon = 'thunderstorm';
              break;
            case '46':
              icon = 'snow';
              break;
            case '47':
              icon = 'thunderstorm';
              break;
            case '3200':
              icon = 'cloudy';
              break;
            default:
              icon = 'cloudy';
              break;
          }

          return icon;
        }

        function getWindDirection(deg) {
          const index = Math.abs(Math.round((deg - 11.25) / 22.5));
          const cardinals = [
            'N',
            'NNE',
            'NE',
            'ENE',
            'E',
            'ESE',
            'SE',
            'SSE',
            'S',
            'SSW',
            'SW',
            'WSW',
            'W',
            'WNW',
            'NW',
            'NNW'
          ];
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
            sunset: astronomy.sunset,
            forecast
          },
          isLoading: false
        });
      },
      function(e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
      }
    );
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
    var { isLoading, data, errorMessage } = this.state;

    function renderWeather() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (data) {
        return <WeatherCard cardData={data} />;
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
  }
});

module.exports = Weather;
