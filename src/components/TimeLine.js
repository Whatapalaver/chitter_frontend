import React from 'react';
import Form from './Form';

class TimeLine extends React.Component {
  state = {
    loading: true
  }

  getPeeps = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://chitter-backend-api.herokuapp.com/peeps');
    const data = await api_call.json();
    console.log(data)
  }

  render() {
    return(
      <div>
        <Form getPeeps={this.getPeeps} />
                
      </div>
    );
  }
};

export default TimeLine;