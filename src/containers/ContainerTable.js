import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './../components/Nav';
import Table from './../components/Table';
import BarajaCard from './components/Table/BarajaCard';

const getEstadoInicial = () => {
  const baraja = BarajaCard();
  return {
    baraja,
    parejaSeleccionada: [],
    comparation: false,
    numeroDeIntentos: 0
  };
}



class ContainerTable extends Component {
    constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <Table></Table>
        <BarajaCard></BarajaCard>
      </div>
    )
  }
}


export default ContainerTable;