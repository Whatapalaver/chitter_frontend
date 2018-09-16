import React from "react";

const PostTweetForm = props => (
		<main className="pa2 grey-80">
			<form action="/user_peep" method="post" className="measure center">
        <input className="b--silver pa1 input-reset ba bg-transparent hover-bg-mid-gray hover-white w-100" 
          type="text-area" 
        />
        <input type="submit" value="Peep" />
      </form>
		</main>
);

export default PostTweetForm;