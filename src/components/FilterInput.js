import React from 'react';
import PropTypes from 'prop-types';
import '../styles/filter.css';

class FilterInput extends React.Component {
  render() {
    const {
      filtroNome,
      filtroRaridade,
      filtraNomeERaridade } = this.props;

    return (
      <div className="filter__input-container">
        <label className="filter__label" htmlFor="filtroNome">
          Filtros de busca:
          <input
            className="filter__input"
            type="text"
            placeholder="Filtro Nome"
            name="filtroNome"
            value={ filtroNome }
            onChange={ filtraNomeERaridade }
          />
        </label>

        <label className="filter__label" htmlFor="raridade">
          Raridade:
          <select
            className="filter__select"
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
      </div>
    );
  }
}

FilterInput.propTypes = {
  filtroNome: PropTypes.string.isRequired,
  filtroRaridade: PropTypes.string.isRequired,
  filtraNomeERaridade: PropTypes.func.isRequired,
};

export default FilterInput;
