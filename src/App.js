import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello Leo! This is your website!</h2>
        </div>
        <p className="App-intro">
          Customize this page anyway you want!
        </p>
      </div>
    );
  }
}

export default App;
