import React, {Component} from 'react';
import Form from './Form';
import TweetList from './TweetList';

class TimeLine extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tweets: [],
        loading: true
      };
    }

  getPeeps = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://chitter-backend-api.herokuapp.com/peeps');
    const data = await api_call.json();
    this.setState({tweets: data});
    console.log(data)
  }

  render() {
    return(
      <div className="has-text-centered">
        <Form getPeeps={this.getPeeps} />
        <div className="profileCard panel"></div>
        <div className="panel-heading">
          <h2>See new tweets</h2>
        </div>
          <TweetList tweets={this.state.tweets} /> 
      </div>   
    );
  }
};

export default TimeLine;