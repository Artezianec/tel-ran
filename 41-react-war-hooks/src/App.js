import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';

export const start = 'start';
export const game = 'game';
export const result = 'result';

const App = () => {

  const [page, setPage] = useState(start);
  const [name, setName] = useState('YOU');
  const [globalScore, setGlobalScore] = useState([0, 0]);

  const changeName = name => {
    if (name) {
      setName(name);
    }
  }

  const changeGlobalScore = gameResult => {
    if (gameResult[1] > gameResult[0]) {
      setGlobalScore(prevState => [prevState[0],prevState[1] + 1, 'Win'])
    }
    if (gameResult[1] < gameResult[0]) {
      setGlobalScore(prevState => [prevState[0] + 1,prevState[1], 'Lose'])
    }
    if (gameResult[1] === gameResult[0]) {
      setGlobalScore(prevState => [prevState[0],prevState[1], 'Draw'])
    }
  }

  const renderNorm = () => {
    switch (page) {
      case result:
        return <Result score={globalScore} changePage={setPage} />;
      case game:
        return <Game changeGlobalScore={changeGlobalScore} name={name} changePage={setPage} />;
      default:
        return <Start changeName={changeName} changePage={setPage} />
    }
  }

  return (
    <div className='App'>
      {renderNorm()}
    </div>
  )

}

export default App;