import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../styles/cardList.css';

class CardList extends React.Component {
  render() {
    const {
      listaCartas,
      apagaCarta,
      filtroNome,
      filtroRaridade } = this.props;

    return (
      <div className="card-list-container">
        {/* Abaixo as cartas são renderizadas na tela */}
        {listaCartas?.filter((card) => card.nome.toLowerCase()
          .includes(filtroNome.toLowerCase()))
          .filter((cartinha) => (filtroRaridade === 'todas'
            ? cartinha.raridade !== (filtroRaridade)
            : cartinha.raridade === (filtroRaridade)))
          .map((carta) => (<Card
            key={ carta.nome }
            cardName={ carta.nome }
            cardDescription={ carta.descricao }
            cardAttr1={ carta.numeroAttr1 }
            cardAttr2={ carta.numeroAttr2 }
            cardAttr3={ carta.numeroAttr3 }
            cardImage={ carta.imagem }
            cardRare={ carta.raridade }
            cardTrunfo={ carta.cardTrunfo }
            botaoExcluir
            apagaCarta={ apagaCarta }
          />))}
      </div>);
  }
}

CardList.propTypes = {
  apagaCarta: PropTypes.func.isRequired,
  filtroNome: PropTypes.string.isRequired,
  filtroRaridade: PropTypes.string.isRequired,
  listaCartas: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CardList;
