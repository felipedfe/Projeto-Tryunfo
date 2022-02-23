import React from 'react';
import '../Form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome da carta:
          <input data-testid="name-input" type="text" name="nome" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea data-testid="description-input" name="descricao" />
        </label>
        <label htmlFor="numeroAttr1">
          Attr01:
          <input data-testid="attr1-input" name="numeroAttr1" />
        </label>
        <label htmlFor="numeroAttr2">
          Attr01:
          <input data-testid="attr2-input" name="numeroAttr2" />
        </label>
        <label htmlFor="numeroAttr3">
          Attr01:
          <input data-testid="attr3-input" name="numeroAttr3" />
        </label>
        <label htmlFor="imagem">
          Imagem:
          <input data-testid="image-input" type="text" name="imagem" />
        </label>
        Raridade:
        <select data-testid="rare-input" name="raridade">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        Super Trunfo
        <input data-testid="trunfo-input" type="checkbox" />
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
