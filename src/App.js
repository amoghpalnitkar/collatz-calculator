import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CollatzCalculator from "./components/CollatzCalculator";
import {init as firebaseInit} from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
  }
  render() {
    return (
      <div className="App">
        <CollatzCalculator />
      </div>
    );
  }
}

export default App;
