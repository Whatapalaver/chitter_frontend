import React from 'react';
import User from './User';

const UserList = (props) => {
  const users = props.users.map((user) => {
    return <User key = {user.id} user={user} />
  });
  return (
    <div className="panel-block">    
      <ul className="center">
        {users}
      </ul>
    </div> 
  );
};

export default UserList;