import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* COMPONENTS*/
import title from './components/Welcome/title';


class App extends Component {
  render() {
    return (
      <div className="App">
        <title />
      </div>
    );
  }
}

export default App;
