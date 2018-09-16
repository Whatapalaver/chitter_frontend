import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user: []
      };
		}
	
	SubmitSignup(e) {
		e.preventDefault();

		fetch('https://chitter-backend-api.herokuapp.com/users', {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user: {
					handle: this.state.handle,
					password: this.state.password
				}
			})
		})
		.then(response => response.json())
		.then(json => {
			console.log(json);

			this.setState({
				username: json.handle,
				id: json.id
			});
			this.createSession()
		}
		);
	}

	createSession() {
		fetch("https://chitter-backend-api.herokuapp.com/sessions", {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body: JSON.stringify({
					session: {
							handle: this.state.handle,
							password: this.state.password
					}
			})
		})
		.then(res => res.json())
		.then(json => {
			console.log(json);
				this.setState({
					session_key: json.session_key,
				});
			
			console.log("session key added")
			console.log(this.state.session_key)		
		}
		);
	}

	handleSignup(username) {
		this.setState({ handle: username })
	}	
	
	render() {
		return (
		<main className="pa2 grey-80">
			<form onSubmit={e => this.SubmitSignup(e)} className="measure center">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<div className="mt3">
						<input className="b--silver pa1 input-reset ba bg-transparent hover-bg-mid-gray hover-white w-100" 
							type="text" 
							name="username"  
							id="username" 
							placeholder="username" 
							onChange={e => this.handleSignup(e.target.value)}
						/>
					</div>
					<div className="mv3">
						<input className="b--silver pa1 input-reset ba bg-transparent hover-bg-mid-gray hover-white w-100" 
							type="password" 
							name="password"  
							id="password" 
							placeholder="password" 
							onChange={e => this.setState({ password: e.target.value })}
						/>
					</div>
				</fieldset>
				<div className="">
					<input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-blue" 
						type="submit" 
						value="Sign up / Log in" 
					/>
				</div>
			</form>
		</main>
		);
  }
};

export default SignupForm;