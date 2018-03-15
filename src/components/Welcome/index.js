import React, { Component } from 'react';
import Title from './Title';
import BtnPlay from './BtnPlay';
//import 'style.css';

class Welcome extends Component {
  render() {
    return(
      <div>
        <Title />
        <BtnPlay />
      </div>
    )
  }
}

export default Welcome;