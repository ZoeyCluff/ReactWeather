var React = require('react');


var About =  (props) => {

    return (
      <div>
    <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I have built this for the Complete React Web App developer course. </p>
      <p> Here are some the tools I Used:
<ul>
<li><a href='https://facebook.github.io/react'>React</a> - This was the Javascript Framework Used</li>
<li><a href="http://openweathermap.org">Open Weather Map </a> I used Open Weather Map to search for weather by city name.</li>
</ul>
      </p>
      </div>
  )
  };
module.exports = About;
