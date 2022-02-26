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
      valorFiltroNome: '',
      valorFiltroRaridade: 'todas',
    };
  }

  verificaCardTrunfo = (carta) => {
    console.log(carta);
    if (carta[0].cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  apagaCarta = ({ target }) => {
    const { name } = target;
    const { listaCartas } = this.state;
    console.log(name);
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
    // console.log(this.state.listaCartas);
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
    console.log('ckecked:', value);
    this.setState({
      [name]: value,
    }, () => {
      this.setState(() => ({
        botaoSalvar: this.validacao(),
      }));
    });
  }

  filtraNome = ({ target }) => {
    const { value } = target;
    this.setState({
      valorFiltroNome: value,
    });
    console.log(value);
  }

  filtraRaridade = ({ target }) => {
    const { value } = target;
    this.setState({
      valorFiltroRaridade: value,
    });
  }

  render() {
    // console.log(this.state.listaCartas);
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
      valorFiltroNome,
      valorFiltroRaridade,
      // botaoExcluir,
      listaCartas } = this.state;

    return (
      <div className="container-principal">
        {/* <h1>Tryunfo</h1> */}
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
          <label htmlFor="buscaNome">
            Filtros de busca:
            <input
              data-testid="name-filter"
              type="text"
              placeholder="Filtro Nome"
              name="buscaNome"
              value={ valorFiltroNome }
              onChange={ this.filtraNome }
            />
          </label>

          <select
            data-testid="rare-filter"
            name="filtroRaridade"
            value={ valorFiltroRaridade }
            onChange={ this.filtraRaridade }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>

          {listaCartas.filter((card) => card.nome.includes(valorFiltroNome))
            .filter((cartinha) => (valorFiltroRaridade === 'todas'
              ? cartinha.raridade !== (valorFiltroRaridade)
              : cartinha.raridade === (valorFiltroRaridade)))
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
