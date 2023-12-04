import {
  checkActiveNumBtn,
  getSquareStyles,
  getNumCounts,
  boardHasIncorrect,
  updateBoardSquare,
  hideNumButton,
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
  setMessage,
}) {
  const squareClass = square === ' ' ? 'valid' : '';
  const styles = getSquareStyles(coords);

  const handleSquareClick = (e) => {
    const { target } = e;
    if (target.classList.contains('valid')) {
      if (currentNumber === null || checkActiveNumBtn() === false) {
        setMessage('Click a number button first!');
      }
      if (boardHasIncorrect(game)) {
        setMessage('Undo the wrong move first!');
      }
      game.addNumberToGrid(coords, currentNumber);
      updateBoardSquare(coords, currentNumber);
      target.classList.remove('valid');

      if (!isCorrectSquare()) {
        target.classList.add('wrong');
      } else {
        target.classList.add('highlight');
        numCounts = getNumCounts(game.grid);
        if (numCounts[currentNumber] === 0 && !boardHasIncorrect(game)) {
          hideNumButton(currentNumber);
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

  return (
    <div
      id={id}
      coords={coords}
      className={`square ${squareClass}`}
      style={styles}
      onClick={handleSquareClick}
    >
      {square}
    </div>
  );
}

export default Square;
