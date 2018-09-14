import React from "react";

const UserRefresh = props => (
	<form onSubmit={props.getUsers}>
		<button className="button is-primary">Get Users</button>
	</form>
);

export default UserRefresh;