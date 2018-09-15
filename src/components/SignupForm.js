import React from "react";

const SignupForm = props => (
	<form onSubmit={props.signupUser}>
		<input className="input" type="text" name="handle" placeholder="Enter a username"/>
    <input className="input" type="text" name="password" placeholder="Enter a password"/>
		<button className="button is-primary">SignUp</button>
	</form>
);

export default SignupForm;