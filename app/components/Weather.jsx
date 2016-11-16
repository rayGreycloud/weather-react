var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherCard = require('WeatherCard');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

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

    openWeatherMap.getWeather(location).then(function(data) {
      that.setState({
        cardData: {
          location: location,
          date: data.dt,
          description: data.weather.description
        },
        currentData: {
          weatherIcon: data.weather.icon,
          temp: Math.round(data.main.temp),
          humidity: Math.round(data.main.humidity),
          windSpeed: Math.round(data.wind.speed),
          windDeg: data.wind.deg,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
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
    var {isLoading, cardData, currentData, errorMessage} = this.state;

    function renderWeather() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (currentData && cardData.location) {
        return <WeatherCard cardData={carData} currentData={currentData}/>;
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
        <WeatherForm onSearch={this.handleSearch}/>
        {renderWeather()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
