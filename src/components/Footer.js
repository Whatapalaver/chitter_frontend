import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="content has-text-centered">
        <p>
          Built on <strong>React</strong> with <strong>Bulma</strong> by <a href="https://github.com/whatapalaver">Angela Wolff</a>
          <br />
          Copyright 2018
        </p>
      </div>
    </div>
    );
  }
};

export default Footer;