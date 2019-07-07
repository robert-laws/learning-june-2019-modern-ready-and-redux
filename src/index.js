// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept the location request" />
  }

  componentDidUpdate() {
    // good to do more data loading when state/props change
  }

  componentWillUnmount() {
    // good for doing clean-up
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

// Take the react component and show on screen
ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)

