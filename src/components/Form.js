import React from 'react';
// import '../Form.css';
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
      <form className="form-area">
        <h1 className="label-text preview-text">Adicionar nova carta:</h1>
        <label className="label-text" htmlFor="nome">
          Nome da carta:
          <input
            maxLength="20"
            className="name-input"
            type="text"
            name="nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-text" htmlFor="descricao">
          Descrição:
          <textarea
            maxLength="30"
            className="description-input"
            name="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-text" htmlFor="numeroAttr1">
          Attr01:
          <input
            className="attr-input"
            data-testid="attr1-input"
            name="numeroAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-text" htmlFor="numeroAttr2">
          Attr02:
          <input
            className="attr-input"
            data-testid="attr2-input"
            name="numeroAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-text" htmlFor="numeroAttr3">
          Attr03:
          <input
            className="attr-input"
            data-testid="attr3-input"
            name="numeroAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-text" htmlFor="imagem">
          Imagem:
          <input
            className="img-input"
            data-testid="image-input"
            type="text"
            name="imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <span className="url-imagem">Inserir URL da imagem &#x21E7;</span>
        <label className="label-text" htmlFor="raridade">
          Raridade:
          <select
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
          <span className="label-text">Super Trunfo?</span>
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
          className="save-button"
          type="button"
          name="botaoSalvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          <span className="save-text">Salvar</span>
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
