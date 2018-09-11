import React, { Component } from 'react';

import Titles from './components/Titles';
import TimeLineDiv from './components/TimeLineDiv';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="grid-container">
        <div class="item1"><Titles /></div>
        <div className="item2">
          left bar
        </div>
        <div className="item3">
          <TimeLineDiv/>
        </div>
        <div className="item4">
          right bar
        </div>
        <div className="item5">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
