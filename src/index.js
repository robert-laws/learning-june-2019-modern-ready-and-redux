// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const subTitle = "First React App website";
  const myVals = {name: 'Bob'}

  return (
    <div>
      <h2 style={{paddingLeft: '10px', color: 'green'}}>Hello there!</h2>
      <h3>
        {`my greeting: ${subTitle + '...'}`}
      </h3>
      <p className="normal-text">Welcome to the website</p>
      <p>
        {myVals.name}
      </p>
    </div>
  )
};

// Take the react component and show on screen
ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)