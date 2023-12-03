const Sudoku = (() => {
  const createGrid = () => {
    const grid = Array.from({ length: 9 }, () => Array(9).fill(' '));
    const solution = Array.from({ length: 9 }, () => Array(9).fill(' '));

    const previousMoves = [];
    const givenSquares = [];

    const checkRow = (value, index) => {
      return grid[index].includes(value);
    };

    const checkCol = (value, index) => {
      for (let i = 0; i < 9; i++) {
        if (grid[i][index] === value) {
          return true;
        }
      }
      return false;
    };

    const checkBlock = (value, row, col) => {
      for (
        let i = Math.floor(row / 3) * 3;
        i < Math.floor(row / 3) * 3 + 3;
        i++
      ) {
        for (
          let j = Math.floor(col / 3) * 3;
          j < Math.floor(col / 3) * 3 + 3;
          j++
        ) {
          if (grid[i][j] === value) {
            return true;
          }
        }
      }
      return false;
    };

    const generate = (difficulty) => {
      let numbers = '123456789';
      for (let i = 0; i < 9 && numbers.length > 0; i++) {
        const index = Math.floor(Math.random() * numbers.length);
        const value = numbers.substring(index, index + 1);
        grid[0][i] = parseInt(value, 10);
        numbers = numbers.replace(value, '');
      }

      setGivenSquares();
      solveCheck();
      const fullGrid = grid;
      setSolution(fullGrid);
      applyDifficulty(difficulty);
    };

    const applyDifficulty = (difficulty) => {
      for (let i = 0; i < difficulty; ) {
        let found = false;
        let row;
        let col;
        while (!found) {
          row = Math.floor(Math.random() * 9);
          col = Math.floor(Math.random() * 9);
          if (grid[row][col] !== ' ') {
            found = true;
          }
        }
        grid[row][col] = ' ';
        i++;
      }
    };

    const solveCheck = () => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] === ' ') {
            for (let value = 1; value < 10; value++) {
              if (
                !(
                  checkRow(value, i) ||
                  checkCol(value, j) ||
                  checkBlock(value, i, j)
                )
              ) {
                grid[i][j] = value;
                if (solveCheck()) {
                  return true;
                }
                grid[i][j] = ' ';
              }
            }
            return false;
          }
        }
      }
      return true;
    };

    const getSquares = () => {
      const squares = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const square = grid[i][j];
          squares.push(square);
        }
      }
      return squares;
    };

    const setSingleSquare = (coords, num) => {
      const [i, j] = coords;
      grid[i][j] = num;
    };

    const addNumberToGrid = (coords, number) => {
      const [i, j] = coords;
      const prev = grid[i][j];
      grid[i][j] = number;
      previousMoves.push({ coords: coords, prev: prev, new: number });
      checkWin();
    };

    const getLastMove = () => {
      return previousMoves[previousMoves.length - 1];
    };

    const undoLastMove = () => {
      const lastMove = getLastMove();
      setSingleSquare(lastMove.coords, lastMove.prev);
    };

    const setSolution = (fullGrid) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          solution[i][j] = fullGrid[i][j];
        }
      }
      return solution;
    };

    const getSolution = () => solution;

    const setGivenSquares = () => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const coords = [i, j];
          if (grid[i][j] !== ' ') {
            givenSquares.push(coords);
          }
        }
      }
    };

    const getGivenSquares = () => givenSquares;

    const checkWin = () => {
      let win = true;

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] !== solution[i][j]) {
            win = false;
          }
        }
      }
      return win;
    };

    return {
      grid,
      generate,
      getSquares,
      addNumberToGrid,
      getLastMove,
      undoLastMove,
      getSolution,
      getGivenSquares,
      checkWin,
    };
  };
  return createGrid;
})();

export default Sudoku;
