import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Count from './Count';
import BtnReset from './BtnReset';
//import 'style.css';


class Nav extends Component {
  render() {
    return (
      <header> 
          <div>
            <Logo />
            <Count />
            <BtnReset />
        </div>
      </header>
    );
  }
};

export default Nav;