import React from "react";

const SignupForm = props => (
		<main className="pa2 grey-80">
			<form className="measure center">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<div className="mt3">
						<label className="db fw6 lh-copy f6" for="username">Username</label>
						<input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f6" for="password">Password</label>
						<input className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
					</div>
				</fieldset>
				<div className="">
					<input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple" type="submit" value="Sign up / Log in" />
				</div>
			</form>
		</main>
);

export default SignupForm;