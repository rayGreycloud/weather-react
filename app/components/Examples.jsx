var React = require('react');
var { Link } = require('react-router');

var Examples = (props) =>
  (
    <div className="callout">
      <h1 className='text-center page-title'>Examples</h1>
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
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
      </ul>
    </div>

  );

module.exports = Examples;
