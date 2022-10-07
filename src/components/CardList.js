import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const {
      listaCartas,
      apagaCarta,
      filtroNome,
      filtroRaridade,
      filtraNomeERaridade } = this.props;

    return (
      <div className="lista-cartas">
        <h1 className="label-text preview-text">Lista:</h1>
        <label className="label-text" htmlFor="filtroNome">
          Filtros de busca:
          <input
            className="filter-input"
            type="text"
            placeholder="Filtro Nome"
            name="filtroNome"
            value={ filtroNome }
            onChange={ filtraNomeERaridade }
          />
        </label>

        <label className="label-text" htmlFor="raridade">
          Raridade:
          <select
            name="filtroRaridade"
            value={ filtroRaridade }
            onChange={ filtraNomeERaridade }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        {/* Abaixo as cartas são renderizadas na tela */}
        {listaCartas.filter((card) => card.nome.toLowerCase()
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
  filtraNomeERaridade: PropTypes.func.isRequired,
  listaCartas: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CardList;
