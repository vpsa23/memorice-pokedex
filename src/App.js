import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

/* COMPONENTS*/
import ContainerWelcome from './containers/ContainerWelcome';
import ContainerTable from './containers/ContainerTable';






class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerWelcome />
        <ContainerTable />
      </div>
    );
  }
}

export default App;




