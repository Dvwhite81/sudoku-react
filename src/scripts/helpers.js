// import Cell from '../components/Cell/Cell';
import Square from '../components/Square/Square';
import Number from '../components/Number/Number';

const getSquares = (game, grid, currentNumber) => {
  const squares = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const id = `square-${i}-${j}`;
      const square = (
        <Square
          key={id}
          id={id}
          coords={[i, j]}
          game={game}
          square={grid[i][j]}
          currentNumber={currentNumber}
        />
      );
      squares.push(square);
    }
  }
  return squares;
};

/*
const getCells = (num, styles) => {
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const id = `cell-${num}-${i}`;
    const cell = <Cell key={id} id={id} styles={styles} />;
    cells.push(cell);
  }
  return cells;
};
*/

const getNumbers = (setCurrentNumber) => {
  const numbers = [];
  for (let i = 1; i < 10; i++) {
    const number = (
      <Number key={i} i={i} setCurrentNumber={setCurrentNumber} />
    );
    numbers.push(number);
  }
  return numbers;
};

const convertDifficulty = (type) => {
  let difficulty;
  switch (type) {
    case 'easy':
      difficulty = 30;
      break;
    case 'medium':
      difficulty = 45;
      break;
    case 'hard':
      difficulty = 60;
      break;
    default:
      break;
  }
  return difficulty;
};

const getSquareStyles = (coords) => {
  const [x, y] = coords;
  console.log('[x, y]:', [x, y]);
  const blocks = [2, 5];
  const styles = {};

  if (blocks.includes(y)) {
    styles.borderRight = '2px solid black';
  } else {
    styles.borderRight = '1px solid lightgray';
  }

  if (blocks.includes(x)) {
    styles.borderBottom = '2px solid black';
  } else {
    styles.borderBottom = '1px solid lightgray';
  }

  return styles;
};

export {
  getSquares,
  // getCells,
  getNumbers,
  convertDifficulty,
  getSquareStyles,
};
