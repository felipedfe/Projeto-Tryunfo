import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      descricao: '',
      numeroAttr1: '',
      numeroAttr2: '',
      numeroAttr3: '',
      imagem: '',
      raridade: 'normal',
      cardTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const {
      nome,
      descricao,
      numeroAttr1,
      numeroAttr2,
      numeroAttr3,
      raridade,
      imagem,
      cardTrunfo } = this.state;
      console.log(this.state.cardTrunfo);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName={ nome }
          cardDescription={ descricao }
          cardAttr1={ numeroAttr1 }
          cardAttr2={ numeroAttr2 }
          cardAttr3={ numeroAttr3 }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
