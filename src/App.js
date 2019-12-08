import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './App.css';
import Bord from "./Bord.js";
import WoordenAlgemeen from "./woorden-algemeen.json"

class App extends React.Component {


  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  woordenAlgemeen() {
    return this.shuffleArray(WoordenAlgemeen);
  }

  render() {

    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Preekbingo</h1>
        </Jumbotron>
        <Bord rows="4" cols="5" woorden={this.woordenAlgemeen()} />

      </Container>
    );
  }
}

export default App;
