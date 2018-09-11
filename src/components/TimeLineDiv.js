import React from 'react';

import TimeLine from './TimeLine';

class TimeLineDiv extends React.Component {
  
  render() {
    return(
      <div className="profileCard panel">
        <div className="panel-heading has-text-centered">
          <h2>See new tweets</h2>
        </div>
        <div>
          <TimeLine />
        </div>
      </div>
    );
  }
};

export default TimeLineDiv;