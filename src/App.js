import React, { Component } from 'react';
import './App.css';
import IceCreamContainer from './containers/IceCreamContainer.js';

class App extends Component {

  // App is our highest level component and it's only functionality...
  // ...is to render our <IceCreamContainer /> component and...
  // ...our application name

  render() {
    return (
      <div className="App">
        <h1>Scoop Dogg's Ice Cream Shoppe</h1>
        <IceCreamContainer />
      </div>
    );
  }
}

export default App;
