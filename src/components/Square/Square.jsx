import { useState } from 'react';
import {
  checkActiveNumBtn,
  getSquareStyles,
  handleNumCount,
} from '../../scripts/helpers';
import './Square.css';

function Square({
  id,
  coords,
  setFalse,
  setTrue,
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
      if (currentNumber === null || checkActiveNumBtn() === false) {
        // eslint-disable-next-line no-alert, no-undef
        return window.alert('Click a number button first!');
      }
      if (boardHasIncorrect()) {
        // eslint-disable-next-line no-alert, no-undef
        return window.alert('Undo the wrong move first!');
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
        if (game.checkWin()) {
          setFalse(false);
          setTrue(true);
        }
      }
    }
  };

  const isCorrectSquare = () => {
    const [i, j] = coords;
    const correctSquare = game.getSolution()[i][j];
    if (correctSquare === currentNumber) {
      return true;
    }
    return false;
  };

  const boardHasIncorrect = () => {
    const incorrect = document.querySelectorAll('.wrong');
    return incorrect.length > 0;
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
