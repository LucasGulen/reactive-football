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
        <header className="app-header">
          <div className="app-title">Reactive Football
          <img className="user-photo" src="https://vignette.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/scale-to-width-down/250?cb=20100424114324" />
          </div>
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
