var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div className="container">
      <Nav/>
      <div className="row">
        <div className="main">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
