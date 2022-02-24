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
      hasTrunfo: false,
      botaoSalvar: true,
      listaCartas: [],
    };
  }

  limpaCampos = () => {
    this.setState({
      nome: '',
      descricao: '',
      imagem: '',
      numeroAttr1: '0',
      numeroAttr2: '0',
      numeroAttr3: '0',
      raridade: 'normal',
    });
  }

  onSaveButtonClick = () => {
    const { nome,
      descricao,
      imagem,
      numeroAttr1,
      numeroAttr2,
      numeroAttr3,
      raridade,
      cardTrunfo,
    } = this.state;
    const objetoCarta = {
      nome,
      descricao,
      imagem,
      numeroAttr1,
      numeroAttr2,
      numeroAttr3,
      raridade,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      listaCartas: [...prevState.listaCartas, objetoCarta],
    }));
    this.limpaCampos();
    this.desabilitaCheckSuperTrunfo();
    console.log(this.state.listaCartas);
  }

  desabilitaCheckSuperTrunfo = () => {
    if (this.state.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  validacao = () => {
    const { nome,
      descricao,
      imagem,
      numeroAttr1,
      numeroAttr2,
      numeroAttr3,
    } = this.state;
    if (nome.length < 1
      || descricao.length < 1
      || imagem.length < 1
      || parseInt(numeroAttr1) + parseInt(numeroAttr2) + parseInt(numeroAttr3) > 210
      || parseInt(numeroAttr1) > 90
      || parseInt(numeroAttr2) > 90
      || parseInt(numeroAttr3) > 90
      || parseInt(numeroAttr1) < 0
      || parseInt(numeroAttr2) < 0
      || parseInt(numeroAttr3) < 0
    ) {
      return true;
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log('ckecked:', value);
    this.setState({
      [name]: value,
    }, () => {
      this.setState(() => ({
        botaoSalvar: this.validacao(),
      }));
    });
  }

  render() {
    console.log(this.state.listaCartas)
    const {
      nome,
      descricao,
      numeroAttr1,
      numeroAttr2,
      numeroAttr3,
      raridade,
      imagem,
      cardTrunfo,
      hasTrunfo,
      botaoSalvar,
      listaCartas } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nome }
          cardDescription={ descricao }
          cardAttr1={ numeroAttr1 }
          cardAttr2={ numeroAttr2 }
          cardAttr3={ numeroAttr3 }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ botaoSalvar }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <p>-----------------------</p>
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
        <h1>Lista:</h1>
        {listaCartas.map((carta) => (<Card
          key={ carta.nome }
          cardName={ carta.nome }
          cardDescription={ carta.descricao }
          cardAttr1={ carta.cardAttr1 }
          cardAttr2={ carta.cardAttr2 }
          cardAttr3={ carta.cardAttr3 }
          cardImage={ carta.imagem }
          cardRare={ carta.raridade }
          cardTrunfo={ carta.cardTrunfo }
        />))}
      </div>
    );
  }
}

export default App;
