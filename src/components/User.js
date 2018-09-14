import React from 'react';

const User = (props) => {
  
  const user = props.user;
  console.log(user);
  return (
    <li>
      
        <div class="media-content">
          <p class="content">@{user.handle}</p>
        </div>
      
    </li>
    );
};

export default User;