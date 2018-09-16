import React from 'react';
import SignupForm from './SignupForm'

class ProfileColumn extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        username: 'to Chitter',
        sessionkey: null,
      };
    }
  render() {
    return (
      <div className="profileCard panel has-text-centered">
        <div className="panel-heading">
          <h2>{"Welcome " + this.state.username } </h2>
        </div>
          <SignupForm />
      </div>
    );
  }
};

export default ProfileColumn;