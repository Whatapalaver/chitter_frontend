import React, { Component } from 'react';
import Titles from './components/Titles';
import TimeLine from './components/TimeLine';
import UserLine from './components/UserLine';
import Footer from './components/Footer';
import './App.css';
import './mystyles.css';
// import './debug.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        
      };
    }
  
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
		              <TimeLine />
                </div>
              </div>
              <div className="column">
                <div className="notification">
		              <UserLine />
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
