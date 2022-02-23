import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName="Tartaruga"
          cardDescription="Um animal bem lento."
          cardAttr1="2"
          cardAttr2="3"
          cardAttr3="5"
          cardImage="tartaruga.jpg"
          cardRare="raro"
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ () => {} }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName="Pinguim"
          cardDescription="Um animal simpático."
          cardAttr1="2"
          cardAttr2="7"
          cardAttr3="9"
          cardImage="pinguim.jpg"
          cardRare="raro"
          cardTrunfo
        />
      </div>
    );
  }
}

export default App;
