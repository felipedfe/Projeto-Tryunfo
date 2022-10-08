import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import FilterInput from './components/FilterInput';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      descricao: '',
      numeroAttr1: '0',
      numeroAttr2: '0',
      numeroAttr3: '0',
      imagem: '',
      raridade: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      botaoSalvarDesabilitado: true,
      listaCartas: [],
      filtroNome: '',
      filtroRaridade: 'todas',
    };
  }

  verificaCardTrunfo = (carta) => {
    if (carta[0].cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  apagaCarta = ({ target }) => {
    const { name } = target;
    const { listaCartas } = this.state;
    const carta = listaCartas.filter((elemento) => elemento.nome === name);
    this.verificaCardTrunfo(carta);
    this.setState({
      listaCartas: listaCartas.filter((card) => card.nome !== name),
    });
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
    const cardObject = {
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
      listaCartas: [...prevState.listaCartas, cardObject],
    }));
    this.limpaCampos();
    this.desabilitaCheckSuperTrunfo();
  }

  desabilitaCheckSuperTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
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
    const maxLength = 90;
    const maxLengthSum = 210;
    if (nome.length < 1
      || descricao.length < 1
      || imagem.length < 1
      || parseInt(numeroAttr1, 10)
      + parseInt(numeroAttr2, 10)
      + parseInt(numeroAttr3, 10) > maxLengthSum
      || parseInt(numeroAttr1, 10) > maxLength
      || parseInt(numeroAttr2, 10) > maxLength
      || parseInt(numeroAttr3, 10) > maxLength
      || parseInt(numeroAttr1, 10) < 0
      || parseInt(numeroAttr2, 10) < 0
      || parseInt(numeroAttr3, 10) < 0
    ) {
      return true;
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState(() => ({
        botaoSalvarDesabilitado: this.validacao(),
      }));
    });
  }

  filtraNomeERaridade = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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
      cardTrunfo,
      hasTrunfo,
      botaoSalvarDesabilitado,
      filtroNome,
      filtroRaridade,
      listaCartas } = this.state;

    return (
      <main className="main-section">
        <section className="form-and-preview">
          <div className="form-container">
            <h1 className="title">Adicionar nova carta:</h1>
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
              isSaveButtonDisabled={ botaoSalvarDesabilitado }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="preview-container">
            <h1 className="title">Pré-visualização:</h1>
            <Card
              cardName={ nome }
              cardDescription={ descricao }
              cardAttr1={ numeroAttr1 }
              cardAttr2={ numeroAttr2 }
              cardAttr3={ numeroAttr3 }
              cardImage={ imagem }
              cardRare={ raridade }
              cardTrunfo={ cardTrunfo }
              botaoExcluir={ false }
              apagaCarta={ this.apagaCarta }
            />
          </div>
        </section>

        <section className="filter">
          <h1 className="title list-title">Todas as cartas:</h1>
          <FilterInput
            filtroNome={ filtroNome }
            filtroRaridade={ filtroRaridade }
            filtraNomeERaridade={ this.filtraNomeERaridade }
          />
        </section>
        <section className="card-list">
          <CardList
            listaCartas={ listaCartas }
            apagaCarta={ this.apagaCarta }
            filtroNome={ filtroNome }
            filtroRaridade={ filtroRaridade }
          />
        </section>
      </main>
    );
  }
}

export default App;
