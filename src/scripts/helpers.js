import Square from '../components/Square/Square';
import Number from '../components/Info/Number';

const getSquares = (
  setFalse,
  setTrue,
  game,
  numCounts,
  grid,
  currentNumber,
  setMessage,
) => {
  const squares = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const id = `square-${i}-${j}`;
      const square = (
        <Square
          key={id}
          id={id}
          coords={[i, j]}
          setFalse={setFalse}
          setTrue={setTrue}
          game={game}
          numCounts={numCounts}
          square={grid[i][j]}
          currentNumber={currentNumber}
          setMessage={setMessage}
        />
      );
      squares.push(square);
    }
  }
  return squares;
};

const getNumbers = (numCounts, setCurrentNumber) => {
  const numbers = [];
  for (let i = 1; i < 10; i++) {
    const number = (
      <Number
        key={i}
        i={i}
        numCounts={numCounts}
        setCurrentNumber={setCurrentNumber}
      />
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

const handleUndo = (game, setMessage) => {
  const previousMove = game.getLastMove();
  if (previousMove === undefined) {
    setMessage('There are no moves to undo!');
  }
  if (!isWrongOnBoard(game)) {
    setMessage('There are no wrong numbers!');
  } else {
    const { coords, prev } = previousMove;
    game.undoLastMove();
    resetSquare(coords, prev);
  }
};

const resetSquare = (coords, num) => {
  const square = document.querySelector(`[coords="${coords}"]`);
  square.textContent = num;
  square.classList.add('valid');
  square.classList.remove('highlight');
  square.classList.remove('wrong');
};

const isWrongOnBoard = (game) => {
  let wrong = false;
  const solution = game.getSolution();
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    if (square.textContent !== ' ') {
      const coords = square.getAttribute('coords').split(',');
      const [i, j] = coords;
      const currentNum = parseInt(square.textContent, 10);
      const correctNum = solution[i][j];
      if (currentNum !== ' ' && currentNum !== correctNum) {
        wrong = true;
      }
    }
  });
  return wrong;
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

const checkNumCountEmpty = (numCounts, num) => {
  if (numCounts[num] === 0) {
    return true;
  }
  return false;
};

const hideNumButton = (num) => {
  const button = document.querySelector(`#number-${num}`);
  button.classList.add('hide-number');
};

const checkActiveNumBtn = () => {
  let active = false;
  const numBtns = document.querySelectorAll('.number-btn');
  numBtns.forEach((btn) => {
    if (btn.classList.contains('active-btn')) {
      active = true;
    }
  });

  return active;
};

const handleNumCount = (numCounts, num) => {
  numCounts[num] -= 1;
  if (checkNumCountEmpty(numCounts, num)) {
    hideNumButton(num);
  }
};

const highlightBoardNums = (num) => {
  const numSquares = [];
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.classList.remove('highlight');
    if (checkSquareForNum(square, num) === true) {
      numSquares.push(square);
    }
  });
  numSquares.forEach((square) => square.classList.add('highlight'));
};

const checkSquareForNum = (square, num) => {
  const squareNum = square.textContent;
  const stringNum = JSON.stringify(num);
  return squareNum === stringNum;
};

const getHint = (game, numCounts) => {
  const { grid } = game;
  const solution = game.getSolution();
  let found = false;
  while (!found) {
    const i = Math.floor(Math.random() * 9);
    const j = Math.floor(Math.random() * 9);
    if (grid[i][j] === ' ') {
      found = true;
      applyHint([i, j], game, numCounts, solution);
    }
  }
};

const applyHint = (coords, game, numCounts, solution) => {
  const [i, j] = coords;
  const answer = solution[i][j];
  const square = document.querySelector(`[coords="${coords}"]`);
  square.textContent = answer;
  square.classList.remove('valid');
  game.addNumberToGrid(coords, answer);
  handleNumCount(numCounts, answer);
};

const isCorrectSquare = (game, coords, square) => {
  const [i, j] = coords;
  const correctSquare = game.getSolution()[i][j];
  if (correctSquare === square) {
    return true;
  }
  return false;
};

const boardHasIncorrect = (game) => {
  let correct = true;
  const solution = game.getSolution();
  const squares = document.querySelectorAll('.square');
  squares.forEach((sq) => {
    const coords = sq.getAttribute('coords').split(',');
    const [i, j] = coords;
    if (game.grid[i][j] !== solution[i][j]) {
      correct = false;
    }
  });
  return correct;
};

const updateBoardSquare = (coords, currentNumber) => {
  const square = document.querySelector(`[coords="${coords}"]`);
  square.textContent = currentNumber;
};

export {
  getSquares,
  getNumbers,
  convertDifficulty,
  getSquareStyles,
  handleUndo,
  getNumCounts,
  checkNumCountEmpty,
  checkActiveNumBtn,
  handleNumCount,
  highlightBoardNums,
  getHint,
  isCorrectSquare,
  boardHasIncorrect,
  updateBoardSquare,
  hideNumButton,
};
