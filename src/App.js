import React, { Component } from 'react';
  import logoSpin from './logo_spin.png';
import logoStatic from './logo_static.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="logo-container">
          <img src={logoSpin} className="App-logo-spin" alt="logoSpin" />
          <img src={logoStatic} className="App-logo-static" alt="logoStatic" />
        </div>
          </header>
        <div className="search-bar">
            <input id="search-box" placeholder="Search the dark net" />
        </div>
        <div className="buttons">
            <button id="search-btn" className="btnsearch" > Search </button>
            <button id="iamnotfeelinglucky" className="btnsearch"> I'm not feeling lucky </button> 
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById("search-box").focus();    
  }
}

export default App;
