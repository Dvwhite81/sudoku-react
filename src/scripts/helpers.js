// import Cell from '../components/Cell/Cell';
import Square from '../components/Square/Square';
import Number from '../components/Number/Number';

const getSquares = (game, numCounts, grid, currentNumber) => {
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
          numCounts={numCounts}
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
      difficulty = 25;
      break;
    case 'medium':
      difficulty = 45;
      break;
    case 'hard':
      difficulty = 55;
      break;
    default:
      break;
  }
  return difficulty;
};

const getSquareStyles = (coords) => {
  const [x, y] = coords;
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

const handleUndo = (game) => {
  game.undoLastMove();
  const previousMove = game.getLastMove();
  const { coords, prev } = previousMove;
  const square = document.querySelector(`[coords="${coords}"]`);
  square.textContent = prev;
  if (square.classList.contains('wrong')) {
    square.classList.remove('wrong');
    square.classList.add('valid');
  }
};

const getNumCounts = (grid) => {
  const numCounts = {};
  for (let i = 1; i < 10; i++) {
    numCounts[i] = 9;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = grid[i][j];
      numCounts[num] -= 1;
    }
  }
  return numCounts;
};

const handleNumCount = (numCounts, num) => {
  numCounts[num] -= 1;
  if (numCounts[num] === 0) {
    const button = document.querySelector(`#number-${num}`);
    button.classList.add('hide-number');
  }
};

const highlightBoardNums = (num) => {
  const numSquares = [];
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.classList.remove('highlight');
    if (square.textContent === JSON.stringify(num)) {
      numSquares.push(square);
    }
  });
  numSquares.forEach((square) => square.classList.add('highlight'));
};

export {
  getSquares,
  // getCells,
  getNumbers,
  convertDifficulty,
  getSquareStyles,
  handleUndo,
  getNumCounts,
  handleNumCount,
  highlightBoardNums,
};
