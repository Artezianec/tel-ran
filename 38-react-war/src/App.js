import './App.css';
import React from 'react';
import Start from './pages/Start';
import Game from './pages/Game';
import Result from './pages/Result';
import { page_game, page_result, page_start } from './const/const';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: page_start,
      name: '',
      compPoint: 0,
      playerPoint: 0,
      result: ''
    }
  }

  changeName = (name) => {
    if (name) {
      this.setState({ name: name })
    } else {
      this.setState({ name: 'New Player' })
    }
  }

  switchPage = (page) => {
    this.setState({ page: page })
  }

  changePoints = (res) => {
    if (res === 1) {
      this.setState(prevState => ({ playerPoint: prevState.playerPoint + 1, result: 'You Win' }))
    }
    if (res === 0) {
      this.setState(prevState => ({ compPoint: prevState.compPoint + 1, result: 'You Lose' }))
    }
    if (res === -1) {
      this.setState(() => ({ result: 'Draw' }))
    }
  }

  render() {
    switch (this.state.page) {
      case page_game:
        return <Game switchPage={this.switchPage} name={this.state.name} changePoints={this.changePoints} />
      case page_result:
        return <Result switchPage={this.switchPage} compPoint={this.state.compPoint} playerPoint={this.state.playerPoint} result={this.state.result} />
      default:
        return <Start switchPage={this.switchPage} changeName={this.changeName} name={this.state.name} />;
    }
  }
}

export default App;
