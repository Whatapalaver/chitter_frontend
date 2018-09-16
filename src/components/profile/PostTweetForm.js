import React from "react";

class PostTweetForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        peep: [],
        user_id: null,
        body: ''
      };
    }

// componentDidMount() {
//   this.setState({ isLoading: true });

  PostPeep(e) {
    e.preventDefault();

    fetch('https://chitter-backend-api.herokuapp.com/peeps', {
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
    .then(data => this.setState({ peep: data }))
    .catch(error => this.setState({ error }));
  }

render() {
  return (
    <main className="pa2 grey-80">
      <form onSubmit={e => this.PostPeep(e)} className="measure center">
        <input className="b--silver pa1 input-reset ba bg-transparent hover-bg-mid-gray hover-white w-100" 
          type="text-area" 
          name="body"  
          id="body"
          placeholder="erudite thoughts here..."
          onChange={e => this.setState({ body: e.target.value })}
        />
        <input className="f6 pa2 link dim br3 ph3 pv2 mb2 dib white bg-light-blue"
          type="submit" 
          value="Post Peep" 
        />
      </form>
    </main>
  );
  }
};

export default PostTweetForm;