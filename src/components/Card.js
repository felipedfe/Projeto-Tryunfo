import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      botaoExcluir,
      apagaCarta } = this.props;

    return (
      <div className="card-container">
        <div className="card-name-container">
          <h2
          // className={ `card-name ${cardName.length < 1 ? 'empty-bg' : ''}` }
            className="card-name"
          >
            {cardName}
          </h2>
        </div>
        <div className="card-image-container">
          {cardImage && <img className="image-card" src={ cardImage } alt="" />}
        </div>
        <div className="card-description-container">
          <span className="card-description">{cardDescription}</span>
        </div>
        <div className="card-attributes-container">
          <div className="att-container">
            <span>Atributo 1</span>
            <span className="att-value">{cardAttr1}</span>
          </div>
          <div className="att-container">
            <span>Atributo 2</span>
            <span className="att-value">{cardAttr2}</span>
          </div>
          <div className="att-container">
            <span>Atributo 3</span>
            <span className="att-value">{cardAttr3}</span>
          </div>
          <div className="rarity-container">
            <span>Raridade</span>
            <span className="rarity-value">{cardRare}</span>
          </div>
        </div>
        {
          cardTrunfo && <span className="card-super-trunfo">Super Trunfo!</span>
        }
        {botaoExcluir && (
          <button
            type="button"
            className="card-delete-button"
            name={ cardName }
            onClick={ apagaCarta }
          >
            Excluir
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  botaoExcluir: PropTypes.bool.isRequired,
  apagaCarta: PropTypes.func.isRequired,
};

export default Card;
