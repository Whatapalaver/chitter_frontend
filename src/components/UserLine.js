import React, {Component} from 'react';
import UserList from './UserList.js';
import UserSearch from './UserSearch.js';

class UserLine extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: [],
        data:null,
        searchTerm: '',
        isLoading: false
      };
    }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://chitter-backend-api.herokuapp.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }));
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const filteredUsers = this.state.users.filter(users => {
      return users.handle.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    });
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return(
        <div className="profileCard panel has-text-centered">
          <div className="panel-heading">
            <h2>Active Users</h2>
            <UserSearch searchChange={this.onSearchChange}/>
          </div>
            <UserList users={filteredUsers} />  
        </div>
    );
  }
};

export default UserLine;