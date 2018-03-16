import React, { Component } from 'react';
import Card from './Card';


class Targets extends Component {
  render() {
    return (
      <div className="target">
        {
          this.props.baraja
            .map((card, index) => {
              const comparation = this.props.parejaSeleccionada.indexOf(card) > -1;
              return <Card
                key={index}
                icon={card.icon}
                comparation={comparation}
                selectionCard={() => this.props.selectionCard(card)}
                adivination={card.adivination}
              />;
            })
        }
      </div>
    ); 
  }
};

export default Targets;