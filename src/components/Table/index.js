import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Card from './Card';
import Targets from './Targets';
//import 'style.css';


class Table extends Component {
  render() {
    return(
      <div>
        <Card />
        <Targets />
      </div>
    )
  }
}

export default Table;