import React from 'react';
import Tweet from './Tweet';

const TweetList = (props) => {
  const tweets = props.tweets.map((tweet) => {
    return <Tweet key = {tweet.id} tweet={tweet} />
  });
  return (
    <ul>
      {tweets}
    </ul>
  );
};

export default TweetList;