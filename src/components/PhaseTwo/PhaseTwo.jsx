import { useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import './PhaseTwo.css';

function PhaseTwo({ game, difficulty }) {
  const [currentNumber, setCurrentNumber] = useState(null);

  return (
    <div id="phase-two-container">
      <Board game={game} currentNumber={currentNumber} />
      <Info
        difficulty={difficulty}
        setCurrentNumber={setCurrentNumber}
      />
    </div>
  );
}

export default PhaseTwo;
