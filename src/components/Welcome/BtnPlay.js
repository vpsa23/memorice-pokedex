import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase, { auth, provider } from './../../firebase';
import { Grid, Row, Col } from 'react-bootstrap';
import ContainerTable from './../../containers/ContainerTable';
//import Targets from './../Table/Targets';



class BtnPlay extends Component {
  constructor() {
    super();
    this.state = {
      user: null // <-- usuario comience vacio
    }
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }


  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div className='btnPlay'>
        <header>
          <div className="show-grid">
            {this.state.user ?
                <button onClick={this.logout}>Logout</button>
                :
                <button onClick={this.login}>Log In</button>
            }
          </div>
        </header>
        {this.state.user ?
          <div>
            <div className='user-profile'>
              <img src={this.state.user.photoURL} />
            </div>
          </div>
          :
          <div className='wrapper'>
            <p>¡Ven y Juega!</p>
          </div>
        }
      </div>
    );
  }
}


export default BtnPlay;