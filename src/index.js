// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure?</ApprovalCard>
      
      <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure about this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          avatarImage={faker.image.avatar()} 
          author="Sam" 
          postTime="Today at 11AM" 
          commentText="Nice blog post" 
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          avatarImage={faker.image.avatar()} 
          author="Chris" 
          ostTime="Yesterday at 5:30PM" 
          commentText="Interesting ideas..." 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatarImage={faker.image.avatar()} 
          author="Alex" 
          postTime="Today at 9PM" 
          commentText="Needs more detail"
        />
      </ApprovalCard>
    </div>
  )
};

// Take the react component and show on screen
ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)
