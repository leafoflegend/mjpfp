import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root');

class App extends React.Component {
  render() {
    console.log('testing');
    return <h1>TESTING WEBPACK</h1>;
  }
}
ReactDOM.render(<App />, root);
