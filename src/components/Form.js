import React from "react";

const Form = props => (
	<form onSubmit={props.getPeeps}>
		<input type="text" name="peeps" placeholder="Just press submit..."/>
		<button>Get Peeps</button>
	</form>
);

export default Form;