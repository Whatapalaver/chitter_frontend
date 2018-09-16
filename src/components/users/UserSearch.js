import React from 'react';

const UserSearch = ({ searchTerm, searchChange }) => {
  return (
  
    <input className="b--silver pa1 input-reset ba bg-transparent hover-bg-mid-gray hover-white w-100 tc"
      type='search' 
      placeholder="search users" 
      onChange={searchChange}
    />
   
  );
}
export default UserSearch;

