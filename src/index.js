// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


// Create a react component
class App extends React.Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    // best place to do data loading
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    // good to do more data loading when state/props change
  }

  componentWillUnmount() {
    // good for doing clean-up
  }

  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
      </div>
    )
  }
}

// Take the react component and show on screen
ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)
