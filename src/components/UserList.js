import React from 'react';
import User from './User';

const UserList = (props) => {
  const users = props.users.map((user) => {
    return <User key = {user.id} user={user} />
  });
  return (
    <ul>
      {users}
    </ul>
  );
};

export default UserList;