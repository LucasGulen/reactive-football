import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from './components/leftMenu/LeftMenu';

class App extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
      
        <LeftMenu />
        <main id="page-wrap">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </main>      
      </div>

    );
  }
}

export default App;
