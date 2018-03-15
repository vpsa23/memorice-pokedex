import React, { Component } from 'react';
import { connect } from 'react-redux';
import Welcome from './../components/Welcome';

class ContainerWelcome extends Component {
  render() {
    return (
      <div>
        <Welcome>
        </Welcome>
      </div>
    )
  }
}


export default ContainerWelcome;