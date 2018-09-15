import React from 'react';

const Tweet = (props) => {
  
  const tweet = props.tweet;
  console.log(tweet);
  return (
    <li>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5">@{tweet.user.handle}</p>
          </div>
        </div>
        <div className="content">
          {tweet.body}
          <br/>
          <time dateTime="2016-1-1">{tweet.created_at}</time>
        </div>
      </div>
    </li>
    );
};

export default Tweet;