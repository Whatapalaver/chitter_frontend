import React, { Component } from 'react';
import Titles from './components/Titles';
import TimeLineDiv from './components/TimeLineDiv';
import UserLineDiv from './components/UserLineDiv';
import Footer from './components/Footer';
import './App.css';
import './mystyles.css';
// import './debug.css';

class App extends Component {
  
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
		              Left sidebar - Profile
                </div>
              </div>
	            <div className="column is-half">
                <div className="notification">
		              <TimeLineDiv />
                </div>
              </div>
              <div className="column">
                <div className="notification">
		              <UserLineDiv />
                </div>
              </div>
            </div>
          </div>
          <div className="footer is-paddingless-vertical">
            <Footer />
          </div>
        </section>  
      </div> 
    );
  }
}

export default App;
