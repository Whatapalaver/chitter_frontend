import React from 'react';

class Titles extends React.Component {
  render() {
    return (
      <div className="media"> 
        <div className="media-left">
          <figure className="image">
	          <img className="imagehdr" src="/images/Twitter-Free-PNG-Image.png"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content has-text-centered vertical">
            <h1>Chitter Frontend Challenge</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default Titles;