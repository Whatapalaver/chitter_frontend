import React from 'react';

import UserLine from './UserLine';

class UserLineDiv extends React.Component {
  
  render() {
    return(
      <div className="profileCard panel">
        <div className="panel-heading has-text-centered">
          <h2>Active Users</h2>
        </div>
        <div>
          <UserLine />
        </div>
      </div>
    );
  }
};

export default UserLineDiv;