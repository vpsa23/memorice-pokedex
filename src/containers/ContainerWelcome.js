import React, { Component } from 'react';
import { connect } from 'react-redux';
import Welcome from './../components/Welcome';

class Welcome extends Component {
  render() {
    return (
      this.props.city === null ? null :
      <Welcome city = {this.props.city}>
      </Welcome>
    ) 
  }
}