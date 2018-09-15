import React, {Component} from 'react';


class PostTweets extends Component {
  constructor(props) {
    super(props);
      this.state = {
        body: null,
        user_id: null,
      };
    }

  componentDidMount() {
    this.setState({ isLoading: true });

    // -H "Authorization: Token token=a_valid_session_key" \
    // -H "Content-Type: application/json" \
    // -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'

    fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          peep: {
              body: this.state.body,
              user_id: this.state.user_id
          }
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ peep: user_id, body: body }));
  }

  render() {
    
    return(
        
    );
  }
};

export default UserLine;