import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';

export const start = 'start';
export const game = 'game';
export const result = 'result';

const App = () => {

  const [state, setState] = useState({
    page: start,
    name: 'YOU',
    globalScore: [0, 0]
  })

  const changeName = name => {
    if (name) {
      //2 stage

      // {
      //   page: game,
      //   name: 'YOU',
      //   globalScore: [0, 0]
      // }

      setState(prevState => ({ ...prevState, name }));

      // {
      //   page: start,
      //   name: 'EDD',
      //   globalScore: [0, 0]
      // }
    }
  }

  const changePage = page => {
    //1 stage

    // {
    //   page: start,
    //   name: 'YOU',
    //   globalScore: [0, 0]
    // }

    setState(prevState => ({ ...prevState, page }));

    // {
    //   page: game,
    //   name: 'YOU',
    //   globalScore: [0, 0]
    // }
  }

  const changeGlobalScore = gameResult => {
    if (gameResult[1] > gameResult[0]) {
      setState(prevState => {
        const score = [...prevState.globalScore];
        score[1]++;
        score[2] = 'Win';
        return { ...state, globalScore: score };
      })
    }
    if (gameResult[1] < gameResult[0]) {
      setState(prevState => {
        const score = [...prevState.globalScore];
        score[0]++;
        score[2] = 'Lose';
        return { ...state, globalScore: score };
      })
    }
    if (gameResult[1] === gameResult[0]) {
      setState(prevState => {
        const score = [...prevState.globalScore];
        score[2] = 'Draw';
        return { ...state, globalScore: score };
      })
    }
  }

  const renderNorm = () => {
    switch (state.page) {
      case result:
        return <Result score={state.globalScore} changePage={changePage} />;
      case game:
        return <Game changeGlobalScore={changeGlobalScore} name={state.name} changePage={changePage} />;
      default:
        return <Start changeName={changeName} changePage={changePage} />
    }
  }

  return (
    <div className='App'>
      {renderNorm()}
    </div>
  )

}

export default App;