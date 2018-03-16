import React, {Component} from 'react';
import FlipCard from 'react-flipcard';

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.selectionCard}>
        <FlipCard
          flipped={this.props.comparation || this.props.adivination}
          disabled={true}
        >
          <div className="port"></div>
          <div className="cont">
            <i className={`fa ${this.props.icon} fa-5x`}></i>
          </div>
        </FlipCard>
      </div>
    )
  }
};

export default Card;