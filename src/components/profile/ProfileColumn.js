import React from 'react';
import SignupForm from './SignupForm'
import PostTweetForm from './PostTweetForm'



class ProfileColumn extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        username: 'to Chitter',
        sessionkey: null,
      };
    }
  
  render() {
    if (!this.state.sessionkey) {
      return (
        <div className="profileCard panel has-text-centered">
          <div className="panel-heading">
            <h2>Welcome to Chitter</h2>
            <p>Please create a username to tweet!</p>
          </div>
            <SignupForm />
        </div>
      );
    }
    return (
      <div>
        <div className="panel-heading">
          <h2>{"Welcome back " + this.state.username }</h2>
        </div>
        <div>
          <PostTweetForm />
        </div>
      </div>
    );
  }
};

export default ProfileColumn;