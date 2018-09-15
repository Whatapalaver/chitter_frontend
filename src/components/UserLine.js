import React, {Component} from 'react';
import UserList from './UserList.js';

class UserLine extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: [],
        data:null,
        isLoading: false
      };
    }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://chitter-backend-api.herokuapp.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }));
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return(
        <div className="profileCard panel has-text-centered">
          <div className="panel-heading">
            <h2>Active Users</h2>
          </div>
            <UserList users={this.state.users} />  
        </div>
    );
  }
};

export default UserLine;