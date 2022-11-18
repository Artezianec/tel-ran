import './App.css';
import React, { Component } from 'react'
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start'

export const start = 'start';
export const game = 'game';
export const result = 'result';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: start,
      name: 'YOU',
      globalScore: [0, 0]
    }
  }

  changeName = name => {
    if (name) {
      this.setState({ name });
    }
  }

  changePage = page => {
    this.setState({ page })
  }

  changeGlobalScore = gameResult => {
    if (gameResult[1] > gameResult[0]) {
      this.setState(prevState => {
        const score = [...prevState.globalScore];
        score[1]++;
        score[2] = 'win';
        return { globalScore: score };
      })
      return;
    }
    if (gameResult[1] < gameResult[0]) {
      this.setState(prevState => {
        const score = [...prevState.globalScore];
        score[0]++;
        score[3] = 'lose';
        return { globalScore: score };
      })
      return;
    }
    const score = [...this.state.globalScore];
    score[2] = 'Draw';
    this.setState({ globalScore: score });
  }

  renderNorm = () => {
    switch (this.state.page) {
      case result:
        return <Result score={this.state.globalScore} changePage={this.changePage} />;
      case game:
        return <Game changeGlobalScore={this.changeGlobalScore} name={this.state.name} changePage={this.changePage} />;
      default:
        return <Start changeName={this.changeName} changePage={this.changePage} />
    }
  }

  render() {
    return (
      <div className='App'>
        {this.renderNorm()}
      </div>
    )
  }
}



export default App;