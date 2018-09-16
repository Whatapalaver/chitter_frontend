import React from 'react';

const User = (props) => {
  
  const user = props.user;
  console.log(user);
  return (
    <li>
      <a>@{user.handle}</a>
    </li>
    );
};

export default User;