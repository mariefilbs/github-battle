var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//component cares about:
//state
//lifecycle event
//UI <-- always has UI; set with render()

class App extends React.Component {
  render() {
    return (
      <div>
        Hello React Training!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
