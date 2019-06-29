// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Bob
          </a>
          <div className="metadata">
            <span className="date">Today at 6:30PM</span>
          </div>
          <div className="text">
            Nice blog post.
          </div>
        </div>
      </div>
    </div>
  )
};

// Take the react component and show on screen
ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)



