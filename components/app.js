import React from 'react';
import Day from './day.js'

class App extends React.Component {
  render() {
    return (
      <div className="calendar">
        <h1>Calendar</h1>
        <Day />
      </div>
    );
  }
}

export default App;
