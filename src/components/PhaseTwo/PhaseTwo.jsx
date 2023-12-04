import { useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import './PhaseTwo.css';
import Modal from '../Modal/Modal';

function PhaseTwo({
  setFalse,
  setTrue,
  game,
  numCounts,
  difficulty,
  message,
  setMessage,
}) {
  const [currentNumber, setCurrentNumber] = useState(null);

  return (
    <div id="phase-two-container">
      <Modal message={message} setMessage={setMessage} />
      <Board
        setFalse={setFalse}
        setTrue={setTrue}
        game={game}
        numCounts={numCounts}
        currentNumber={currentNumber}
        setMessage={setMessage}
      />
      <Info
        setFalse={setFalse}
        setTrue={setTrue}
        game={game}
        numCounts={numCounts}
        difficulty={difficulty}
        setCurrentNumber={setCurrentNumber}
        setMessage={setMessage}
      />
    </div>
  );
}

export default PhaseTwo;
