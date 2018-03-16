import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Count from './../Nav/Count';
import Logo from './../Nav/Logo';
//import Targets from './../Table/Targets';



class BtnPlay extends Component {
  constructor(props){
    super();
    this.state = {
      showComponent: false,
    }
  }

  btnClick = () => {
    console.log('holi');
    alert('helo');
    return(
      <div>
        <Count />
        <Logo />
      </div>
    )
  }


  render() {
    return(
      <div className='btnPlay'>
        <button onClick={this.btnClick}>Start PLay</button>
      </div>
    )
  }
}


export default BtnPlay;