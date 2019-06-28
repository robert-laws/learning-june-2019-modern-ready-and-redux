// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return <div>Hello there...!</div>
};

// Take the react component and show on screen
ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)