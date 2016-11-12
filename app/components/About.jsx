import React from 'react';
var {Link} = require('react-router');

const About = () => {
  return (
    <div>
      <h1 className='text-center page-title'>About React Weather App</h1>
      <p>Welcome to the React Weather App. This weather application was created using React, a Javascript library for building user interfaces, and Node.js, which is built on Chrome's V8 Javascript engine. The weather information is supplied by Open Weather Map.</p>
      <p>For more information about these web technologies, check out the links below:</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a>
        </li>
        <li>
          <a href='https://nodejs.org/en'>Node.js</a>
        </li>
        <li>
          <a href='https://openweathermap.org'>Open Weather Map</a>
        </li>
      </ul>
    </div>
  )
};


export default About;
