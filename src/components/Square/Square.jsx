import { useState } from 'react';
import {
  getSquareStyles,
  handleNumCount,
} from '../../scripts/helpers';
import './Square.css';

function Square({
  id,
  coords,
  game,
  numCounts,
  square,
  currentNumber,
}) {
  const [numberToShow, setNumberToShow] = useState(square);
  const squareClass = square === ' ' ? 'valid' : '';
  const styles = getSquareStyles(coords);
  // eslint-disable-next-line consistent-return
  const handleSquareClick = (e) => {
    const { target } = e;
    if (target.classList.contains('valid')) {
      if (currentNumber === null) {
        // eslint-disable-next-line no-alert, no-undef
        return window.alert('Click a number button first!');
      }
      game.addNumberToGrid(coords, currentNumber);
      setNumberToShow(currentNumber);
      target.classList.remove('valid');

      if (!isCorrectSquare()) {
        target.classList.add('wrong');
      } else {
        handleNumCount(numCounts, currentNumber);
        target.classList.add('highlight');
        if (numCounts[currentNumber] === 0) {
          currentNumber = null;
        }
      }
    }
  };

  const isCorrectSquare = () => {
    const [i, j] = coords;
    const correctSquare = game.getSolution()[i][j];
    console.log('correctSquare:', correctSquare);
    console.log('currentNumber:', currentNumber);
    if (correctSquare === currentNumber) {
      return true;
    }
    return false;
  };

  return (
    <div
      id={id}
      coords={coords}
      className={`square ${squareClass}`}
      style={styles}
      onClick={handleSquareClick}
    >
      {numberToShow}
    </div>
  );
}

export default Square;
