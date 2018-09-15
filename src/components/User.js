import React from 'react';

const User = (props) => {
  
  const user = props.user;
  console.log(user);
  return (
    <li>
        <div className="panel-block">
          <a>@{user.handle}</a>
        </div>
    </li>
    );
};

export default User;