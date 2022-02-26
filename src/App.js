import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      botaoSalvar: true,
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
        botaoSalvar: this.validacao(),
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
      botaoSalvar,
      filtroNome,
      filtroRaridade,
      listaCartas } = this.state;

    return (
      <div className="container-principal">
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
        <div className="preview">
          <h1>Preview:</h1>
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
          />
        </div>
        {/* Lista e filtros de busca */}
        <div className="lista-cartas">
          <h1>Lista:</h1>
          <label htmlFor="filtroNome">
            Filtros de busca:
            <input
              data-testid="name-filter"
              type="text"
              placeholder="Filtro Nome"
              name="filtroNome"
              value={ filtroNome }
              onChange={ this.filtraNomeERaridade }
            />
          </label>

          <select
            data-testid="rare-filter"
            name="filtroRaridade"
            value={ filtroRaridade }
            onChange={ this.filtraNomeERaridade }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>

          {/* Abaixo as cartas são renderizadas na tela */}
          {listaCartas.filter((card) => card.nome.includes(filtroNome))
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
              apagaCarta={ this.apagaCarta }
            />))}
        </div>
      </div>
    );
  }
}

export default App;
