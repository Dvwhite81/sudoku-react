// import { getCells } from '../../scripts/helpers';
import { useState } from 'react';
import { getSquareStyles } from '../../scripts/helpers';
import './Square.css';

function Square({ id, coords, game, square, currentNumber }) {
  const [numberToShow, setNumberToShow] = useState(square);
  const squareClass = square === ' ' ? 'valid' : '';
  const styles = getSquareStyles(coords);
  const handleSquareClick = (e) => {
    console.log('handleSquareClick e:', e);
    const { target } = e;
    if (target.classList.contains('valid')) {
      if (currentNumber === null) {
        return window.alert('Click a number button first!');
      } else {
        game.addNumberToGrid(coords, currentNumber);
        setNumberToShow(currentNumber);
        target.classList.remove('valid');
      }
    }
    if (!isCorrectSquare()) {
      target.classList.add('wrong');
    }
  };

  const isCorrectSquare = () => {
    const [i, j] = coords;
    const correctSquare = game.getSolution()[i][j];
    if (correctSquare === numberToShow) {
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
