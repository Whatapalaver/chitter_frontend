import React from 'react';

const UserSearch = ({ searchTerm, searchChange }) => {
  return (
  
    <input 
      type='search' 
      placeholder="search users" 
      onChange={searchChange}
    />
   
  );
}
export default UserSearch;

