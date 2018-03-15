import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/* COMPONENTS*/
import Welcome from './components/Welcome/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
