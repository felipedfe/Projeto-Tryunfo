import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
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

    return (
      <form className="form__form-area">
        <label className="form__label" htmlFor="nome">
          Nome da carta:
          <input
            maxLength="20"
            className="form__input"
            type="text"
            name="nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label className="form__label" htmlFor="descricao">
          Descrição:
          <textarea
            maxLength="30"
            className="form__input"
            name="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="form__label" htmlFor="numeroAttr1">
          Attr01:
          <input
            className="form__input"
            name="numeroAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label className="form__label" htmlFor="numeroAttr2">
          Attr02:
          <input
            className="form__input"
            name="numeroAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label className="form__label" htmlFor="numeroAttr3">
          Attr03:
          <input
            className="form__input"
            name="numeroAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label className="form__label" htmlFor="imagem">
          Imagem:
          <input
            className="form__input"
            type="text"
            name="imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <span className="url-imagem">Inserir URL da imagem &#x21E7;</span>
        <label className="form__label" htmlFor="raridade">
          Raridade:
          <select
            className="form__select"
            name="raridade"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <div className="super-trunfo-container">
          <span className="form__label">Super Trunfo?</span>
          {
            hasTrunfo
              ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
              : (
                <input
                  className="trunfo-input"
                  type="checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />)
          }
        </div>
        <button
          className="form__save-button"
          type="button"
          name="botaoSalvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          <span>Salvar</span>
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
