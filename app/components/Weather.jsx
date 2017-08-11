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
      console.log(data);

      function getDate(d) {
        var date = new Date(d * 1000);
        return date.toLocaleString();
      }

      function getTime(d) {
        var date = new Date(d * 1000);
        return date.toLocaleTimeString();
      }

      function getWeatherIcon(code) {
        switch(code) {
          case 800:
          case 903:
          case 904:
            return 'clear-day';
          case 300:
          case 301:
          case 302:
          case 310:
          case 311:
          case 312:
          case 313:
          case 314:
          case 321:
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 511:
          case 520:
          case 521:
          case 522:
          case 531:
          case 900:
          case 901:
          case 902:
          case 906:
          case 960:
          case 961:
          case 962:
            return 'rain';
          case 200:
          case 201:
          case 202:
          case 210:
          case 211:
          case 212:
          case 221:
          case 230:
          case 231:
          case 232:
            return 'thunderstorms';
          case 600:
          case 601:
          case 602:
          case 611:
          case 612:
          case 615:
          case 616:
          case 620:
          case 621:
          case 622:
            return 'snow';
          case 701:
          case 711:
          case 721:
          case 731:
          case 741:
          case 751:
          case 761:
            return 'fog';
          case 905:
          case 954:
          case 955:
          case 956:
          case 957:
          case 958:
          case 959:
            return 'windy';
          case 804:
            return 'cloudy';
          case 801:
          case 802:
          case 803:
            return 'partly-cloudy-day';
        }
      }

      function getWindDirection(deg) {
        const index = Math.abs(Math.round((deg - 11.25) / 22.5));
        const cardinals = ["N","NNE","NE","ENE","E","ESE", "SE",  "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
        return cardinals[index];
      }

      that.setState({
        data: {
          location: location,
          date: getDate(data.dt),
          description: data.weather[0].description,
          weatherIcon: getWeatherIcon(data.weather[0].id),
          temp: Math.round(data.main.temp),
          humidity: Math.round(data.main.humidity),
          windSpeed: Math.round(data.wind.speed),
          windDirection: getWindDirection(data.wind.deg),
          sunrise: getTime(data.sys.sunrise),
          sunset: getTime(data.sys.sunset)
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
