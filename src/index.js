// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


// Create a react component
const App = () => {
  return <div>
    hello
    <SeasonDisplay />
  </div>
}

// Take the react component and show on screen
ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)
