import React from 'react';
import PropTypes from 'prop-types';

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
      <section className="preview">
        <h1 className="title">Pré-visualização:</h1>
        <div className="preview__card-container">
          <div className="name-card-container">
            <h2
              className={
                `name-card${cardName.length < 1 ? 'empty-bg' : ''}`
              }
            >
              {cardName}

            </h2>
          </div>
          <div className="imagem-conteudo">
            <img className="image-card" src={ cardImage } alt="" />
          </div>
          <div className="description-container">
            <p className="description-card">{cardDescription}</p>
          </div>
          <div className="attributes-container">
            <span>
              Atributo 1 :
              {' '}
              {cardAttr1}
              {/* <span className="attr-card">{ cardAttr1 }</span> */}
            </span>
            <p>
              Atributo 2 :
              <span className="attr-card">{cardAttr2}</span>
            </p>
            <p>
              Atributo 3 :
              <span className="attr-card">{cardAttr3}</span>
            </p>
            <p>
              Raridade:
              {' '}
              <span className="rare-card">{cardRare}</span>
            </p>
          </div>
          {
            cardTrunfo ? <p className="trunfo-card">*** Super Trunfo! ***</p> : <p />
          }
          {botaoExcluir && (
            <button
              type="button"
              className="delete-button"
              name={ cardName }
              onClick={ apagaCarta }
            >
              Excluir
            </button>
          )}
        </div>
      </section>

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
