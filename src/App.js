import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CollatzCalculator from "./CollatzCalculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CollatzCalculator />
      </div>
    );
  }
}

export default App;
