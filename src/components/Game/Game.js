const Sudoku = (() => {
  const createGrid = () => {
    const grid = Array.from({ length: 9 }, () => Array(9).fill(' '));
    const solution = Array.from({ length: 9 }, () =>
      Array(9).fill(' '),
    );

    const printGrid = () => {
      for (let i = 0; i < grid.length; i++) {
        if (i !== 0 && i % 3 === 0) {
          console.log(' -----------------------------');
        }
        let string = '';
        for (let j = 0; j < grid[i].length; j++) {
          if (j % 3 === 0) {
            string += '|';
          }
          string = `${string} ${grid[i][j]} `;
        }
        console.log(`${string}|`);
      }
      console.log(' -----------------------------');
    };

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

      solveCheck();
      const fullGrid = grid;
      setSolution(fullGrid);
      applyDifficulty(difficulty);
    };

    const applyDifficulty = (difficulty) => {
      for (let i = 0; i < difficulty; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        grid[row][col] = ' ';
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

    const getSingleSquare = (coords) => {
      const [i, j] = coords;
      return grid[i][j];
    };

    const getHint = () => {
      let found = false;
      let square;
      while (!found) {
        const i = Math.floor(Math.random() * 9);
        const j = Math.floor(Math.random() * 9);
        square = grid[i][j];
        if (grid[i][j] === ' ') {
          found = true;
        }
      }
      return square;
    };

    const addNumberToGrid = (coords, number) => {
      const [i, j] = coords;
      grid[i][j] = number;
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

    return {
      grid,
      printGrid,
      generate,
      checkCol,
      checkRow,
      checkBlock,
      getSquares,
      getSingleSquare,
      getHint,
      addNumberToGrid,
      getSolution,
    };
  };
  return createGrid;
})();

export default Sudoku;
/*
const sudoku = Sudoku();
sudoku.generate(50);
sudoku.printGrid();
console.log(sudoku.grid[0]);
*/
