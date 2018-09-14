import React from "react";

const Form = props => (
	<form onSubmit={props.getPeeps}>
		<button className="button is-primary">Refresh</button>
	</form>
);

export default Form;