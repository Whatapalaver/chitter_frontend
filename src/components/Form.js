import React from "react";

const Form = props => (
	<form onSubmit={props.getPeeps}>
		<input className="input" type="text" name="peeps" placeholder="Just press submit..."/>
		<button className="button is-primary">Get Peeps</button>
	</form>
);

export default Form;