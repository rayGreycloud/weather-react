var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <div>
       <form className="form" onSubmit={this.onFormSubmit}>
         <div className="input-group">
           <input className="input-group-field" type="search"
             ref="location" placeholder='Search weather by city' />
           <div className="input-group-button">
             <button className='button hollow'>Submit</button>
           </div>
         </div>
       </form>
     </div>
    );
  },
});

module.exports = WeatherForm;
