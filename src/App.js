import React, { Component } from 'react';
import './App.css';
import IceCreamContainer from './containers/IceCreamContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{'paddingTop': '50px'}}>Ice Ice Baby</h1>
        <IceCreamContainer />
      </div>
    );
  }
}

export default App;
