var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
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
      temp: undefined
    });
    // Refactor to getWeather and setState on
    // all props needed for WeatherCard


    openWeatherMap.getWeather(location).then(function(data) {
      that.setState({
        location: location,
        // set all variables
        temp: Math.round(data.main.temp),
        

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
    var {isLoading, data, location, errorMessage} = this.state;

    function renderWeather() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (data && location) {
        return <WeatherCard currentData={data} location={location}/>;
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
