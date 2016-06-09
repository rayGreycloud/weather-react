var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h3 className='text-centered'>Examples</h3>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li>
          <Link to='/?location=Portland'>Portland, Oregon</Link>
        </li>
        <li>
          <Link to='/?location=Miami'>Miami, Florida</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
        <li>
          <Link to='/?location=Mumbai'>Mumbai, India</Link>
        </li>
        <li>
          <Link to='/?location=Tokiyo'>Tokiyo, Japan</Link>
        </li>
      </ul>
    </div>

  )
};
module.exports = Examples;
