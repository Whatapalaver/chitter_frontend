import React from 'react';
import SignupForm from './SignupForm'

class ProfileColumn extends React.Component {
  render() {
    return (
      <div className="profileCard panel has-text-centered">
        <div className="panel-heading">
          <h2>Welcome</h2>
        </div>
          <SignupForm />
      </div>
    );
  }
};

export default ProfileColumn;