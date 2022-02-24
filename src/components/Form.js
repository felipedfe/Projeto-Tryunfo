import React from 'react';
import '../Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    console.log(this.props);
    const { cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick } = this.props;
    console.log('hasTrunfo:', hasTrunfo);
    return (
      <form>
        <label htmlFor="nome">
          Nome da carta:
          <input
            data-testid="name-input"
            type="text"
            name="nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea
            data-testid="description-input"
            name="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="numeroAttr1">
          Attr01:
          <input
            data-testid="attr1-input"
            name="numeroAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="numeroAttr2">
          Attr02:
          <input
            data-testid="attr2-input"
            name="numeroAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="numeroAttr3">
          Attr03:
          <input
            data-testid="attr3-input"
            name="numeroAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imagem">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        Raridade:
        <select
          data-testid="rare-input"
          name="raridade"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        Super Trunfo?
        {
          hasTrunfo
            ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
            : (
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />)
        }
        <button
          data-testid="save-button"
          type="button"
          name="botaoSalvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired, //
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired, //
};

export default Form;
