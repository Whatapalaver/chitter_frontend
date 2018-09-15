import React, {Component} from 'react';
import UserList from './UserList.js';
import UserRefresh from './UserRefresh';

class UserLine extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: [],
        loading: true
      };
    }

  getUsers = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://chitter-backend-api.herokuapp.com/users');
    const data = await api_call.json();
    this.setState({users: data});
    console.log(data)
  }

  render() {
    return(
        <div className="panel">
          <UserRefresh getUsers={this.getUsers} />
          <p className="panel-heading has-text-centered">
            Active Users
          </p>
              <UserList users={this.state.users} />  
        </div>
    );
  }
};

export default UserLine;