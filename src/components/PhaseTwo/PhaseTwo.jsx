import { useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import './PhaseTwo.css';

function PhaseTwo({ setFalse, setTrue, game, numCounts, difficulty }) {
  const [currentNumber, setCurrentNumber] = useState(null);

  return (
    <div id="phase-two-container">
      <Board
        setFalse={setFalse}
        setTrue={setTrue}
        game={game}
        numCounts={numCounts}
        currentNumber={currentNumber}
      />
      <Info
        setFalse={setFalse}
        setTrue={setTrue}
        game={game}
        numCounts={numCounts}
        difficulty={difficulty}
        setCurrentNumber={setCurrentNumber}
      />
    </div>
  );
}

export default PhaseTwo;
