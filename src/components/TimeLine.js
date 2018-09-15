import React, {Component} from 'react';
import TweetList from './TweetList';

class TimeLine extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tweets: [],
        data:null,
        isLoading: false
      };
    }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => this.setState({ tweets: data, isLoading: false }));
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return(
        <div className="profileCard panel has-text-centered">
          <div className="panel-heading">
            <h2>See new tweets</h2>
          </div>
          <TweetList tweets={this.state.tweets} /> 
        </div>   
    );
  }
};

export default TimeLine;