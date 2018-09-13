import React, { Component } from 'react';

import Titles from './components/Titles';
import TimeLineDiv from './components/TimeLineDiv';
import Footer from './components/Footer';
import './App.css';
import './mystyles.css';
// import './debug.css';

class App extends React.Component {
  
  render() {
    return (
      <div id="parent">
        <section className="hero">
          <Titles />
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="notification">
		              Left bar
                </div>
              </div>
	            <div className="column is-three-fifths">
                <div className="notification">
		              <TimeLineDiv/>
                </div>
              </div>
              <div className="column">
                <div className="notification">
		              Right bar
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </section>  
      </div> 
    );
  }
}

export default App;
